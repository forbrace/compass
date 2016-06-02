Ionic Compass App
=====================

A geolocation app that shows latitude and longitude in dms/deg format.

## Using this project

### 1. Install Ionic
```
$ npm install -g cordova ionic
```

### 2. Add plugins
```
$ cordova plugin add cordova-plugin-geolocation
```

```
$ cordova plugin add cordova-plugin-device-orientation
```

### 3. Run it
```
$ ionic platform add ios
```

```
$ ionic build ios
```

Run on emulator

```
$ ionic emulate ios
```

or on real device

```
$ ionic run ios --device
```

### 4. Development
 ```
 $ ionic serve
 ```

More info on this can be found on the Ionic [Getting Started](http://ionicframework.com/getting-started) page and the [Ionic CLI](https://github.com/driftyco/ionic-cli) repo.