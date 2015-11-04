# react-native-example
A short example with React-Native buid with webpack and Babel-ES6.
The example is render the Map and show your location.

## Technologies

* [Webpack](https://github.com/webpack/webpack)
* [React-native-webpack-server](https://github.com/mjohnston/react-native-webpack-server/)
* [Babel](https://babeljs.io/)
* [React-native](http://facebook.github.io/react-native)

## Installing

```shell
npm install
```

## Using

### Development

Start react-native-webpack-server.

```shell
npm start
```

This will start the server on port 8080.

On iOS, change the URL of your application bundle in `AppDelegate.m`, changing 8081 to 8080:

```objc
jsCodeLocation = [NSURL URLWithString:@"http://localhost:8080/index.ios.bundle"];
```

On Android, start your emulator or connect your device and run `adb reverse tcp:8081 tcp:8080`. This causes the device to connect to RNWS on port 8080 when it tries to download to <http://localhost:8081/index.android.bundle?platform=android>. Ensure that you also set _Dev Settings_ -> _Debug server host for device_ to "localhost":

<img width="400" alt="screenshot 2015-10-27 22 49 42" src="https://cloud.githubusercontent.com/assets/2177366/10778764/62bf9f80-7cff-11e5-8710-c2e9039f0350.png">

**Note: No debugger or hot module replacement support is available yet for Android.**

### Hot reload
```shell
npm run hot
```

### Bundling for release

When you are ready to ship your app, you will want to generate a minified bundle and package it in the binary. Similar to the [React Native packager](https://facebook.github.io/react-native/docs/running-on-device-ios.html#using-offline-bundle), you can generate an offline JS bundle to use your app without a development server:

```shell
npm bundle
```

