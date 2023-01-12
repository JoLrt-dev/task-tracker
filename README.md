# TaskTracker

Credits to TraversyMedia, following his 'Angular Crash Course' on Youtube : https://www.youtube.com/watch?v=3dHNOWTI7H8

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component <component-name>` to generate a new component.

Run `ng generate service <service-name>` to generate a new service.

## Mock back-end server

Run `npm i json-server` to install the package that will allo you to create a full fake REST API.
Create a `db.json` file on the root folder of your app, fill in with any data you want to mock,
and then add ` "server": "json-server --watch db.json --port 5000"` to your package script to run your json-server on port 5000 with `npm run server`.

This is kind of a better way to mock data than doing it with the `mock-data.ts file` .

Check https://www.npmjs.com/package/json-server for documentation.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
