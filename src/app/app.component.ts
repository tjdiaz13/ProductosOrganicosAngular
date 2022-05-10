import { Component } from '@angular/core';
import {LocationStrategy, PlatformLocation} from '@angular/common';
import {NavigationStart, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mercados Organicos';

  constructor(location: PlatformLocation) {
    location.onPopState(() => {
      console.log('principal');
      alert(window.location);
    }); }

}
