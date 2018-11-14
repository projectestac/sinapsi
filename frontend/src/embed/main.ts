import 'rxjs-operators';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { EmbedModule } from 'embed/app/embed.module';
import { environment } from 'environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(EmbedModule);
