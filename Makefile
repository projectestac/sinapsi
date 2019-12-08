#!/usr/bin/make -f
# Makefile for Sinapsi


DEFAULT_APP = sinapsi
DEFAULT_LOCALE = en

.DEFAULT_GOAL := all
.PHONY: *


# =============================================================================
# Build tools
# =============================================================================

SHELL       = /bin/sh
INSTALL     = /usr/bin/install

COMPOSER    = composer
MYSQL       = mysql
NPM         = npm
PHP         = php
RSYNC       = rsync
NG          = ng
NODE        = node

POMERGE     = pomerge

PRINT       = @printf "\033[1;92m== %s\033[0m\n"


# =============================================================================
# Default parameters
# =============================================================================

srcdir	 ?= $(CURDIR)
outdir	 ?= $(srcdir)/build
distdir	 ?= $(srcdir)/packages
i18ndir	 ?= $(srcdir)/locales

wwwdir	 ?= /var/www
sitedir	 ?= /etc/apache2/sites-available
user	 ?= www-data
group	 ?= www-data

name	 ?= sinapsi
apps	 ?= sinapsi embed
locales	 ?= en ca es
target	 ?= production
root	 ?=
version	 ?= $(shell date +%Y%m%d)

app		 ?= sinapsi
locale	 ?= en


# =============================================================================
# Compile the software
# =============================================================================

all: dependencies backend public

	$(PRINT) "Done."


# =============================================================================
# Update vendor libraries and build dependencies
# =============================================================================

dependencies:

	$(PRINT) "Resolving dependencies"

	test -d $(srcdir)

	mkdir -p $(outdir)
	mkdir -p $(outdir)/public

	cd $(srcdir)/frontend && $(NPM) install


# =============================================================================
# Compile the backend
# =============================================================================

backend: dependencies

	$(PRINT) "Compiling the backend"

	$(RSYNC) -avh --exclude-from=$(srcdir)/backend/.rsyncignore \
	--no-perms --no-owner --no-group --delete \
	$(srcdir)/backend/ $(outdir)/

	cp $(srcdir)/settings/$(target).env $(outdir)/.env
	cp $(srcdir)/settings/$(target).htaccess $(outdir)/public/.htaccess

	cd $(outdir) && $(COMPOSER) install
	cd $(outdir) && $(COMPOSER) dump-autoload
	cd $(outdir) && $(PHP) artisan clear-compiled
	cd $(outdir) && $(PHP) artisan cache:clear
	cd $(outdir) && $(PHP) artisan route:cache

	mkdir -p $(outdir)/storage/framework/cache
	mkdir -p $(outdir)/storage/framework/sessions
	mkdir -p $(outdir)/storage/framework/views
	mkdir -p $(outdir)/storage/logs/app

	echo > $(outdir)/storage/logs/laravel.log
	echo > $(outdir)/storage/logs/app/app_events.log
	echo > $(outdir)/storage/logs/app/queue.log
	echo > $(outdir)/storage/logs/app/schedule.log


# =============================================================================
# Compile a frontend application
# =============================================================================

frontend: dependencies

	$(PRINT) "Compiling frontend: app=$(app), locale=$(locale)"

ifeq ($(app),$(DEFAULT_APP))
	$(eval base := $(locale))
	$(eval path := $(outdir)/public/$(locale))
else
	$(eval base := $(locale)/$(app))
	$(eval path := $(outdir)/public/$(locale)/$(app))
endif

	$(eval args += --prod)
	$(eval args := --progress=false)
	$(eval args += --deploy-url=)
	$(eval args += --project=$(app))
	$(eval args += --base-href=$(root)/$(base)/)
	$(eval args += --configuration=$(locale))
	$(eval args += --i18n-locale=$(locale))
	$(eval args += --output-path=$(path))

ifneq ($(locale),$(DEFAULT_LOCALE))
	$(eval args += --i18n-missing-translation=ignore)
	$(eval args += --i18n-file=src/locales/messages.$(locale).xlf)
	$(eval args += --i18n-format=xlf)
endif

	cd $(srcdir)/frontend && $(NG) build $(args)

	find $(path) -name 'index.html' -exec \
	sed -r -i 's|<html[^>]+>|<html lang="$(locale)">|' {} \;


# =============================================================================
# Build all the web apps
# =============================================================================

