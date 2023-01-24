import { Component, OnInit } from '@angular/core';
import { IBrand } from 'src/app/shared/Interfaces/IBrand';
import { ICategory } from 'src/app/shared/Interfaces/ICategory';
import { IProduct } from 'src/app/shared/Interfaces/IProduct';
import { BrandService } from 'src/app/shared/Services/BrandService';
import { CategoryService } from 'src/app/shared/Services/CategoryService';
import { ProductService } from 'src/app/shared/Services/ProductService';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.scss']
})
export class ShopPageComponent implements OnInit {

  productsList : IProduct[]
  categoriesList : ICategory[]
  brandsList : IBrand[]

  categoryIdSelected = 0;
  brandIdSelected = 0;


  constructor(private _productService :ProductService,
     private _brandService :BrandService,
     private _categoryService :CategoryService) {
   
  }
  
    ngOnInit(): void {
      this.getProducts(this.brandIdSelected, this.categoryIdSelected);
      this.getBrands();
      this.getCategories();

    }


getProducts(productBrandId?:number, categoryId?:number ){
  
  if(categoryId==0 && productBrandId==0){
    this._productService.getAllProducts().subscribe((data:IProduct[])=>{
      this.productsList = data;  
    }, error=>{ console.log(error)})

    return;
  }
  
  if(categoryId!=0 && productBrandId!=0){
    this._productService.getProductByBrandAndCategoryId(productBrandId,categoryId).subscribe((data:IProduct[])=>{
      this.productsList = data;  
    }, error=>{ console.log(error)})
  return;
  } 

  if(categoryId!=0){
    this._productService.getProductsByCategoryId(categoryId).subscribe((data:IProduct[])=>{
      this.productsList = data;  
    }, error=>{ console.log(error)})
  return;
  } 

  if(productBrandId!=0){
    this._productService.getProductsByBrandId(productBrandId).subscribe((data:IProduct[])=>{
      this.productsList = data;  
    }, error=>{ console.log(error)})
  return;
  } 

}

getCategories(){
  this._categoryService.getAllCategories().subscribe((data:ICategory[])=>{
      
    this.categoriesList = [{id:0 , categoryName: "All"}, ...data];  
  }, error=>{ console.log(error)})
}

getBrands(){
  this._brandService.getAllBrands().subscribe((data:IBrand[])=>{
    this.brandsList = [{id:0 , productBrandName: "All"}, ...data];  
  }, error=>{ console.log(error)})
}



onBrandIdSelected(brandId:number){
    this.brandIdSelected = brandId;
    this.getProducts(this.brandIdSelected, this.categoryIdSelected);
  }
  
  onCategoryIdSelected(categoryId:number){
    this.categoryIdSelected = categoryId;
    this.getProducts(this.brandIdSelected, this.categoryIdSelected);
  }




}
