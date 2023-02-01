import { Component, OnInit } from '@angular/core';
import { IProduct } from './shared/Interfaces/IProduct';
import { ProductService } from './shared/Services/ProductService';
import { ShoppingCartService } from './shared/Services/ShoppingCartService';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  cardId : string;
title:string = 'Coffee Corner';


  ngOnInit(): void {
    this.cardId = localStorage.getItem("shoppingCartId")

    if(this.cardId!=null){
         this._shoppingCartService.getShoppingCart(this.cardId);
       }
  }
 
constructor(private _shoppingCartService:ShoppingCartService) {
}



}


 

