import { Component } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(
    private router : Router
  ) {}

  token: any = localStorage.getItem('accessToken')
  
  // ngOnInit(){
  //   if (this.token == null) {
  //     this.router.navigate(['/login'])
  //   }
  // }

}
