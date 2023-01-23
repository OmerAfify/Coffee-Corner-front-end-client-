import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/Interfaces/IProduct';
import { ProductService } from 'src/app/shared/Services/ProductService';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.scss']
})
export class ShopPageComponent implements OnInit {

  productsList : IProduct[]


  constructor(private _productService :ProductService) {
   
  }
  
    ngOnInit(): void {
       this._productService.getAllProducts().subscribe((data:IProduct[])=>{
       this.productsList = data;  
     }, error=>{ console.log(error)})
    }

}
