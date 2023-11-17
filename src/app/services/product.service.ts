import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs"
import { IProduct } from '../interface/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API_URL: string = ` http://localhost:3000/products`
  constructor(private http:HttpClient) { }
  getProducts(): Observable<IProduct[]>{
     return this.http.get<IProduct[]>(this.API_URL)
  }
  getProductById(id:number):Observable<IProduct>{
    return this.http.get<IProduct>(`${this.API_URL}/${id}`)
  }
  removeProduct(id:number):Observable<any>{
    return this.http.delete<any>(`${this.API_URL}/${id}`)
  }
  updateProduct(product:IProduct):Observable<IProduct>{
    return this.http.patch<any>(`${this.API_URL}/${product.id}`,product)
  }
  addProduct(product:IProduct):Observable<IProduct>{
    return this.http.post<any>(this.API_URL,product)
  }
}
