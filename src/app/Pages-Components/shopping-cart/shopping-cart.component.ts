import { Component, OnInit } from '@angular/core';
import { ICartItem } from 'src/app/shared/Interfaces/ICartItem';
import { ShoppingCart } from 'src/app/shared/Models/ShoppingCart';
import { ShoppingCartService } from 'src/app/shared/Services/ShoppingCartService';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  shoppingCart:ShoppingCart;
  constructor(private _shoppingCartService:ShoppingCartService) { }

  ngOnInit(): void {

    this._shoppingCartService.shoppingCartObservable$.subscribe((shoppingCart)=>{
    this.shoppingCart = shoppingCart;
    })
  }

  
addToCart(item:ICartItem, qty:number){
  this._shoppingCartService.addItemToCart(item, qty);
}

removeFromCart(itemId:number, qty:number){
  this._shoppingCartService.removeFromCart(itemId, qty);
}

}
