import { Component, OnInit } from '@angular/core';
import { IBrand } from 'src/app/shared/Interfaces/IBrand';
import { ICategory } from 'src/app/shared/Interfaces/ICategory';
import { IFilterObject } from 'src/app/shared/Interfaces/IFilterObject';
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

  filterObject:IFilterObject = {
   categoryId : 0,
   brandId : 0,
   sortBy: 'nameAsc',
  }

  sortOptions=[
    {name:'a to z', value:'nameAsc'},
    {name:'z to a', value:'nameDsc'},
    {name:'Price: Low to High', value:'priceAsc'},
    {name:'Price: High to Low', value:'priceDsc'},
  ]



  constructor(private _productService :ProductService,
     private _brandService :BrandService,
     private _categoryService :CategoryService) {
   
  }
  
    ngOnInit(): void {
     
      this.getProductsFiltered(this.filterObject);

      this.getBrands();
      this.getCategories();

    }



getProductsFiltered(filterObject:IFilterObject){
this._productService.getProductsFiltered(filterObject).subscribe(
  (data)=>{this.productsList = data}, error=>{console.log(error)}
);
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
    this.filterObject.brandId = brandId;
    this.getProductsFiltered(this.filterObject);
  }
  
  onCategoryIdSelected(categoryId:number){
    this.filterObject.categoryId = categoryId;
    this.getProductsFiltered(this.filterObject);
  }

  OnSortChange(value:string){
    this.filterObject.sortBy =value;
    this.getProductsFiltered(this.filterObject);
  
  }
}
