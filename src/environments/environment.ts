// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { temporaryAllocator } from '@angular/compiler/src/render3/view/util';

export const environment = {
  production: false,
  apiURL: "https://api.github.com/users/",
  apiKey:"?655ef8416767c9dc64cc6d7d3a6570e6d79c498e.json",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
