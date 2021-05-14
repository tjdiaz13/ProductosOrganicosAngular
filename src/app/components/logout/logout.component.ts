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

  constructor(private _logoutServices:LogoutService, private router: Router) { 
    
  }



  ngOnInit(): void {

    const data = {
      user: localStorage.getItem('token')
    };
    console.log(this.userTOKEN);
    this._logoutServices.logout(data).subscribe(response => {;
          localStorage.setItem('userId', '');
          localStorage.setItem('username', '');
          console.log(localStorage.getItem('token'));
          this.router.navigate(['/home']);
    },
      error => {
         console.log(error);
    });
  }

}
