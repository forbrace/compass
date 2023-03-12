Ionic Compass App
=====================

Compass application for IOS written in <a href="http://ionicframework.com/">Ionic</a> (AngularJS, CSS, HTML). 
Supports latitude/longitude in dms/deg format and magnetic north. 

## Using this project

### 1. Install Ionic

    $ npm install -g cordova ionic

Clone, ` cd ` to ` /compass ` folder and run

    $ ionic platform add ios

### 2. Add plugins

    $ cordova plugin add cordova-plugin-geolocation
    $ cordova plugin add cordova-plugin-device-orientation

### 3. Deploying
 
You can use the <a href="https://apps.ionic.io/apps">Ionic View app</a> and view the app via <code>$ ionic upload</code>. 


Build 

    $ ionic build ios

Emulator run

    $ ionic emulate ios

Device run

    $ ionic run ios --device
    
Or open the resulting XCode project from platforms/ios

### 4. Development

Environment setup to do some testing

    $ npm install karma --save-dev
    $ npm install karma-phantomjs-launcher --save-dev
    $ npm install phantomjs-prebuilt --save-dev
    $ npm install jasmine-core --save-dev
    $ npm install karma-jasmine --save-dev
    $ bower install angular-mocks --save-dev
    $ karma init karma.config.js
    
Run tests

    karma start karma.config.js

Add Sass support

    $ ionic setup sass

Serve
 
    $ ionic serve

More info on this can be found on the Ionic [Getting Started](http://ionicframework.com/getting-started) page and the [Ionic CLI](https://github.com/driftyco/ionic-cli) repo.
