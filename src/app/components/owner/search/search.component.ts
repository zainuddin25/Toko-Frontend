import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor(
    private httpClient: HttpClient
  ) {}

  dataProduct: any = []
  visibilityText: any = null

  ngOnInit(){
    this.getDataProduct()
  }
  
  search = new FormGroup({
    search_input: new FormControl()
  })

  getDataProduct() {
    const token = localStorage.getItem('accessToken')
    
    this.httpClient.get<any>('http://localhost:3222/product', {
      headers: ({
        'Authorization' : `Bearer ${token}`
      }),
      observe: 'response'
    })
    .subscribe(
      response => {
        this.dataProduct = response.body.data
        console.log(this.dataProduct)
      }
    )
  }

  onChangeSearch(e: any) {
    const token = localStorage.getItem('accessToken')

    if (e.target.value == '') {
      this.getDataProduct()
    } else {
      this.httpClient.get<any>(`http://localhost:3222/product/search/${e.target.value}`, {
        headers: ({
          'Authorization' : `Bearer ${token}`
        }),
        observe : 'response'
      })
      .subscribe(
        response => {
          this.dataProduct = response.body.data
          console.log(response.body.status)
        }
      )
    }
  }
}
