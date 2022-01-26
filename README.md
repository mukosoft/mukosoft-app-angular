<div style="background: white">

![alt text](https://mukosoft.de/static/media/logo.46ae642b.png)
</div>

# Mukosoft-App: Angular
[![Build & Test](https://github.com/mukosoft/mukosoft-app-angular/actions/workflows/build_and_test.yml/badge.svg?branch=main)](https://github.com/mukosoft/mukosoft-app-angular/actions/workflows/build_and_test.yml)
[![Netlify Status](https://api.netlify.com/api/v1/badges/a4c38499-1244-4f6a-af05-e0b1c61f92d9/deploy-status)](https://app.netlify.com/sites/mukosoft-app/deploys)

The MukoSoft app is a web-based Angular 13 app which is designed to support people with the metabolic disease "cystic fibrosis". The app is designed to:
- enable patients to communicate with doctors and support groups via an interface.
- display news from the practice or from the support group
- remind patients to take their medication
- be able to manage the medication supply
- contain a cookbook with recipes specifically tailored to the disease

## Support

The project thrives on the community and supporters. We thank all who participate in it.


<div style="background: teal; display: flex; justify-content: center">

![alt text](https://www.muko-dresden.info/wp-content/uploads/2016/11/Logo_weiß_web.png)
![alt text](https://my-doc.net/gfx/My-Doc-Logo-negativ-2018_optimiert.svg)

</div>

## Development
### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code Guidelines

This project uses eslint. The rules for the code guidelines are found under .eslintrc.json.  

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. After building, netlify
will deploy the app under [https://mukosoft-app.netlify.app](https://mukosoft-app.netlify.app).

### Testing

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io). The code-coverage report should be above
85 %.

### Running end-to-end tests

The app uses cypress. This is a work-in-progress.