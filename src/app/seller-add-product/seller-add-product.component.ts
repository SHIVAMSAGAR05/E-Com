import { Component, OnInit } from '@angular/core';
import { AddProductService } from '../services/add-product.service';
import { product } from '../data-types';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent implements OnInit {

  addProductAlert:string | undefined;
  constructor(private productService : AddProductService) { }

  ngOnInit(): void {
  }
  
  addProduct(data:product) {
    this.productService.addProductService(data).subscribe((result) => {
      console.log(result)
      if(result) {
        this.addProductAlert = "Product added successfully";
        console.log(this.addProductAlert)
        alert(this.addProductAlert);
        this.addProductAlert = undefined;
        console.log(this.addProductAlert)
      }
    })
  }
}
