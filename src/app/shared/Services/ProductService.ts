import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IPaginationWithData } from "../Interfaces/IPaginationWithData";
import { IProduct } from "../Interfaces/IProduct";
import { FilterObject } from "../Models/FilterObject";

@Injectable()
export class ProductService {

    baseUrl = "https://localhost:44330/api/";
   
    constructor(private http:HttpClient) {
  
    }

    getAllProducts():Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.baseUrl+"GetProducts")
    }

    getProductById(id:number):Observable<IProduct> {
        return this.http.get<IProduct>(this.baseUrl+"GetProduct/"+id)
    }


    getProductsByCategoryId(categoryId:number):Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.baseUrl+"GetProductByCategoryId/"+categoryId)
    }

    getProductsByBrandId(productBrandId:number):Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.baseUrl+"GetProductByBrandId/"+productBrandId)
    }

    getProductByBrandAndCategoryId(productBrandId:number, categoryId:number):Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.baseUrl+"GetProductByBrandAndCategoryId/"+productBrandId+"/"+categoryId)
    }


getProductsFiltered(filterObject:FilterObject):Observable<IPaginationWithData>{
        return this.http.get<IPaginationWithData>(

            this.baseUrl+`GetProductsByFiltering?sortBy=${(filterObject.sortBy!==undefined)?filterObject.sortBy:null}`
            +`&categoryId=${(filterObject.categoryId!==undefined)?filterObject.categoryId:0}`
            +`&productBrandId=${(filterObject.brandId!==undefined)?filterObject.brandId:0}`
            +`&requestParam.PageNumber=${(filterObject.pageNumber!==undefined)?filterObject.pageNumber:1}`
            +`&requestParam.PageSize=${(filterObject.pageSize!==undefined)?filterObject.pageSize:6}`
            
        )
          
    }


    }

