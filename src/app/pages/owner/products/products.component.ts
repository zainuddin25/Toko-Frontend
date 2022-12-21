import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  public dataPeroducts: any = []

  itemsTotal = 0
  page: number = 1
  limit: number = 10  
  maxPage: number = 0

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'category', 'werehouse'];

  // @ViewChild(MatPaginator) paginator: any = MatPaginator;
  @ViewChild(MatSort) sort: any = MatSort

  constructor(private httpClient: HttpClient) {}

  ngOnInit(){
    this.getDataProducts()
  }

  getDataProducts() {
    const accessToken = localStorage.getItem('accessToken')

    this.httpClient.get<any>(`http://localhost:3222/product?page=${this.page}&limit=${this.limit}`, {
      headers: ({
        'Authorization' : `Bearer ${accessToken}`
      }),
      observe: 'response'
    })
    .subscribe(
      response => {
        this.dataPeroducts = response.body.items
        this.itemsTotal = response.body.meta.totalItems
        const max = this.itemsTotal / this.limit
        this.maxPage = Math.ceil(max)
      }
    )
  }

  handleNextBuutton() {
    this.page += 1
    if (this.page > this.maxPage) {
      this.page = this.maxPage
      this.getDataProducts()
    }
    this.getDataProducts()
  }

  handleBackButton() {
    this.page -= 1
    if (this.page == 0) {
      this.page = 1
      this.getDataProducts()
    }
    this.getDataProducts()
  }
}
