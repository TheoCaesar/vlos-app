import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Anchor } from 'src/app/interfaces/maker-admin/anchor';
import { Dealer } from 'src/app/interfaces/maker-admin/dealer';
import { MasterAnchor } from 'src/app/interfaces/maker-admin/master-anchor';


@Injectable({
  providedIn: 'root'
})
export class TierService {


  dealersURL = 'http://localhost:3000/dealers'
  anchorsURL = 'http://localhost:3000/anchors'
  masterURL = 'http://localhost:3000/master-anchors'

  constructor(private tierHttp:HttpClient) { }

  getDealerObjs():Observable<Dealer[]> {
    return this.tierHttp.get<Dealer[]>(this.dealersURL);
  }

  getAnchorObjs():Observable<Anchor[]> {
      return this.tierHttp.get<Anchor[]>(this.anchorsURL);
  }

  getMasterAnchorObjs():Observable<MasterAnchor[]> {
    return this.tierHttp.get<MasterAnchor[]>(this.masterURL);
  }


}
