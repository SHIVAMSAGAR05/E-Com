import { Component, OnInit } from '@angular/core';
import { AddProductService } from '../services/add-product.service';
import { product } from '../data-types';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-seller-homepage',
  templateUrl: './seller-homepage.component.html',
  styleUrls: ['./seller-homepage.component.css']
})
export class SellerHomepageComponent implements OnInit {

  trash = faTrash
  edit = faEdit
  productsList: undefined | product[];
  constructor(private listProduct:AddProductService) { }

  ngOnInit(): void {
    this.showList();
  }

  deleteItem(id:number) {
    console.log(id)
    this.listProduct.deleteItem(id).subscribe((result) => {
      console.warn(result)
      if(result) {
        alert("Product removed");
        this.showList();
      }
    })
  }

  showList() {
    this.listProduct.productList().subscribe((result) => {
      console.log(result)
      this.productsList = result;
    })
  }

}
