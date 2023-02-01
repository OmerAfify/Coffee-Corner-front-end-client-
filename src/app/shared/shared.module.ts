import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './Services/ProductService';
import { BrandService } from './Services/BrandService';
import { CategoryService } from './Services/CategoryService';
import {PaginationModule} from 'ngx-bootstrap/pagination'
import { ShoppingCartService } from './Services/ShoppingCartService';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PaginationModule.forRoot()
  ],
  providers:[ProductService, BrandService, CategoryService, ShoppingCartService],
  exports: [PaginationModule]
})
export class SHAREDModule { }
