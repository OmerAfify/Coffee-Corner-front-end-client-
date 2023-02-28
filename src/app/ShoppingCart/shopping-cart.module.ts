import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component'
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ShoppingCartComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([{path:'ShoppingCart',component:ShoppingCartComponent} ])
      ],
  exports: [RouterModule]
})
export class ShoppingCartModule { }
