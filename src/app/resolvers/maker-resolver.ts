import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, } from "@angular/router";
import { of } from "rxjs";
import { UserService } from "../services/user.service";
import { User } from "../interfaces/user";

@Injectable()
export class MakerResolver implements Resolve<User[]> {
  // resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  //   throw new Error("Method not implemented.");
  // }

  constructor(private quickHomeService:UserService,){}

  resolve() {
    console.log("RESOLVING FIRED!!!")
    return this.quickHomeService.getMakerObjs()
  }

}
