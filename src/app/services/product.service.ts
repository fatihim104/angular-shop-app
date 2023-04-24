import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map, tap } from "rxjs";
import { Product } from "../models/product";

@Injectable()
export class ProductService {

    private url ="https://shop-apim-default-rtdb.europe-west1.firebasedatabase.app/";
    
    constructor(private http:HttpClient){

    }

    getProducts(categoryId:number):Observable<Product[]>{
        return this.http.get<Product[]>(this.url+"products.json")
        .pipe(
            map(data => {
                const products : Product[]= [];

                for(const key in data) {
                    if(categoryId){
                        if(categoryId == data[key].categoryId){
                            products.push({...data[key], id:key})
                        }
                    }else{
                        products.push({...data[key], id:key})
                    }
                }
                return products;
                }
            ),
            tap(data => console.log(data))
        )

    }

    createProduct(product:Product):Observable<Product>{
        return this.http.post<Product>(this.url+"products.json", product);
    }

    getProductById(id:any):Observable<Product>{
        return this.http.get<Product>(this.url+"products/"+id+".json");
    }
}