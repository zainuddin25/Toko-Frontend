import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-setting-product',
  templateUrl: './setting-product.component.html',
  styleUrls: ['./setting-product.component.css']
})
export class SettingProductComponent {
  public dataPeroducts: any = []

  product_name: string = ''
  ready_stock: any = null
  category: string = ''
  username: string = ''
  price: string = ''
  id: string = ''

  displayedColumns: string[] = ['name', 'weight'];

  @ViewChild(MatPaginator) paginator: any = MatPaginator;

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
        list_product.paginator = this.paginator;

        // console.log(this.paginator.MatPaginator)
        // console.log(this.paginator.MatPaginator)
      }
    )
  }

  onClickSetId(id: string) {
    const token = localStorage.getItem('accessToken')

    this.httpClient.get<any>(`http://localhost:3222/product/${id}`, {
      headers: ({
        'Authorization' : `Bearer ${token}`
      }),
      observe: 'response'
    })
    .subscribe(
      response => {
        // this.detailProduct = response.body
        this.product_name = response.body.product_name
        this.ready_stock = response.body.ready_stock
        this.username = response.body.user?.username
        this.category = response.body.category
        this.price = response.body.price
        this.id = response.body.id.slice(24, 36)

        
        // console.log(response.body.id.slice(24, 36))
        // console.log(this.product_name)
        // console.log(this.ready_stock)
        // console.log(this.category)
        // console.log(this.username)
        // console.log(this.price)
        // console.log(this.id)
      }
    )
  }
}
