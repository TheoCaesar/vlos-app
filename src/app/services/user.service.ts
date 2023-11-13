import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { FIUser } from './../interfaces/fiUser';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private userHttp:HttpClient) { }

  makersURL = 'http://localhost:3000/makers'
  checkersURL = 'http://localhost:3000/checkers'
  banksURL = 'http://localhost:3000/banks'

  getMakerObjs():Observable<User[]> {
      return this.userHttp.get<User[]>(this.makersURL);
  }

  getCheckerObjs():Observable<User[]> {
      return this.userHttp.get<User[]>(this.checkersURL);
  }

  getBankObjs():Observable<FIUser[]> {
    return this.userHttp.get<FIUser[]>(this.banksURL);
  }

  //get instance
  getMakerObj(paramID:number):Observable<User> {
    return this.userHttp.get<User>(this.makersURL + paramID);
  }

  getCheckerObj(paramID:number):Observable<User> {
    return this.userHttp.get<User>(this.checkersURL +"/" + paramID);
  }

    //edit field
  updateMaker(paramUser:User):Observable<User> {
    return this.userHttp.put<User>(this.makersURL + paramUser.id, paramUser);
  }

  updateChecker(paramUser:User):Observable<User> {
    return this.userHttp.patch<User>(this.checkersURL +"/" + paramUser.id, paramUser);
  }
}
