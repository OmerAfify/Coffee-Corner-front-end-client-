import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { OrderModule } from './order/order.module';
import { HomeModule } from './home/home.module';

import { ShoppingCartModule } from './ShoppingCart/shopping-cart.module';

import { COREModule } from './core/core.module';
import { SHAREDModule } from './shared/shared.module';
import { ShopModule } from './Shop/shop.module';

@NgModule({
  declarations: [
    AppComponent,
 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,

    OrderModule,
    HomeModule,
    ShoppingCartModule,
    ShopModule,

    COREModule,
    SHAREDModule,
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
