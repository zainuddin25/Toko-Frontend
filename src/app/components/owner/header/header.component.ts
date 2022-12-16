import { Component } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router : Router) {}

  token: any = localStorage.getItem('accessToken')
  decode: any = jwtDecode(this.token)

  username : string = this.decode.username

  ngOnInit() {
    const token = localStorage.getItem('accessToken')
  }

  logoutButton() {
    localStorage.clear()
    this.router.navigate(['/login'])
  }

}
