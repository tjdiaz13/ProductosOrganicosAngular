import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})

export class NavbarComponent implements OnInit {

  userID: number;
  userNAME: string;

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
    this.userID =  Number(localStorage.getItem('userId'));
    this.userNAME = localStorage.getItem('username');
  }

  logout(){
    localStorage.setItem('userId', '');
    localStorage.setItem('username', '');
    this.router.navigate(['/home']);
    this.ngOnInit();
  }
}
