import { DeleteUserPopupComponent } from 'src/app/components/dashboard/popups/delete-user-popup/delete-user-popup.component';
import { AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { NewUserDialogComponent } from '../home/new-user-dialog/new-user-dialog.component';
import { SearchService } from 'src/app/services/search.service';
import { SortService } from 'src/app/services/sort.service';
import { EditUserComponentComponent } from '../popups/edit-user-component/edit-user-component.component';

@Component({
  selector: 'app-checker',
  templateUrl: './checker.component.html',
  styleUrls: [
    './checker.component.css',
  ]
})
export class CheckerComponent implements OnInit {
  editIcon:string = "./../../../../assets/icons/dashboard/edit.svg"
  deleteIcon:string = "./../../../../assets/icons/dashboard/delete.svg"
  emptyList:string = "./../../../../assets/icons/dashboard/No-data-found.svg";

  tableHeaders:String[] = ['First Name', "Last Name", "Phone Number", "Email", "Created By", "Created Date", "Status", "Edit", "Delete"]
  dataSource!: MatTableDataSource<User>;
  varUsers!: User[];

  constructor(private searchService: SearchService, private sortService:SortService, private homeService:UserService, public dialog:MatDialog, ) {
    // Fetch our 100 users
    // this.varUsers = this.homeService.checkers;
    // Assign the data to the data source for the table to render
    // this.dataSource = new MatTableDataSource(this.varUsers);
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  //search
  searchInput: string = '';
  selectedSortOption: string = 'newest;'

  ngOnInit() {
    this.onGetCheckers();

    this.searchService.search$.subscribe((searchTerm)=> {
      this.searchInput = searchTerm;
      this.applySearch();
    })

    this.sortService.sortOption$.subscribe((option) => {
      this.selectedSortOption = option;
      this.applyFilter();
    });
  }

  onGetCheckers() {
    this.homeService.getCheckerObjs().subscribe({
      next:(query_response) => {
        this.varUsers = query_response;
        this.dataSource = new MatTableDataSource(this.varUsers);
      },
      error(err) {console.log(err, "Error in onGetCheckers()" )},
      complete() {console.log("onGetCheckers() successful")}
    })
  }

  applySearch() {
    // Fetch your data from the data service
    let data = this.varUsers;

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
     let data = this.varUsers;

      // Sort the data based on selectedSortOption
      if (this.selectedSortOption === 'newest') {
        data.sort((a, b) => Date.parse(b.createdDate) - Date.parse(a.createdDate));
        this.dataSource = new MatTableDataSource(data);
      } else if (this.selectedSortOption === 'oldest') {
        data.sort((a, b) => Date.parse(a.createdDate) - Date.parse(b.createdDate));
      }
      this.dataSource = new MatTableDataSource(data);
  }

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  // }

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
  }
}
