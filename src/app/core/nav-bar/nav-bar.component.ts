import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCart } from 'src/app/shared/Models/ShoppingCart';
import { User } from 'src/app/shared/Models/User';
import { AccountService } from 'src/app/shared/Services/account.service';
import { ShoppingCartService } from 'src/app/shared/Services/ShoppingCartService';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  totalCartItems = 0;
  currentUser = null;

  constructor(private shoppingCart:ShoppingCartService, private accouuntservice:AccountService) { }

ngOnInit(): void {
  this.getShoppingCartTotalCount();
  this.getCurrentUser();
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

getCurrentUser(){

  this.accouuntservice.accountObservable$.subscribe((user:User)=>{
    this.currentUser = user;
  
     });
}

onlogout(){
  this.accouuntservice.logout();
}

}
