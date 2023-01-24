import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './Services/ProductService';
import { BrandService } from './Services/BrandService';
import { CategoryService } from './Services/CategoryService';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[ProductService, BrandService, CategoryService]
})
export class SHAREDModule { }
