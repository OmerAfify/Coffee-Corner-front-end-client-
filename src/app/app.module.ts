import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { COREModule } from './core/core.module';
import { SHAREDModule } from './shared/shared.module';
import { ShopPageComponent } from './Pages-Components/shop-page/shop-page.component';
import { ProductItemComponent } from './Elements-Components/product-item/product-item.component';
import { PagingHeaderComponent } from './Elements-Components/paging-header/paging-header.component';
import { PagingComponent } from './Elements-Components/paging/paging.component';
import { ProductDetailsComponent } from './Pages-Components/product-details/product-details.component';
import { HomePageComponent } from './Pages-Components/home-page/home-page.component';
import { ErrorNotfoundComponent } from './Pages-Components/error-notfound/error-notfound.component';
import { ErrorServerErrorComponent } from './Pages-Components/error-server-error/error-server-error.component';
import { ErrorInterceptor } from './core/Interceptors/Error/error.interceptor';
import { PageHeaderComponent } from './Elements-Components/page-header/page-header.component';
import { ShoppingCartComponent } from './Pages-Components/shopping-cart/shopping-cart.component';
import { OrderSummaryComponent } from './Elements-Components/order-summary/order-summary.component';
import { LoginComponent } from './Pages-Components/login/login.component';
import { RegisterComponent } from './Pages-Components/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OrderFullfillmentComponent } from './Pages-Components/order-fullfillment/order-fullfillment.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopPageComponent,
    ProductItemComponent,
    PagingHeaderComponent,
    PagingComponent,
    ProductDetailsComponent,
    HomePageComponent,
    ErrorNotfoundComponent,
    ErrorServerErrorComponent,
    PageHeaderComponent,
    ShoppingCartComponent,
    OrderSummaryComponent,
    LoginComponent,
    RegisterComponent,
    OrderFullfillmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule, 
    COREModule,
    SHAREDModule,
  ],
  providers: [ {provide:HTTP_INTERCEPTORS, useClass:ErrorInterceptor, multi:true},
 ],
  bootstrap: [AppComponent]
})
export class AppModule { }
