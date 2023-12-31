import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { DeleteUserPopupComponent } from 'src/app/components/dashboard/popups/delete-user-popup/delete-user-popup.component';
import { EditUserComponentComponent } from 'src/app/components/dashboard/popups/edit-user-component/edit-user-component.component';
import { User } from 'src/app/interfaces/user';
import { TierService } from 'src/app/services/maker-admin/tier.service';
import { SearchService } from 'src/app/services/search.service';
import { SortService } from 'src/app/services/sort.service';

@Component({
  selector: 'app-master-anchor-dashboard',
  templateUrl: './master-anchor-dashboard.component.html',
  styleUrls: ['./master-anchor-dashboard.component.css']
})
export class MasterAnchorDashboardComponent implements OnInit {
  editIcon:string = "./../../../../assets/icons/dashboard/edit.svg"
  deleteIcon:string = "./../../../../assets/icons/dashboard/delete.svg"
  emptyList:string = "./../../../../assets/icons/dashboard/No-data-found.svg";

  tableHeaders:String[] = ['Master Anchor Name', "BIN/ Ghana Card No.", "Program Name",  "Primary Contact Phone", "Email", "Mobile Number", "Created By", "Created Date", "Status", "Edit"]
  dataSource!: MatTableDataSource<User>;
  varUsers!: User[];
  homeService: any;

  constructor(private activ8dRoute:ActivatedRoute, private searchService: SearchService, private sortService:SortService, private makerService:TierService, public dialog:MatDialog, ) { }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  //search
  searchInput: string = '';
  selectedSortOption: string = 'newest;'
  checkers!:User[]

  ngOnInit() {
    // this.onGetCheckers();
    this.activ8dRoute.data.subscribe(response => {
      console.log("OnInit calling resolver", response, typeof(response))
      this.checkers = response['masterAnchorData']
      this.dataSource = new MatTableDataSource(this.checkers);

      console.log(this.checkers)
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
    let data = this.checkers;

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
     let data = this.checkers;

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

  deletePopUp(data:any) {
    const dialogRef = this.dialog.open(DeleteUserPopupComponent, {
      data: {
        id: data.id,
        username: `${data.firstname} ${data.lastname}`,
        role: data.role,
        phone: data.phoneNumber,
        mail: data.email,
      }
    })
  }

  editPopUp(data:any) {
    const dialogRef = this.dialog.open(EditUserComponentComponent,
      {
        data:{
          userID: data.id,
          firstname: data.firstname,
          lastname: data.lastname,
          mail: data.email,
          phone: data.phoneNumber,
          role: data.role,
        }
      })

      // dialogRef.afterClosed().subscribe(result => {
      //   if (result && result.refresh) {
      //     this.ngOnInit()
      //   }
      // })
  }
}
