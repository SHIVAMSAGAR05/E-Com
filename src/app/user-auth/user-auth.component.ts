import { Component, OnInit } from '@angular/core';
import { signUpData } from '../data-types';
import { UserServicesService } from '../services/user-services.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit {

  toggleForm:boolean = false;
  constructor(private user:UserServicesService) { }

  ngOnInit(): void {
  }

  newUserSignUp(data:signUpData) {
    console.warn(data)
    this.user.userSignUP(data)
  }

  openSignIn() {

  }

}
