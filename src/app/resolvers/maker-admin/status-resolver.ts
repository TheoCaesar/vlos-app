import { Observable } from 'rxjs';
import { TierService } from '../../services/maker-admin/tier.service';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Anchor } from 'src/app/interfaces/maker-admin/anchor';
import { Dealer } from 'src/app/interfaces/maker-admin/dealer';
import { MasterAnchor } from 'src/app/interfaces/maker-admin/master-anchor';

@Injectable()
export class StatusResolver implements Resolve<object[]> {
  constructor(private tierService: TierService){}

  resolve() {
    // console.log("Status Resolver Fired");
    const dealers = this.tierService.getDealerObjs();
    const anchors = this.tierService.getAnchorObjs();
    const masterAnchors = this.tierService.getMasterAnchorObjs();

    const statuses: object[] = [];

    const dealerStatuses = this.getStatusCounts(dealers);
    const anchorStatuses = this.getStatusCounts(anchors);
    const masterAnchorStatuses = this.getStatusCounts(masterAnchors);

    // Push the status counts into the statuses array
    statuses.push(dealerStatuses);
    statuses.push(anchorStatuses);
    statuses.push(masterAnchorStatuses);

    return statuses;
  }

  getStatusCounts(userObj: Observable<Anchor[]> | Observable<MasterAnchor[]>) {
    try {
      const statusCounts: Record<string, number> = {};

      userObj.forEach((users) => {
        users.forEach((user) => {
          const status = user.status;

          if (statusCounts[status]) {
            statusCounts[status]++;
          } else {
            statusCounts[status] = 1;
          }
        });
      });

      return statusCounts;
    } catch (error) {
      console.log(error);
    }
    return {};
  }
}

