import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { Status } from 'src/app/interfaces/maker-admin/status';

@Component({
  selector: 'app-maker-home',
  templateUrl: './maker-home.component.html',
  styleUrls: ['./maker-home.component.css']
})
export class MakerHomeComponent {
  activeIcon:string = "../../../../assets/icons/dashboard/maker-admin/active.svg"
  inProgressIcon:string = "../../../../assets/icons/dashboard/maker-admin/in-progress.svg"
  inactiveIcon:string = "../../../../assets/icons/dashboard/maker-admin/inactive.svg"
  leadsIcon:string = "../../../../assets/icons/dashboard/maker-admin/leads.svg"
  newIcon:string = "../../../../assets/icons/dashboard/maker-admin/new.svg"
  pendingIcon:string = "../../../../assets/icons/dashboard/maker-admin/pending.svg"
  rejectedIcon:string = "../../../../assets/icons/dashboard/maker-admin/rejected.svg"
  reviewIcon:string = "../../../../assets/icons/dashboard/maker-admin/review.svg"
  fiReviewIcon:string = "../../../../assets/icons/dashboard/maker-admin/review.svg"

  userTier!:string;
  statuses!: string[];
  statusCount:number[]=[];
  statusIcon: string[] = [];
  statusObj: Status[] = [];

  showDealerStatus!: boolean;
  showAnchorStatus!: boolean;
  showMasterAnchorStatus!: boolean;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    // Subscribe to router events to update the active route
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updateActiveRoute();

      let status;


      this.activatedRoute.data.subscribe(response => {
        console.log("OnInit calling resolver", response, typeof(response))
        status = response['statusData']


        if (this.showDealerStatus) {
          this.statuses = Object.keys(status[0]);
          this.statusCount = Object.values(status[0]);
          console.log('dealer', this.statuses)
          this.userTier = 'Dealer';
        }
        else if (this.showAnchorStatus) {
          this.statuses = Object.keys(status[1]);
          this.statusCount = Object.values(status[1]);
          console.log('anchor', this.statuses)
          this.userTier = "Anchor";
        }
        else if (this.showMasterAnchorStatus) {
          this.statuses = Object.keys(status[2]);
          this.statusCount = Object.values(status[2]);
          console.log('master', this.statuses)
          this.userTier = "Master Anchor"
        }
        else {this.statuses = [];}

        this.createArrObj(this.statuses, this.statusCount);


      })
    });

  }

  createArrObj (arr1: string[], arr2: number[]) {
    this.statusObj = [];
    let statObj!: Status;

    for(let i = 0; i < arr1.length; i++)
      {
          statObj = {
          id : i,
          name: arr1[i],
          count: arr2[i],
          icon: this.getIcon(this.statuses[i])
        };

        this.statusObj.push(statObj)
      }
      console.log(this.statusObj)
  }

  getIcon(param_status:string) {
    const status = param_status.split(" ").join("-").toLowerCase();
    let val;
    console.log(status)
    switch (status) {
      case 'active':
      case 'fi-approved':
      case 'dealer-accepted':
        val = this.activeIcon;
        break;

      case 'leads':
        val = this.leadsIcon;
        break;

      case 'in-progress':
        val = this.inProgressIcon;
        break;

      case 'review':
        val = this.reviewIcon;
        break;

      case 'fi-review':
        val = this.fiReviewIcon;
        break;

      case 'dealer-rejected':
      case 'fi-rejected':
        val = this.rejectedIcon;
        break;

      case 'inactive':
        val = this.inactiveIcon;
        break;

      case 'pending':
        val = this.pendingIcon;
        break;

      default:
        val = this.newIcon;
        break;
    }

    return val;

  }

  updateActiveRoute() {
    const currenturl = this.router.routerState.snapshot.url;

    // Check the active route and set flags accordingly
    this.showDealerStatus = currenturl === '/maker-admin/dealer';
    this.showAnchorStatus = currenturl === '/maker-admin/anchor';
    this.showMasterAnchorStatus = currenturl === '/maker-admin/master-anchor';
  }



  triggerFilter($event: Event) {
    throw new Error('Method not implemented.');
  }

  triggerSearch($event: KeyboardEvent) {
    throw new Error('Method not implemented.');
  }

  addMasterAnchor() {}
  addProgram() {}
}
