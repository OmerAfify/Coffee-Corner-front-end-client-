import { Component, OnInit } from '@angular/core';
import { IBrand } from 'src/app/shared/Interfaces/IBrand';
import { ICategory } from 'src/app/shared/Interfaces/ICategory';
import { IProduct } from 'src/app/shared/Interfaces/IProduct';
import { FilterObject } from 'src/app/shared/Models/FilterObject';
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

  totalProductsCount:number

  filterObject:FilterObject = new FilterObject();

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
     
      this.GetProductsFiltered(this.filterObject);
      this.GetBrands();
      this.GetCategories();

    }


//subscribing to observables

GetProductsFiltered(filterObject:FilterObject){

this._productService.getProductsFiltered(filterObject).subscribe(
  (data)=>{this.productsList = data.data;
  this.totalProductsCount = data.count;
  }, error=>{console.log(error)}
);
}

GetCategories(){
  this._categoryService.getAllCategories().subscribe((data:ICategory[])=>{
      
    this.categoriesList = [{id:0 , categoryName: "All"}, ...data];  
  }, error=>{ console.log(error)})
}

GetBrands(){
  this._brandService.getAllBrands().subscribe((data:IBrand[])=>{
    this.brandsList = [{id:0 , productBrandName: "All"}, ...data];  
  }, error=>{ console.log(error)})
}


//Methods for UI Event Listening

  OnBrandIdSelected(brandId:number){
    this.filterObject.brandId = brandId;
    this.GetProductsFiltered(this.filterObject);
  }
  
  OnCategoryIdSelected(categoryId:number){
    this.filterObject.categoryId = categoryId;
    this.GetProductsFiltered(this.filterObject);
  }

  OnSortChange(value:string){
    this.filterObject.sortBy =value;
    this.GetProductsFiltered(this.filterObject);
  }
   
  OnPaginationChange(event:any){
this.filterObject.pageNumber = event.page;
this.GetProductsFiltered(this.filterObject)
  }  
  
}
