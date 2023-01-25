import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './Services/ProductService';
import { BrandService } from './Services/BrandService';
import { CategoryService } from './Services/CategoryService';
import {PaginationModule} from 'ngx-bootstrap/pagination'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PaginationModule.forRoot()
  ],
  providers:[ProductService, BrandService, CategoryService],
  exports: [PaginationModule]
})
export class SHAREDModule { }
