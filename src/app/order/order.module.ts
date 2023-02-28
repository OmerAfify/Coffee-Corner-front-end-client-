import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderFullfillmentComponent } from './order-fullfillment/order-fullfillment.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../core/Guards/auth.guard';



@NgModule({
  declarations: [OrderFullfillmentComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{path:'Checkout',canActivate:[AuthGuard],component:OrderFullfillmentComponent},
  ])
  ],
  exports:[RouterModule]
})
export class OrderModule { }
