import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  totalProduct: number = 0
  totalMembers: number = 0

  constructor(
    private router : Router,
    private httpClient: HttpClient
  ) {}

  ngOnInit() {
    this.getDataProduct()
    this.getDataMembers()
  }
  
  getDataProduct() {
    const token = localStorage.getItem('accessToken')

    this.httpClient.get<any>('http://localhost:3222/product', {
      headers: ({
        'Authorization' : `Bearer ${token}`
      }),
      observe : 'response'
    })
    .subscribe(
      response => {
        this.totalProduct = response.body.meta.totalItems
      }
    )
  }

  getDataMembers() {
    const token = localStorage.getItem('accessToken')

    this.httpClient.get<any>('http://localhost:3222/users', {
      headers: ({
        'Authorization' : `Bearer ${token}`
      }),
      observe: 'response'
    })
    .subscribe(
      response => {
        this.totalMembers = response.body?.count
      }
    )
  }

}
