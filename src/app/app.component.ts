import { Component, OnInit } from '@angular/core';
import { IProduct } from './shared/Interfaces/IProduct';
import { AccountService } from './shared/Services/account.service';
import { ProductService } from './shared/Services/ProductService';
import { ShoppingCartService } from './shared/Services/ShoppingCartService';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
cardId : string;
token : string;
title:string = 'Coffee Corner';


  ngOnInit(): void {
   this.getCurrentCart();   
   this.getCurrentUser(); 
   
  }
 
constructor(private _shoppingCartService:ShoppingCartService, private _accountService:AccountService) {
}

getCurrentCart(){
  this.cardId = localStorage.getItem("shoppingCartId")

  if(this.cardId!=null){
       this._shoppingCartService.getShoppingCart(this.cardId);
     }
}

getCurrentUser(){
  this.token = localStorage.getItem("token");
  this._accountService.loadCurrentUser(this.token).subscribe(); 
}


}


 

