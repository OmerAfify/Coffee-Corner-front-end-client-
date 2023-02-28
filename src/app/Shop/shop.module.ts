import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ShopPageComponent } from './shop-page/shop-page.component';
import { SHAREDModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';


const routes:Routes=[
  {path:'Shop',component:ShopPageComponent},
  {path:'Shop/:id',component:ProductDetailsComponent}
  ]

@NgModule({
  declarations: [ProductDetailsComponent, ProductItemComponent, ShopPageComponent],
  imports: [
    CommonModule,
    SHAREDModule,
   RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
  })
export class ShopModule { }
