import {Component, OnInit} from '@angular/core';
import {Location, PlatformLocation} from '@angular/common'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(location: PlatformLocation) {
    location.onPopState(() => {
      alert(window.location);
    }); }

  ngOnInit(): void {
    console.log('cargando');

    /*window.history.pushState({page: 1}, "", "");

    window.onpopstate = function (event) {

      console.log('buenas buenas');
      if (event) {
        console.log('jijij');
      } else {
        console.log('naaaaa');
      }
    }*/
  }
}
