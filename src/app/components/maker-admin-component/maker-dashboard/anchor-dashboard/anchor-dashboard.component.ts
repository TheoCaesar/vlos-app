import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { DeleteUserPopupComponent } from 'src/app/components/dashboard/popups/delete-user-popup/delete-user-popup.component';
import { EditUserComponentComponent } from 'src/app/components/dashboard/popups/edit-user-component/edit-user-component.component';
import { Anchor } from 'src/app/interfaces/maker-admin/anchor';
import { Dealer } from 'src/app/interfaces/maker-admin/dealer';
import { User } from 'src/app/interfaces/user';
import { TierService } from 'src/app/services/maker-admin/tier.service';
import { SearchService } from 'src/app/services/search.service';
import { SortService } from 'src/app/services/sort.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-anchor-dashboard',
  templateUrl: './anchor-dashboard.component.html',
  styleUrls: ['./anchor-dashboard.component.css']
})
export class AnchorDashboardComponent implements OnInit {

  emptyList:string = "./../../../../assets/icons/dashboard/No-data-found.svg";

  tableHeaders:String[] = ['Anchor Name', "Business Incorporation Number/Ghana Card Number", "Contact Number", "Email", "Created By", "Created Date", ]

  dataSource!: MatTableDataSource<Dealer>;
  varUsers!: Dealer[];

  constructor(private activ8dRoute:ActivatedRoute, private searchService: SearchService, private sortService:SortService, private makerService:TierService, public dialog:MatDialog, ) {  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  //search
  searchInput: string = '';
  selectedSortOption: string = 'newest;'
  anchors!:Dealer[]

  ngOnInit() {
    this.activ8dRoute.data.subscribe(response => {
      console.log("OnInit calling resolver", response, typeof(response))
      this.anchors = response['anchorData']
      this.dataSource = new MatTableDataSource(this.anchors);

      console.log(this.anchors)
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
    let data = this.anchors;

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
     let data = this.anchors;

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
