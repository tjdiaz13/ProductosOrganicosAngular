import { Component, OnInit } from '@angular/core';
import { LogoutService } from '../../services/logout.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private _logoutServices:LogoutService, private router: Router) { 
    
  }

  ngOnInit(): void {
    this._logoutServices.logout;
    localStorage.setItem('userId', '');
    localStorage.setItem('username', '');
  }

}
