import { EventEmitter, Injectable } from '@angular/core';
import { signInData, signUpData } from '../data-types';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {
  userSignIn(data: signInData) {
    throw new Error('Method not implemented.');
  }

  isLoginError = new EventEmitter<boolean>(false) 
  constructor(private http:HttpClient, private router:Router) { }

  userSignUP(data: signUpData) {
    return this.http.post("http://localhost:3000/users", data, { observe: 'response' })
      .subscribe((result) =>{
        if(result) {
          localStorage.setItem('users',JSON.stringify(result.body));
          this.router.navigate(['/home']);
        }
      })
  }

  userLoginIn(data:signInData) {
    this.http.get<signUpData[]>(`http://localhost:3000/users?email=${data.email}&password=${data.password}`,{observe:"response"}).subscribe((result:any) => {
      if(result && result.body && result.body.length){
        alert('User Logged In')
        localStorage.setItem('users',JSON.stringify(result.body[0]))
        this.router.navigate(['/'])
      } else {

        // alert("User credentials doesn't match with our database")
        this.isLoginError.emit(true)
      }
    })
  }

  userReloadAuth() {
    if(localStorage.getItem('users')) {
      this.router.navigate(['/'])
    }
  }
}
