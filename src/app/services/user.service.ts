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

  createMakerObj(userObj:User):Observable<User> {
    return this.userHttp.post<User>( this.makersURL , userObj)
  }

  createCheckerObj(userObj:User):Observable<User> {
    return this.userHttp.post<User>(this.checkersURL, userObj)
  }

  createBankObj(bankObj:FIUser):Observable<FIUser> {
    return this.userHttp.post<FIUser>(this.banksURL, bankObj)
  }

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
    return this.userHttp.get<User>(this.makersURL +"/" + paramID);
  }

  //edit field
  updateMaker(id:number, paramUser:User):Observable<User> {
    return this.userHttp.put<User>(this.makersURL +"/" + paramUser.id, paramUser);
  }

  getCheckerObj(paramID:number):Observable<User> {
    return this.userHttp.get<User>(this.checkersURL +"/" + paramID);
  }


  updateChecker(id:number, paramUser:User):Observable<User> {
    return this.userHttp.put<User>(this.checkersURL +"/" + id, paramUser);
  }

  deleteChecker(id:number) {
    return this.userHttp.delete<User>(this.checkersURL + `/${id}`)
  }

  deleteMaker(id:number) {
    return this.userHttp.delete<User>(this.makersURL + `/${id}`)
  }

  getBankObj(paramID:number):Observable<FIUser> {
    return this.userHttp.get<FIUser>(this.banksURL +"/" + paramID);
  }

  deleteBank(id:number) {
    return this.userHttp.delete<FIUser>(this.banksURL + `/${id}`)
  }

  updateBank(id:number, paramUser:FIUser):Observable<FIUser> {
    return this.userHttp.put<FIUser>(this.banksURL +"/" + paramUser.id, paramUser);
  }
}
