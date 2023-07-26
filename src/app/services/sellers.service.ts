import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { signUpData } from '../data-types';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class SellersService {

  //This will transfer TRUE to auth guard for SELLER page
  isSellerLoggerIn = new BehaviorSubject<boolean>(false)

  constructor(private http: HttpClient, private router:Router) { }
  userSignUP(data: signUpData) {
    return this.http.post("http://localhost:3000/seller", data, { observe: 'response' })
      .subscribe((result) =>{
        this.isSellerLoggerIn.next(true);//Making the value TRUE for canActivate Authguard

        //Making the local storage fro the seller Page until it logged out
        localStorage.setItem('seller-home',JSON.stringify(result.body))

        //Redirect to the SELLER logged in Page
        this.router.navigate(['seller-home'])
        console.log(result);
      })
  }
  reloadSeller(){
    if(localStorage.getItem('seller-home')){
      this.isSellerLoggerIn.next(true);
      this.router.navigate(['seller-home'])
    }
  }
}
