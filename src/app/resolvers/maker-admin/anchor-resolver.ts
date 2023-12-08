import { Anchor } from 'src/app/interfaces/maker-admin/anchor';
import { TierService } from '../../services/maker-admin/tier.service';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';


@Injectable()
export class AnchorResolver implements Resolve<Anchor[]> {
  constructor(private tierSerivice: TierService){}

  resolve() {
    // console.log("Anchor Resolver Fired");
    return this.tierSerivice.getAnchorObjs();
  }

}
