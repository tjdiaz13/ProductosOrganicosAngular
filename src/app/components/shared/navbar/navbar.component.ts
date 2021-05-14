import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import {LogoutService} from '../../../services/logout.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})

export class NavbarComponent implements OnInit {

  userID: number;
  userNAME: string;
  token: string;

  constructor(
    private router: Router,
    private logoutServices: LogoutService
  ) { }

  ngOnInit(): void {
    this.userID =  Number(localStorage.getItem('userId'));
    this.userNAME = localStorage.getItem('username');
    this.token = localStorage.getItem('token');
  }

  logout(): void {
    this.logoutServices.logout(this.token).then(() => {
        console.log('after executing service');
        localStorage.setItem('userId', '');
        localStorage.setItem('username', '');
        this.router.navigate(['/home']);
        this.ngOnInit();
    });
  }
}
