import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IBrand } from "../Interfaces/IBrand";

@Injectable()
export class BrandService {

    baseUrl = "https://localhost:44330/api/";
    constructor(private http:HttpClient) {
  
    }

    getAllBrands():Observable<IBrand[]> {
        return this.http.get<IBrand[]>(this.baseUrl+"GetProductBrands")
    }

 }

