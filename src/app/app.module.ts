import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {HttpClientModule} from '@angular/common/http'
import { COREModule } from './core/core.module';
import { SHAREDModule } from './shared/shared.module';
import { ShopPageComponent } from './Pages-Components/shop-page/shop-page.component';
import { ProductItemComponent } from './Elements-Components/product-item/product-item.component';
import { PagingHeaderComponent } from './Elements-Components/paging-header/paging-header.component';
import { PagingComponent } from './Elements-Components/paging/paging.component';
import { ProductDetailsComponent } from './Pages-Components/product-details/product-details.component';
import { HomePageComponent } from './Pages-Components/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopPageComponent,
    ProductItemComponent,
    PagingHeaderComponent,
    PagingComponent,
    ProductDetailsComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule, 
    COREModule,
    SHAREDModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
