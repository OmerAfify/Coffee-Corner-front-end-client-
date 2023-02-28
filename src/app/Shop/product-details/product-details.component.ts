import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IProduct } from 'src/app/shared/Interfaces/IProduct';
import { ProductService } from 'src/app/core/Services/ProductService';
import { ShoppingCartService } from 'src/app/core/Services/ShoppingCartService';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product:IProduct;
  productId:number;

  constructor(private route:ActivatedRoute,
    private _productsService:ProductService,
    private _shoppingCartService:ShoppingCartService) { }

  ngOnInit(): void {

    this.route.params.subscribe( (params:Params)=>{
    this.productId = params['id'];
    })

    this.getProduct();

  }

  getProduct(){
    this._productsService.getProductById(this.productId).subscribe((data)=>{
this.product = data;
    })
  }

  addToCart(){

   if(this.product){
    this._shoppingCartService.addItemToCart(this.product);
    console.log('added from productdetails');
  }

  }

}
