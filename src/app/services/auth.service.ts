import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  session!:any;
  adminUsers: User[] = [
    {
      id:1,
      firstname:"Mike",
      lastname: "Assem",
      email: "michael.assem@solv.com.gh",
      password: "idnsokfa",
      role:"Checker Admin"
    },
    {
      id:2,
      firstname:"Joel",
      lastname: "Kwame Ofosu",
      email: "joel.ofosu@solv.com.gh",
      password: "klq14eqwe",
      role:"Super Admin"
    },
    {
      id:3,
      firstname:"William",
      lastname:"Daniels",
      email: "william.daniels@solv.com.gh",
      password: "dqpd24ea",
      role:"Maker Admin"
    }
  ]

  constructor(private serviceRouter:Router) { }

  signIn(email:string, password:string, role:string) {
    const isLoggedUserAdmin =  this.adminUsers.find(
      (loggedUser: User) =>
            (loggedUser.email === email)
        && (loggedUser.password === password)
        && (loggedUser.role === role)
    )

    if(isLoggedUserAdmin) {
      this.session = isLoggedUserAdmin.firstname+ "_" + isLoggedUserAdmin.lastname;
      localStorage.setItem("session", JSON.stringify(this.session));
    }
    console.log( isLoggedUserAdmin);
    return isLoggedUserAdmin;
  }

  signOut(){
    this.session = undefined;
    localStorage.removeItem("session");
    this.serviceRouter.navigateByUrl("/");
  }

}