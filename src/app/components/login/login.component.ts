import { Component, OnInit, Input } from '@angular/core';
import {LoginService} from '../../services/login.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  user  = {
    username: '',
    password: ''
  };
  submitted = false;

  constructor(
    private _loginServices: LoginService,
    private router: Router) {
  }

  ngOnInit(): void {

  }

  login(){
    this.router.navigate(['/catalogo']);
  }

  saveUser(): void {
    const data = {
      username: this.user.username,
      password: this.user.password
    };

    this._loginServices.create(data).subscribe(response => {
      localStorage.setItem('userId', response.data.id);
      localStorage.setItem('token', response.token);
      localStorage.setItem('username', response.data.username);
      console.log(response);
      this.submitted = true;
      this.router.navigate(['catalogo'])
      .then(() => {
        window.location.reload();
      });
    },
      error => {
        console.log(error);
      });
  }
  newClient(): void {
    this.submitted = false;
    this.user = {
      'username': '',
      'password': ''
    };
  }

}