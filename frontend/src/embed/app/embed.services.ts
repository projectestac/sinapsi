import { Injectable } from '@angular/core';
import { Location, LocationStrategy } from '@angular/common';
import { PathLocationStrategy } from '@angular/common';
import { CanDeactivate } from '@angular/router';
import { HomeComponent } from './home.component';


/** Pattern to match external URLs */
const MATCH_APP_URL_REGEX = new RegExp('^/[^\?#]');

/** Pattern to strip the last folder of a path */
const STRIP_LAST_FOLDER_REGEX = new RegExp('[^/]+/?$');


/**
 * Forces the loading of routes into a new pop up window. This
 * guard is applied to all the links found on the embed.
 */
@Injectable()
export class PopupRoute implements CanDeactivate<HomeComponent> {

    /**
     * Service constructor.
     */
    constructor(
        private locator: LocationStrategy
    ) {}


    /**
     * {@inheritDoc}
     */
    canDeactivate(component, route, state, nextState) {
        const isRoot = !MATCH_APP_URL_REGEX.test(nextState.url);

        if (isRoot === false) {
            const url = this.locator.prepareExternalUrl(nextState.url);
            window.open(url, '_blank');
        }

        return isRoot;
    }

}


/**
 * This is a path based location strategy that rewrites the router
 * paths to point them to the main application.
 */
@Injectable()
export class EmbedLocationStrategy extends PathLocationStrategy {

    /**
     * {@inheritDoc}
     */
    prepareExternalUrl(path: string): string {
        return Location.joinWithSlash(this.getBasePath(path), path);
    }


    /**
     * Returns the base href appliable to the given path.
     *
     * @param               Path to parse
     * @return              Base HREF for the path
     */
    private getBasePath(path: string): string {
        return MATCH_APP_URL_REGEX.test(path) ?
            this.stripLastFolder(this.getBaseHref()) :
            this.getBaseHref();
    }


    /**
     * Strips the last folder from the given path.
     *
     * @param path          Path to process
     * @return              New path
     */
    private stripLastFolder(path: string): string {
        return path.replace(STRIP_LAST_FOLDER_REGEX, '');
    }

}
