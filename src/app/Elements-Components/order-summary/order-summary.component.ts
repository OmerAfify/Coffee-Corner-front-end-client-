import { Component, OnInit } from '@angular/core';
import { IOrderSummary } from 'src/app/shared/Interfaces/IOrderSummary';
import { ShoppingCartService } from 'src/app/shared/Services/ShoppingCartService';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent implements OnInit {

  orderSummary :IOrderSummary;
  constructor(private _shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {

    this._shoppingCartService.orderSummaryObservable$.subscribe((data)=>{
      this.orderSummary = data;
    }

      
     )
  }

}
