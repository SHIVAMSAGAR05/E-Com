import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddProductService } from '../services/add-product.service';
import { product } from '../data-types';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  menuType : string = 'default'
  sellerName:string = '';
  userName:string = '';
  searchResult:undefined | product[];
  constructor(private router:Router, private product : AddProductService) { }

  ngOnInit(): void {
    this.router.events.subscribe((val:any) => {
      if(val.url){
        // console.log(val)
        if(localStorage.getItem('seller-home') && val.url.includes('seller')) {
          // console.log("In Seller Zone");
          this.menuType = 'seller';
            let sellerStore = localStorage.getItem('seller-home');
            let sellerData = sellerStore && JSON.parse(sellerStore)[0];
            this.sellerName = sellerData.name;
          }
          // console.log("In User Zone");
          else if(localStorage.getItem('users')) {
            let userStore = localStorage.getItem('users');
            let userData = userStore && JSON.parse(userStore);
            this.userName = userData.name;
            // console.warn(this.userName);
            this.menuType = 'user';
          }
        else {
          // console.log("Outside seller zone");
          this.menuType = 'default';
        }
      }
    })
  }

  sellerLogOut() {
    localStorage.removeItem('seller-home');
    this.router.navigate(['home'])
  }
  userLogout() {
    localStorage.removeItem('users');
    this.router.navigate((['home']));
  }

  searchFunction(query : KeyboardEvent) {
    if(query) {
      const element = query.target as HTMLInputElement;
      this.product.searchProuducts(element.value).subscribe((result) => {
        // console.warn(result)
        if(result.length > 5) {
          result.length = 5;
        }
        this.searchResult = result;
      })
    }
  }


  //This is emply the UL list while searching
  hideSearch() {
    this.searchResult = undefined;
  }

  //This function executes on search button 
  searchItem (val:string) {
    // console.warn(val);
    this.router.navigate([`search/${val}`])
  }

  redirectToDetail(id:number) {
    this.router.navigate([`details/`+ id])
  }

}
