import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private httpClient: HttpClient,
    private router : Router
  ) {}

  loginForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  })

  loginButton(){
    this.httpClient.post<any>('http://localhost:3000/auth/login', {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    }, {
      observe: 'response'
    })
    .subscribe(
      response => {
        const token = response.body?.data
        const decode: any = jwtDecode(token)
        const roleName = decode.role.role_name

        if (roleName === 'owner') {
          this.router.navigate(['/owner-dashboard'])
          localStorage.setItem('accessToken', token)
        } else if (roleName === 'gudang') {
          alert('Gudang nihh')
        } else if (roleName === 'kasir') {
          alert('Kasir nihh')
        }
      }
    )
  }

}
