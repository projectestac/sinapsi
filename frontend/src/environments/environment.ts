// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {

  /* Production mode */
  production: false,
  
  /* Application name */
  title: 'Sinapsi',
  
  /* Supported application locales */
  locales: [
    { code: 'ca', name: 'català' },
    { code: 'es', name: 'castellano' },
    { code: 'en', name: 'English' }
  ],
  
  /* Maximum number of pages to show */
  maxPages: 3

};
