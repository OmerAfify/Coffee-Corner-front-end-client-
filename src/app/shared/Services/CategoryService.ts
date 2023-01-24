

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ICategory } from "../Interfaces/ICategory";

@Injectable()
export class CategoryService {

    baseUrl = "https://localhost:44330/api/";
    constructor(private http:HttpClient) {
  
    }

    getAllCategories():Observable<ICategory[]> {
        return this.http.get<ICategory[]>(this.baseUrl+"GetCategories")
    }


    
    }

