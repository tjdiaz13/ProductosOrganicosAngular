import { Component, OnInit, Input } from '@angular/core';
import {LoginService} from '../../services/login.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  user  = {
    username: '',
    password: ''
  }
  submitted = false;

  constructor( private _loginServices:LoginService ) { 
     
  }

  ngOnInit(): void {
    
  }

  saveUser(): void {
    const data = {
      username: this.user.username,
      password: this.user.password
    };

    this._loginServices.create(data).subscribe(response => {
      console.log(response);
      this.submitted = true;
    },
      error => {
        console.log(error);
      });

  }
  newClient(): void {
    this.submitted = false;
    this.user = {
      "username": "",
      "password": ""
    };
  }

}
