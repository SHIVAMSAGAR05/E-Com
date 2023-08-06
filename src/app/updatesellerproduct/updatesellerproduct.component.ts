import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddProductService } from '../services/add-product.service';
import { product } from '../data-types';

@Component({
  selector: 'app-updatesellerproduct',
  templateUrl: './updatesellerproduct.component.html',
  styleUrls: ['./updatesellerproduct.component.css']
})
export class UpdatesellerproductComponent implements OnInit {
  productData : undefined | product;
  constructor(private activatedRoute : ActivatedRoute, private product : AddProductService) { }

  ngOnInit(): void {
    let productId = this.activatedRoute.snapshot.paramMap.get('id');
    console.warn(productId)
    productId && this.product.getProduct(productId).subscribe((data) => {
      console.log(data)
      this.productData = data;
    })
  }

  updateProduct(data:product) {
    if(this.productData) {
      data.id = this.productData.id
    }
    this.product.updateProductService(data).subscribe((result) => {
      console.warn(result)
      if(result) {
        alert('Data updated successfully.')
      }
    })
  }
  
}
