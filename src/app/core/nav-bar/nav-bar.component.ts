import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCart } from 'src/app/shared/Models/ShoppingCart';
import { ShoppingCartService } from 'src/app/shared/Services/ShoppingCartService';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  totalCartItems = 0;

  constructor(private shoppingCart:ShoppingCartService) { }

ngOnInit(): void {
  this.getShoppingCartTotalCount();
  }

getShoppingCartTotalCount(){

  this.shoppingCart.shoppingCartObservable$.subscribe((data:ShoppingCart)=>{

    if(data==null)
        this.totalCartItems = 0;
    else{
      this.totalCartItems = 0;
         data.items.forEach(item => {
          this.totalCartItems += item.qty;});
        }
     });
  
  

}


}
