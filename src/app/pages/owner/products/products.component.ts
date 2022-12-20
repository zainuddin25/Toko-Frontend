import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'category', 'werehouse'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: any = MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  category: string;
  werehouse: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', category: 'A', werehouse: 'B'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', category: 'A', werehouse: 'B'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', category: 'A', werehouse: 'B'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', category: 'A', werehouse: 'B'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B', category: 'A', werehouse: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', category: 'A', werehouse: 'B'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', category: 'A', werehouse: 'B'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', category: 'A', werehouse: 'B'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', category: 'A', werehouse: 'B'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', category: 'A', werehouse: 'B'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na', category: 'A', werehouse: 'B'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg', category: 'A', werehouse: 'B'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al', category: 'A', werehouse: 'B'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si', category: 'A', werehouse: 'B'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P', category: 'A', werehouse: 'B'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S', category: 'A', werehouse: 'B'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl', category: 'A', werehouse: 'B'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar', category: 'A', werehouse: 'B'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K', category: 'A', werehouse: 'B'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca', category: 'A', werehouse: 'B'},
];
