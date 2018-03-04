# Mobile Flashcards

A mobile application made using React Native, React, and Redux.

## How to Run

Running a React Native app is a little different than web apps.

### Supported OS

* Android
* iOS (not tested)

### Run the Development Server

First we need to run the app on our machine.

```sh
$ git clone https://github.com/SyedAman/mobile-flashcards.git # get the source code
$ cd mobile-flashcards
$ yarn # install dependencies
$ yarn start # run dev server
```

### Demo the app

Now that we have the app running on our machine, we now need to use the app.

#### On your phone

You can run the app on your smartphone if you get the Expo app.

* Download the Expo app
* Press q in the terminal where the dev server is running to display QR code in the Expo app
* Scan the QR code and then Expo app should serve the bundled JS

#### On your emulator

You can also run the app on an iOS or Android simulator in your machine.

##### Android

* Run your android simulator (you can use Visual Studio, Android Studio, or Genymotion, etc.)
* Press a in the terminal where the dev server is running for running the app on the android emulator

##### iOS

* Note: has not been tested on iOS!

## How to Debug the App

### Debug the Store and its Reducers and Actions (Redux)

Go to <http://remotedev.io/local/> which will present you with a GUI

### Debug React UI and components

You can also observe the hierarchy for app.

```sh
$ yarn global add react-devtools
$ cd mobile-flashcards
$ react-devtools # open up the dev tools
```
