import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { HttpClientModule }  from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { FormsModule }    from '@angular/forms';  


import {commonService} from './services/comonservice.service';

import {MatToolbarModule} from '@angular/material/toolbar'
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatSnackBarModule } from '@angular/material';

import { AppRoutingModule }     from './app-routing-module';

import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { SignUp } from './signup/signup.component';

import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemsComponent } from './items/items.component';
import { ViewCart } from './viewcart/viewcart.component';

import { CheckOut } from './checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUp,
    HeaderComponent,
    DashboardComponent,
    ItemsComponent,
    ViewCart,
    CheckOut
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    HttpModule,
    MatSnackBarModule 
  ],
  providers: [commonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
