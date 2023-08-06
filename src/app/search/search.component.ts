import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddProductService } from '../services/add-product.service';
import { product } from '../data-types';
import { query } from '@angular/animations';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchedResult : undefined | product[]
  constructor(private activatedRoute:ActivatedRoute, private product:AddProductService) { }

  ngOnInit(): void {
    let query = this.activatedRoute.snapshot.paramMap.get('query');
    console.warn(query);
    query && this.product.searchProuducts(query).subscribe((result) => {
      this.searchedResult = result
    })
  }

}
