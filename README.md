# Alarm Clock in React Native

[![GithubFollow @svbala99](https://img.shields.io/github/last-commit/svbala99/alarm?)](https://github.com/svbala99/)[![GithubFollow @svbala99](https://img.shields.io/github/languages/count/svbala99/alarm?color=orange)](https://github.com/svbala99/) [![GithubFollow @svbala99](https://img.shields.io/github/languages/top/svbala99/alarm?color=blueviolet)](https://github.com/svbala99/) [![GithubFollow @svbala99](https://img.shields.io/github/languages/code-size/svbala99/alarm?color=pink)](https://github.com/svbala99/) [![GithubFollow @svbala99](https://img.shields.io/github/repo-size/svbala99/alarm)](https://github.com/svbala99/) [![GithubFollow @svbala99](https://img.shields.io/github/commit-activity/m/svbala99/alarm?color=%23DB62B2%20)](https://github.com/svbala99/)

### A simple app in react native to implement alarm clock that makes use of [react native bridge](https://reactnative.dev/docs/native-modules-android), schedule alarm with [Alarm Manager for Android](https://developer.android.com/reference/android/app/AlarmManager) .

### Prerequisites: 
- You should have the latest build system for Android, Java, React Native.

## Screenshots
| View all alarms          | Create or edit alarm         | Ring              |
|-----------------------------|-------------------------------|--------------------------------|
| ![](./screenshots/alarm-screen.png) | ![](./screenshots/edit-screen.png) | ![](./screenshots/ring-screen.png) |

## Features

- Alarm will go on even if the app is killed; this is the tricky area where you cannot run a task without headless JS when the app is killed - react native apps run on JS thread - single threaded, if that thread is killed, no way to perform any action). Native modules are implemented here, thereby invoking the Native Android Alarm manager to store and retrieve alarm details and fire it approproately with play, pause, update, etc operations.

## Technology

- React Native : For Cross platform mobile app development
- Node JS: For runtime environment
- Javascript : For application development
- VS code : Code editor IDE
- Linting: eslint

## Installation

This App requires [Node.js](https://nodejs.org/) v10+ to run.

##### Download the repo and install dependencies

```sh
git clone git@github.com:svbala99/alarm.git
cd alarm
npm i
```

##### Start the development server

```sh
npm start
```

##### Install the app first time in Android (in Dev mode)

- Connect any Android device with USB
- Enable USB debugging in the device
- Accept to INSTALL the app when prompted during the deployment
- This command is not needed for subsequent changes made in project
- Whenever you include any package that impacts Android native, reinstall the app by issuing this command
- Alternatively the same can be achieved from Android Studio IDE by clicking "Run" button after opening "Android" project in it
- Supported Machines: Windows / Linux / Mac

```sh
npm run android
```

##### Install the app first time in iPhones (iOS) - Dev mode

- Connect any Android device with USB
- Enable USB debugging in the device
- Accept to INSTALL the app when prompted during the deployment
- This command is not needed for subsequent changes made in project
- Whenever you include any package that impacts Android native, reinstall the app by issuing this command
- Alternatively the same can be achieved from Xcode IDE by clicking "Build" & "Run" button after opening "iOS" folder in it
- Supported Machines: Mac only

```sh
cd ios && pod install && cd ..
npm run ios
```

## To generate iOS ipa file
- Set the scheme to "Any iOS Simulator"
- Xcode -> product -> clean
- Xcode -> product -> Archive
- After 15mins, build will be archived, you can export the build now
- In the archive window opened, choose "development" method of distribution
- Choose "Automatically manage signing"
- Select the location you want to export and click OK

## To generate Android APK

```bash
gradlew assembleRelease (APK file)
gradlew bundleRelease (AAB file)
```
- For more details: https://reactnative.dev/docs/signed-apk-android
Note: If you run in Linux, issue ./gradlew instead of gradlew

## Output file location

You will find the APK file in:

```bash
~PROJECT_LOCATION\android\app\build\outputs\apk\release
```

## Install the released APK

```bash
adb install app-release.apk
```

## Packages used

| Package                   | Version |
| ------------------------- | ------- |
| React                     | 17      |
| React Native              | 0.68.2    |

and basic necessary packages for react navigation stack and uuid.


## License

GNU GPL

[![React Native](https://reactnative.dev/img/oss_logo.png)](https://reactnative.dev/)
