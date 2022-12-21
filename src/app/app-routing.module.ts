import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/owner/dashboard/dashboard.component';
import { MembersComponent } from './pages/owner/members/members.component';
import { ProductsComponent } from './pages/owner/products/products.component';
import { SettingProductComponent } from './pages/owner/setting-product/setting-product.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  }, 
  {
    path: 'owner-dashboard',
    component: DashboardComponent
  },
  {
    path: 'owner-members',
    component: MembersComponent
  },
  {
    path: 'owner-products',
    component: ProductsComponent
  },
  {
    path: 'owner-setting-product',
    component: SettingProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
