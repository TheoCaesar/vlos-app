import { MasterAnchor } from 'src/app/interfaces/maker-admin/master-anchor';
import { TierService } from '../../services/maker-admin/tier.service';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';


@Injectable()
export class MasterAnchorResolver implements Resolve<MasterAnchor[]> {
  constructor(private tierSerivice: TierService){}

  resolve() {
    // console.log("Master Anchor Resolver Fired");
    return this.tierSerivice.getMasterAnchorObjs();
  }
}
