# Brujula

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.4.

## Tailwindcss

<https://jacobneterer.medium.com/angular-and-tailwindcss-2388fb6e0bab>

```shell
npm install tailwindcss -D
npm install @angular-builders/custom-webpack postcss -D
```


ng config projects.brujula.architect.build.builder @angular-builders/custom-webpack:browser
ng config projects.brujula.architect.build.options.customWebpackConfig.path webpack.config.js
ng config projects.brujula.architect.serve.builder @angular-builders/custom-webpack:dev-server
ng config projects.brujula.architect.test.builder @angular-builders/custom-webpack:browser
ng config projects.brujula.architect.test.options.customWebpackConfig.path webpack.config.js