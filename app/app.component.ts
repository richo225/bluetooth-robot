import {Component} from "@angular/core";

var bluetooth = require("nativescript-bluetooth");

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent {

  hasPermissions(){
    bluetooth.hasCoarseLocationPermission()
      .then (granted => {
        alert("Permission" + granted);
      });
  };

  grantPermissions(){
    bluetooth.hasCoarseLocationPermission()
      .then(() => {
        alert("Permission requested");
      });
  }

  scan(){
    bluetooth.startScanning({
      serviceUUIDs: [],
      seconds: 4,
      onDiscovered: (peripheral) => {
        console.log("Periperhal found with Name: " + peripheral.name);
        console.log("Periperhal found with UUID: " + peripheral.UUID);
        console.log("");
      }
    }).then(function() {
      console.log("scanning complete");
    }, function (err) {
      console.log("error while scanning: " + err);
    });
  }

  connect() {
    bluetooth.connect({
      UUID: this.UUID,
      onConnected: ((peripheral) => {
        console.log("Periperhal connected with UUID: " + peripheral.UUID);
      }),
      onDisconnected: function (peripheral) {
        alert("Device disconnected");
      }
    });
  }

  moveFwd() {
    bluetooth.writeWithoutResponse({
      peripheralUUID: this.UUID,
      serviceUUID: 'ffe5',
      characteristicUUID: 'ffe9',
      value: '0x71,0x15,0xff' // in hex 1
    }).then(function(result) {
      console.log("value written");
    }).then(function(err) {
      console.log("write error: " + err);
    });
  }

  moveBck() {
    bluetooth.writeWithoutResponse({
      peripheralUUID: this.UUID,
      serviceUUID: "ffe5",
      characteristicUUID: "ffe9",
      value: "0x71,0x15,0xff"
    }).then(function(result) {
      console.log("value written");
    }).then(function(err) {
      console.log("write error; " + err);
    });
  }

  turnLeft() {
    bluetooth.writeWithoutResponse({
      peripheralUUID: this.UUID,
      serviceUUID: "ffe5",
      characteristicUUID: "ffe9",
      value: "0x74,0x60,0x10"
    }).then(function(result) {
      console.log("value written");
    }).then(function(err) {
      console.log("write error; " + err);
    });
  }

  turnRight() {
    bluetooth.writeWithoutResponse({
      peripheralUUID: this.UUID,
      serviceUUID: "ffe5",
      characteristicUUID: "ffe9",
      value: "0x74,0x60,0x10"
    }).then(function(result) {
      console.log("value written");
    }).then(function(err) {
      console.log("write error; " + err);
    });
  }

  flash() {
    bluetooth.writeWithoutResponse({
      peripheralUUID: this.UUID,
      serviceUUID: "ffe5",
      characteristicUUID: "ffe9",
      value: "0x89,0x0,0x0,0x0,0x50,0x50"
    }).then(function(result) {
      console.log("value written");
    }).then(function(err) {
      console.log("write error; " + err);
    });
  }

}