public: dependencies backend

	$(PRINT) "Compiling frontend applications"

	@for app in $(apps); do \
	for locale in $(locales); do \
		$(MAKE) frontend app=$$app locale=$$locale \
				target=$(target) srcdir=$(srcdir) || exit $$?; \
	done; \
	done;


# =============================================================================
# Create a distribution .tar file
# =============================================================================

dist:

	$(PRINT) "Creating distribution package"

	test -d $(outdir)
	mkdir -p $(distdir)

	cd $(outdir) && tar -cvJ \
	-f "$(distdir)/$(name)-$(version).$(target).tar.xz" * .[!.]*


# =============================================================================
# Install the software
# =============================================================================

install:

	test -d $(outdir)
	test -d $(wwwdir)

	$(eval path := $(wwwdir)/$(name))

	$(PRINT) "Installing application"

	mkdir -p $(path)
	cp -r $(outdir)/. $(path)

	chmod -R a+r-wx $(path)
	chmod -R a+rX $(path)
	chmod -R u+wx $(path)
	chmod -R g+rwx $(path)/storage
	chmod -R g+rwx $(path)/bootstrap/cache

	chgrp -R $(group) $(path)/public
	chgrp -R $(group) $(path)/storage
	chgrp -R $(group) $(path)/bootstrap/cache

	$(PRINT) "Cron tasks, services and hosts"

	cd $(srcdir)/system && find * -type f -exec $(INSTALL) -m 644 ./{} /{} \;
	cd $(srcdir)/system && find * -type f -exec sed -i 's|@user@|$(user)|g' /{} \;
	cd $(srcdir)/system && find * -type f -exec sed -i 's|@path@|$(path)|g' /{} \;

	systemctl daemon-reload
	systemctl start sinapsi-queue.service
	service cron force-reload

	$(INSTALL) -m 644 $(srcdir)/settings/$(target).virtualhost \
	/$(sitedir)/sinapsi.conf

	a2ensite sinapsi.conf
	service apache2 reload

	$(PRINT) "Creating database"

	. $(path)/.env && cd $(srcdir)/database && \
	$(MYSQL) --force --local-infile \
	--user=$$DB_USERNAME --password=$$DB_PASSWORD < sinapsi.sql

	$(PRINT) "Generating encryption key"

	cd $(path) && $(PHP) artisan key:generate > /dev/null
	cd $(path) && $(PHP) artisan up


# =============================================================================
# Lint source files
# =============================================================================

lint:

	$(PRINT) "Running linters"

	@cd $(srcdir)/frontend && $(NG) lint || true

	@find $(srcdir)/backend/app -iname "*.php" -exec \
	php -l {} \; | grep -v "No syntax errors" || true

	@phpcs --report=emacs --standard=PHPCompatibility \
		 --runtime-set testVersion 5.6-7.0 \
		 $(srcdir)/backend/app || true

	@phpcs --report=emacs --standard=$(srcdir)/backend/ruleset.xml \
		 $(srcdir)/backend/app || true


# =============================================================================
# Serve the frontend in development mode using Angular CLI
# =============================================================================

serve:

	cd $(srcdir)/frontend && $(NG) serve --port 4200 \
	--public-host http://localhost:4200/


# =============================================================================
# Extract internationalizable messages
# =============================================================================

i18n:

	$(PRINT) "Building i18n templates"

	mkdir -p $(i18ndir)
	cd $(srcdir)/frontend && $(NG) xi18n --output-path $(i18ndir)
	cd $(srcdir)/frontend && $(NODE) gettext.js > $(i18ndir)/messages.pot


# =============================================================================
# Merge translations
# =============================================================================

i18n-merge: i18n

	$(PRINT) "Merging translations"

	for locale in $(locales); do \
	$(POMERGE) -t locales/messages.pot \
				 -i frontend/src/locales/messages.$$locale.po \
				 -o locales/messages.$$locale.po || exit $$?; \
	done;

	for locale in $(locales); do \
	$(POMERGE) -t locales/messages.xlf \
				 -i frontend/src/locales/messages.$$locale.xlf \
				 -o locales/messages.$$locale.xlf || exit $$?; \
	done;


# =============================================================================
# Clean up build files
# =============================================================================

clean:

	$(PRINT) "Cleaning up build files"

	-rm -r $(outdir)
