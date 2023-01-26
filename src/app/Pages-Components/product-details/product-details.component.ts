import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IProduct } from 'src/app/shared/Interfaces/IProduct';
import { ProductService } from 'src/app/shared/Services/ProductService';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product:IProduct;
  productId:number;

  constructor(private route:ActivatedRoute,private _productsService:ProductService) { }

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

}
