import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SignUp } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemsComponent } from './items/items.component';
import { ViewCart } from './viewcart/viewcart.component';
import { CheckOut } from './checkout/checkout.component';

const routes: Routes = [
  { path: '', redirectTo:'/login', pathMatch: 'full' },
  {path:'login', component:LoginComponent},
  {path:'signup',component:SignUp},
  { path: 'dashboard', component:DashboardComponent },
  { path: 'items', component:ItemsComponent },
  { path: 'viewcart', component:ViewCart },
  { path: 'checkout', component:CheckOut }
];

@NgModule({
	imports:[RouterModule.forRoot(routes)],
	exports:[RouterModule]	
})

export class AppRoutingModule{}