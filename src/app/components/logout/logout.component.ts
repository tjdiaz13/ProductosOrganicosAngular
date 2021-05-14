import { Component, OnInit } from '@angular/core';
import { LogoutService } from '../../services/logout.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  userTOKEN: string;

  constructor(private logoutServices: LogoutService, private router: Router) {
  }

  ngOnInit(): void {

  }

}
