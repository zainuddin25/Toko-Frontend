import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/owner/dashboard/dashboard.component';
import { HeaderComponent } from './components/owner/header/header.component';
import { SideBarComponent } from './components/owner/side-bar/side-bar.component';
import { MembersComponent } from './pages/owner/members/members.component';

import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ModalEditUserComponent } from './components/owner/modal-edit-user/modal-edit-user.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ModalAddMembersComponent } from './components/owner/modal-add-members/modal-add-members.component';
import { DeleteUserComponent } from './components/owner/delete-user/delete-user.component';
import { ProductsComponent } from './pages/owner/products/products.component';
import { SettingProductComponent } from './pages/owner/setting-product/setting-product.component';
import { SearchComponent } from './components/owner/search/search.component';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';

import { AddProductComponent } from './components/owner/add-product/add-product.component';
import { DeleteProductComponent } from './components/owner/delete-product/delete-product.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    SideBarComponent,
    MembersComponent,
    ModalEditUserComponent,
    ModalAddMembersComponent,
    DeleteUserComponent,
    ProductsComponent,
    SettingProductComponent,
    SearchComponent,
    AddProductComponent,
    DeleteProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MdbModalModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
