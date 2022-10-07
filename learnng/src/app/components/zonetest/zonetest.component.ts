import { Component, OnInit, NgZone } from '@angular/core';
import * as rx from 'rxjs';

// Testing to see when the UX gets updated depending on where a timer is
// created. This really depends on whcih angular zone something runs.
// Zones is crazy and hard for me to figure out what the behavior is going to be.
// I can't believe how many things it seems to "patch".

var die1: number|null = null;
var die2: number|null = null;

let caseType: number = 2;

function getZoneName() {
  return (window as any)["Zone"].current.name;
}

function startPeriodicRolling() {
  setInterval(() => {
    die1 = Math.floor(Math.random() * 6 + 1);
    die2 = Math.floor(Math.random() * 6 + 1);
    console.log(`Roll: [${die1}, ${die2}] Zone=${getZoneName()} Case=${caseType}`);
  }, 1000)
}


if (caseType == 1) {
  // If you create the timer here then the angular component won't be checked for changes.
  startPeriodicRolling();
}

@Component({
  selector: 'app-zonetest',
  templateUrl: './zonetest.component.html',
  styleUrls: ['./zonetest.component.scss']
})
export class ZonetestComponent {

  get roll() {
    return [die1, die2];
  }

  constructor(ngZone: NgZone) {
    if (caseType == 2) {
      // If you start the timer here it should be running in an angular zone.
      // The template will be updated as changes occurs.
      startPeriodicRolling();
    }

    else if (caseType == 3) {
      // You can run code outside of the angular zone
      // This should keep change detection from running.
      ngZone.runOutsideAngular(startPeriodicRolling);
    }
  }
}
