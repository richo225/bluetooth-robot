# Nativescript bluetooth robot

A mobile app that lets the user send and receive commands to and from a [MiP robot](http://www.meetmip.com) via web bluetooth. This was built using the Nativescript framework (Angular 2 & JavaScript) during a one day [workshop](https://www.meetup.com/London-Javascript/events/234374157/).

Installation
------------
Paste the following Ruby script in the terminal and hit `Enter`:

```
$ sudo ruby -e "$(curl -fsSL https://www.nativescript.org/setup/mac)"
```
Install the Nativescript CLI:
```
$ npm install nativescript -g
```
Check that everything is setup correctly:
```
$ tns doctor
```

Running the app
---------------
Clone the repository to your local machine:
```
$ git clone https://github.com/richo225/bluetooth-robot.git
$ cd bluetooth-robot
```
Make sure you have all the app dependencies:
```
$ npm install
```
Add the Android and iOS platforms to the project:
```
$ tns platform add android
$ tns platform add ios
```
Add the nativescript-bluetooth plugin:
```
$ tns plugin add nativescript-bluetooth
```
Run the app on your device:
```
$ tns run android --watch
$ tns run ios --watch
```
