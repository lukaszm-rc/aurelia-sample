# Aurelia sample app

## Depedencies
- npm
- jspm

## Usage
 Just clone the repository, and then
 ```
 npm install
 jspm install
 ```

## Suggested structure
    - **src** = Root directory and contains; app.html, app.js and main.js
    - **assets** = Where all assets of the app live (with separate sub-folders)
    - **components** = Where common application components like headers, navigation, footer, etc live
    - **lib** = Where generic non-app specific code lives. Utility classes and functions for doing utility-like tasks
    - **pages** = Where our route matching page Views and ViewModels live. This matches the predefined routes
    - **resources** = Where our custom elements and value converters live
    - **services** = A folder for singleton service classes like keeping track of state or working with API’s

## Deploying app
Use this command to build dist/aurelia.js file: 
 
```
gulp bundle
```

## Watch for changed files

[http://localhost:9000]

```
gulp watch
```
Gulp watches for changed files in **src/** directory and reload browser if needed.

## Known issues
- Gulp downloads modules to project's root directory, so when You use this files in subdirectory it makes a mess.