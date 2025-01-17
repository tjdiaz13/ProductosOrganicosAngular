import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
    this.redirect('/home');
  }

  redirect(routePath: any) {
    this.route.navigate([routePath]);
  }
}
