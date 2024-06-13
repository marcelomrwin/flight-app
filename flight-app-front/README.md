```shell
nvm use v14.21.3
npm uninstall -g @angular/cli
npm install -g @angular/cli@9.1.12
npm install --save @angular/localize@^9.1.1
npm install --save @angular/service-worker@^9.1.1
npm install --save chart.js@^2.9.4
npm install --save ng2-charts@2.4.3
npm install --save jasmine-core@^3.8
```
## To deploy in Spring boot back
```shell
ng build
rm -rf /Users/masales/Development/projects/flight-app-back/src/main/resources/static/*
cp -r dist/flight-app-front/* /Users/masales/Development/projects/flight-app-back/src/main/resources/static/
```