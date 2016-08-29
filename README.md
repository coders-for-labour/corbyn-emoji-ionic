# Jeremoji

Jeremy Corbyn & Labour themed images to share with your friends and on social media.

# Installation

This app uses the Ionic framework.

## Dependencies (Install First)
* [node.js & npm](https://nodejs.org/en/)
* [ionic](http://ionicframework.com/getting-started/)

## Getting Started

1. Ensure dependencies are installed.

2. Install app dependencies

        npm install

3. Add the Android platform

        ionic platform add android

5. Build and run against your device (Connect via USB & enable debugging)

        ionic run android

## Development

You'll probably spend most of your time testing in-browser. In order to ease development,
use the Ionic Serve command to keep an instance running and reloading as you work.

    ionic serve

## Deployment
You will need access to the keystore and passwords in order to build this app for deployment.
If you believe you should have access, contact the co-ordinator of your C4C group.

Place the keystore in the root directory, and the release-signing.properties in platforms/android/, then run the following command:

    ionic build android --release

This should generate a signed .apk which you can use for deployment.
