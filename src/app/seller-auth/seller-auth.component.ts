import { Component, OnInit } from '@angular/core';
import { SellersService } from '../services/sellers.service';
import { Router } from '@angular/router';
import { signInData, signUpData } from '../data-types';


@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {

  constructor(private seller:SellersService, private router:Router) { }

  toggleForm : boolean = true;
  authError : string = '';
  showError:boolean = false;

  ngOnInit(): void {
    this.seller.reloadSeller()
  }
  //Form function on submitting the button makes the POST request
  signUp(data:signUpData):void {
    // console.log(data)
    this.seller.userSignUP(data)
  }
  signIn(data:signInData):void {
    this.seller.userSignIn(data);
    this.seller.isLoginError.subscribe((isError) => {
      if(isError){
        this.showError = true;
        this.authError = 'E-mail or Passoword is incorrect';
      }
    })
  }



  //These function will switch the forms of signUp & Sign in for seller
  openSignIn(){
    this.toggleForm = true;
  }

  openSignUp(){
    this.toggleForm = false;
  }

}
