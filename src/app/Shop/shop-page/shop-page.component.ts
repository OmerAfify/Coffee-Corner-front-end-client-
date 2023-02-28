import { Component, OnInit } from '@angular/core';
import { IBrand } from 'src/app/shared/Interfaces/IBrand';
import { ICategory } from 'src/app/shared/Interfaces/ICategory';
import { IProduct } from 'src/app/shared/Interfaces/IProduct';
import { FilterObject } from 'src/app/shared/Models/FilterObject';
import { BrandService } from 'src/app/core/Services/BrandService';
import { CategoryService } from 'src/app/core/Services/CategoryService';
import { ProductService } from 'src/app/core/Services/ProductService';

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
  title='Shop'
  link='Shop/Here'
  
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
    
    var ErrorProduct:IProduct ={
      id:3000,
      productName:'error',
      pictureUrl:'',
      productDescription:'no',
      salesPrice:30,
      brandName:'no',
      categoryName:'no'
    } 
this.productsList.push(ErrorProduct);

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
    this.filterObject.pageNumber=1;
    this.filterObject.pageSize=6;
    this.GetProductsFiltered(this.filterObject);
  }
  
  OnCategoryIdSelected(categoryId:number){
    this.filterObject.categoryId = categoryId;
    this.filterObject.pageNumber=1;
    this.filterObject.pageSize=6;
    this.GetProductsFiltered(this.filterObject);
  }

  OnSortChange(value:string){
    this.filterObject.sortBy =value;
    this.GetProductsFiltered(this.filterObject);
  }
   
OnPaginationChange(event:any){
if(this.filterObject.pageNumber!==event){
  this.filterObject.pageNumber = event;
  console.log("page value is changed to : "+event)
  this.GetProductsFiltered(this.filterObject)
  
}

  }  
  
}
