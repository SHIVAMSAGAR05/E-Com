import { Injectable } from '@angular/core';
import { signUpData } from '../data-types';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  constructor(private http:HttpClient, private router:Router) { }

  userSignUP(data: signUpData) {
    return this.http.post("http://localhost:3000/users", data, { observe: 'response' })
      .subscribe((result) =>{
      })
  }
}
