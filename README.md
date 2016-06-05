Ionic Compass App
=====================

Compass application for IOS written in <a href="http://ionicframework.com/">Ionic</a> (AngularJS, CSS, HTML). 
Supports latitude/longitude in dms/deg format and magnetic north. 

<img src="https://dl.dropboxusercontent.com/u/3841253/compas-screenshot.png" width="320" height="568" alt="ionic compas app screenshot" />

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
 
    $ ionic serve

More info on this can be found on the Ionic [Getting Started](http://ionicframework.com/getting-started) page and the [Ionic CLI](https://github.com/driftyco/ionic-cli) repo.