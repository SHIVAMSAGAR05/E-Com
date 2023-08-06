import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddProductService } from '../services/add-product.service';
import { product } from '../data-types';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  productData: undefined | product
  productQuantity:number = 1;
  constructor(private activatedRoute : ActivatedRoute, private product : AddProductService) { }

  ngOnInit(): void {
    let productId = this.activatedRoute.snapshot.paramMap.get('productId');
    // console.warn(productId);
    productId && this.product.getProduct(productId).subscribe((result) => {
      // console.log(result)
      this.productData = result;
    })
  }

  handleQuantity(val:string) {
    if(this.productQuantity<10 && val == "plus") {
      this.productQuantity += 1;
    }
    if(this.productQuantity>1 && val == 'min') {
      this.productQuantity -= 1;
    }
  }

}
