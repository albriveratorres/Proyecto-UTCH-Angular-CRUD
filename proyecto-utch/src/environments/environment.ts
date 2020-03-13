// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  //conexion a firebase
  firebase: {
    apiKey: "AIzaSyCAT2xK6Y9ne_LlEIF2Dpd44D0touhgq4Q",
    authDomain: "angular-crud-a47f3.firebaseapp.com",
    databaseURL: "https://angular-crud-a47f3.firebaseio.com",
    projectId: "angular-crud-a47f3",
    storageBucket: "angular-crud-a47f3.appspot.com",
    messagingSenderId: "111913031909",
    appId: "1:111913031909:web:274e6160b2ca5f50e91c0c",
    measurementId: "G-NJ1MSJL556"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
