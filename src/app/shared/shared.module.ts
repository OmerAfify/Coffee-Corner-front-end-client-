import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../core/Services/ProductService';
import { BrandService } from '../core/Services/BrandService';
import { CategoryService } from '../core/Services/CategoryService';
import {PaginationModule} from 'ngx-bootstrap/pagination'
import { ShoppingCartService } from '../core/Services/ShoppingCartService';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { PagingComponent } from './paging/paging.component';
import { PagingHeaderComponent } from './paging-header/paging-header.component';

@NgModule({
  declarations: [OrderSummaryComponent, PageHeaderComponent, PagingComponent, PagingHeaderComponent],
  imports: [
    CommonModule,
    PaginationModule.forRoot()
  ],
  providers:[ProductService, BrandService, CategoryService, ShoppingCartService],
  exports: [PaginationModule,OrderSummaryComponent, PageHeaderComponent, PagingComponent, PagingHeaderComponent]
})
export class SHAREDModule { }
