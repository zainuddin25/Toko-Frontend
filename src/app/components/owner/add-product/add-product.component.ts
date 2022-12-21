import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  constructor(private httpClient: HttpClient) {}

  add_product = new FormGroup({
    product_name : new FormControl(),
    category: new FormControl(),
    price: new FormControl(),
    ready_stock: new FormControl()
  })

  addProduct() {

    const token: any = localStorage.getItem('accessToken')
    const decode: any = jwtDecode(token)
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      }),
    };

    this.httpClient.post('http://localhost:3222/product/add-product', {
      product_name: this.add_product.value.product_name,
      ready_stock: this.add_product.value.ready_stock,
      category: this.add_product.value.category,
      price: this.add_product.value.price,
      user: decode.id
    }, httpOptions)
    .subscribe(
      response => {
        console.log(response)
      }
    )
  }

}
