import { Component, OnInit } from '@angular/core';
import { SellersService } from '../services/sellers.service';
import { Router } from '@angular/router';
import { signUpData } from '../data-types';


@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {

  constructor(private seller:SellersService, private router:Router) { }

  isSignIn : boolean = false;

  ngOnInit(): void {
    this.seller.reloadSeller()
  }
  //Form function on submitting the button makes the POST request
  signUp(data:signUpData):void {
    this.seller.userSignUP(data)
  }
  signIn(data:signUpData):void {
    this.seller.userSignUP(data)
  }

  // toggleForm(){
  //   this.isSignIn = true;
  // }

}
