import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IProduct } from "../Interfaces/IProduct";

@Injectable()
export class ProductService {

    baseUrl = "https://localhost:44330/api/";
    constructor(private http:HttpClient) {
  
    }


    getAllProducts():Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.baseUrl+"GetProducts")
    }

    
    }

