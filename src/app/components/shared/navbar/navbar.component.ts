import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Auth } from 'src/app/models/auth';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  get Auth(){
    return this.loginService.Auth; 
  }
  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
  }

  userlogin(){
    const userId = Number(localStorage.getItem('userId'));
    const userName = Number(localStorage.getItem('userId'));
  }

  logout(){

    this.router.navigate(['/home']);
  }

}
