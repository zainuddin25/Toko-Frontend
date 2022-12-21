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

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'category', 'werehouse'];

  // @ViewChild(MatPaginator) paginator: any = MatPaginator;
  @ViewChild(MatSort) sort: any = MatSort

  constructor(private httpClient: HttpClient) {}

  ngOnInit(){
    this.getDataProducts()
  }

  getDataProducts() {
    const accessToken = localStorage.getItem('accessToken')

    this.httpClient.get<any>('http://localhost:3222/product', {
      headers: ({
        'Authorization' : `Bearer ${accessToken}`
      }),
      observe: 'response'
    })
    .subscribe(
      response => {
        this.dataPeroducts = response.body?.data
        const list_product = new MatTableDataSource<any>(this.dataPeroducts)
        // list_product.paginator = this.paginator;

        // console.log(this.paginator.MatPaginator)
        // console.log(this.paginator.MatPaginator)
      }
    )
  }
}
