import { User } from './../interfaces/user';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { UserService } from '../services/user.service';


@Injectable()
export class CheckerResolver implements Resolve<User[]> {
  constructor(private quickHomeService: UserService){}

  resolve() {
    console.log("Checker Resolver Fired");
    return this.quickHomeService.getCheckerObjs();
  }
}
