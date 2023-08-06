import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { product } from '../data-types';

@Injectable({
  providedIn: 'root'
})
export class AddProductService {

  constructor(private http:HttpClient) { }
  addProductService(data:product) {
    return this.http.post("http://localhost:3000/product",data)
  }

  productList() {
    //Adding <product> this will return API in array of product data type 
    return this.http.get<product[]>('http://localhost:3000/product')
  }

  deleteItem(id:number) {
    return this.http.delete(`http://localhost:3000/product/${id}`)
   }

  getProduct(id:string) {
    return this.http.get<product>(`http://localhost:3000/product/${id}`)
  } 

  updateProductService(product:product) {
    return this.http.put(`http://localhost:3000/product/${product.id}`,product)
  }

  popularProducts() {
    return this.http.get<product[]>('http://localhost:3000/product?_limit=3')
  }

  allProuducts() {
    return this.http.get<product[]>('http://localhost:3000/product')
  }

  searchProuducts(query:string) {
    return this.http.get<product[]>(`http://localhost:3000/product?q=${query}`)
  }

}
