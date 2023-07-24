import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { DistributorsComponent } from './distributors/distributors.component';
import { StockComponent } from './stock/stock.component';
import { SaleComponent } from './sale/sale.component';
import { MaintanenceComponent } from './maintanence/maintanence.component';
import { StockEntryComponent } from './stock-entry/stock-entry.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  { path:'login',component:LoginComponent},
   { path:'home',component:DashboardComponent, children:[
    {path:'',redirectTo:'distributors',pathMatch:'full'},
    {path:'products', component:ProductsComponent},
    { path:'distributors',component:DistributorsComponent},
    { path:'stock',component:StockComponent},
    { path:'sale',component:SaleComponent},
    { path:'maintanence',component:MaintanenceComponent},
    { path:'stockentry',component:StockEntryComponent},
   ]},
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
