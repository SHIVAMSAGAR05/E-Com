import { Component, OnInit } from '@angular/core';
import { signInData, signUpData } from '../data-types';
import { UserServicesService } from '../services/user-services.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit {

  toggleForm : boolean = true;
  authError : string = '';
  showError:boolean = false;
  constructor(private user:UserServicesService) { }

  ngOnInit(): void {
    this.user.userReloadAuth();
  }

  newUserSignUp(data:signUpData) {
    console.warn(data)
    this.user.userSignUP(data)
  }

  userSignIn(data:any):void {
    this.user.userLoginIn(data);
    this.user.isLoginError.subscribe((isError) => {
      if(isError){
        this.showError = true;
        this.authError = 'E-mail or Passoword is incorrect';
      }
    })
  }

  openSignIn(){
    this.toggleForm = true;
  }

  openSignUp(){
    this.toggleForm = false;
  }

}
