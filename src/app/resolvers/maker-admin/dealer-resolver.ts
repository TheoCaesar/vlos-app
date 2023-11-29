import { TierService } from './../../services/maker-admin/tier.service';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Dealer } from 'src/app/interfaces/maker-admin/dealer';


@Injectable()
export class DealerResolver implements Resolve<Dealer[]> {
  constructor(private tierSerivice: TierService){}

  resolve() {
    console.log("Checker Resolver Fired");
    return this.tierSerivice.getDealerObjs();
  }

}
