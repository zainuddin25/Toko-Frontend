import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ModalEditUserComponent } from 'src/app/components/owner/modal-edit-user/modal-edit-user.component';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})

export class MembersComponent {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  @ViewChild(MatPaginator) paginator: any = MatPaginator;

  dataUsers: any = []
  idUsers: string = ''

  constructor( 
    private httpClient: HttpClient,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getAllUsers()
  }

  getAllUsers() {
    const accessToken = localStorage.getItem('accessToken')

    this.httpClient.get<any>('http://localhost:3222/users', {
      headers: ({
        'Authorization' : `Bearer ${accessToken}`
      }),
      observe : 'response'
    })
    .subscribe(
      (response) => {
        this.dataUsers = response.body?.data
      }
    )
  }

  setId(id: string){
    this.idUsers = id
    console.log(this.idUsers)
  }

  openDialog() {
    const dialogRef = this.dialog.open(ModalEditUserComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

export interface PeriodicElement {
  name: string;
  position: string;
  weight: number;
  symbol: string;
}