import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AddProductComponent } from 'src/app/components/owner/add-product/add-product.component';
import { DeleteProductComponent } from 'src/app/components/owner/delete-product/delete-product.component';

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
  not_found_notification: string = 'hidden'
  found_table: string = 'visible'

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'category', 'werehouse'];
  @ViewChild(MatSort) sort: any = MatSort

  constructor(
    private httpClient: HttpClient,
    public dialog: MatDialog
  ) {}

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

  onChangeSearch(e: any) {
    const token = localStorage.getItem('accessToken')

    if (e.target.value == '') {
      this.getDataProducts()
    } else {
      this.httpClient.get<any>(`http://localhost:3222/product?search=${e.target.value}`, {
        headers: ({
          'Authorization' : `Bearer ${token}`
        }),
        observe : 'response'
      })
      .subscribe(
        response => {
          this.itemsTotal = response.body.meta.totalItems
          const max = this.itemsTotal / this.limit
          this.maxPage = Math.ceil(max)

          if (this.itemsTotal === 0) {
            this.found_table = 'hidden'
            this.not_found_notification = 'visible'
          } else {
            this.dataPeroducts = response.body.items
            this.found_table = 'visible'
            this.not_found_notification = 'hidden'
          }
        }
      )
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddProductComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.getDataProducts()
    });
  }

  deleteData(id: string) {
    const token = localStorage.getItem('accessToken')
    this.httpClient.delete(`http://localhost:3222/product/delete/${id}`, {
      headers: ({
        'Authorization' : `Bearer ${token}`
      }),
      observe : 'response'
    })
    .subscribe(
      response => {
        if (response.status === 200) {
          const dialogRef = this.dialog.open(DeleteProductComponent)

          dialogRef.afterClosed().subscribe(result => {
            this.getDataProducts()
          })
        }
      }
    )
  }
}
