import { Component, OnInit, ViewChild, Output, EventEmitter} from '@angular/core';
import { DeleteUserPopupComponent } from 'src/app/components/dashboard/popups/delete-user-popup/delete-user-popup.component';
import { EditUserComponentComponent } from 'src/app/components/dashboard/popups/edit-user-component/edit-user-component.component';
import {MatPaginator, } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { User } from 'src/app/interfaces/user';
import { MatDialog } from '@angular/material/dialog';
import { SearchService } from 'src/app/services/search.service';
import { SortService } from 'src/app/services/sort.service';
import { ActivatedRoute } from '@angular/router';
import { TierService } from 'src/app/services/maker-admin/tier.service';
import { Dealer } from 'src/app/interfaces/maker-admin/dealer';
@Component({
  selector: 'app-dealer-dashboard',
  templateUrl: './dealer-dashboard.component.html',
  styleUrls: ['./dealer-dashboard.component.css']
})
export class DealerDashboardComponent implements OnInit {
  emptyList:string = "./../../../../assets/icons/dashboard/No-data-found.svg";

  tableHeaders:String[] = ['Anchor Name', "Business Incorporation Number/Ghana Card Number", "Contact Number", "Email", "Created By", "Created Date", ]

  dataSource!: MatTableDataSource<Dealer>;
  varUsers!: Dealer[];
  @Output() sendStatusData = new EventEmitter()

  constructor(private activ8dRoute:ActivatedRoute, private searchService: SearchService, private sortService:SortService, private makerService:TierService, public dialog:MatDialog, ) {  }
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  //search
  searchInput: string = '';
  selectedSortOption: string = 'newest;'
  dealers!:Dealer[]

  ngOnInit() {
    this.activ8dRoute.data.subscribe(response => {
      // console.log("OnInit calling resolver", response, typeof(response))
      this.dealers = response['dealerData']
      this.dataSource = new MatTableDataSource(this.dealers);

      // console.log(this.dealers)
      // console.log('statuscounts',this.statusCounts)
    })

    this.searchService.search$.subscribe((searchTerm)=> {
      this.searchInput = searchTerm;
      this.applySearch();
    })

    this.sortService.sortOption$.subscribe((option) => {
      this.selectedSortOption = option;
      this.applyFilter();
    });
  }

  applySearch() {
    // Fetch your data from the data service
    let data = this.dealers;

    // Apply filter based on the search term
    if (this.searchInput) {
      console.log(this.searchInput);
      data = data.filter((user) => {
        const userValues = Object.values(user);
        return userValues.some((value) => {
          if (value && typeof value === 'string') {
            return value.toLowerCase().includes(this.searchInput.toLowerCase());
          }
          return false;
        });
      });
    }
    this.dataSource = new MatTableDataSource(data);
  }

  applyFilter() {
    // Fetch your data from the data service
     let data = this.dealers;

      // Sort the data based on selectedSortOption
      if (this.selectedSortOption === 'newest') {
        data.sort((a, b) => Date.parse(b.createdDate) - Date.parse(a.createdDate));
        this.dataSource = new MatTableDataSource(data);
      } else if (this.selectedSortOption === 'oldest') {
        data.sort((a, b) => Date.parse(a.createdDate) - Date.parse(b.createdDate));
      }
      this.dataSource = new MatTableDataSource(data);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
