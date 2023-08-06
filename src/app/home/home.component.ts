import { Component, OnInit } from '@angular/core';
import { AddProductService } from '../services/add-product.service';
import { product } from '../data-types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  popularImages :undefined | product[]
  allProducts : undefined | product[]
  constructor(private product : AddProductService) { }

  ngOnInit(): void {
    this.product.popularProducts().subscribe((data) => {
      this.popularImages = data

    })
    this.product.allProuducts().subscribe((result) => {
      this.allProducts = result
    })
  }

}
