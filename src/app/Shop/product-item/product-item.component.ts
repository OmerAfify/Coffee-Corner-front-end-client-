import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/Interfaces/IProduct';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem:IProduct

  constructor() { }

  ngOnInit(): void {
    
  }

}
