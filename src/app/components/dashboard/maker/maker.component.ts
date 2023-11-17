import { SearchService } from 'src/app/services/search.service';
import { SortService } from 'src/app/services/sort.service';
import { NewUserDialogComponent } from 'src/app/components/dashboard/home/new-user-dialog/new-user-dialog.component';
import { DeleteUserPopupComponent } from 'src/app/components/dashboard/popups/delete-user-popup/delete-user-popup.component';
import { AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, } from '@angular/material/paginator';import {MatSort, } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-maker',
  templateUrl: './maker.component.html',
  styleUrls: ['./maker.component.css',]
})
export class MakerComponent  implements AfterViewInit {
  editIcon:string = "./../../../../assets/icons/dashboard/edit.svg";
  deleteIcon:string = "./../../../../assets/icons/dashboard/delete.svg";
  emptyList:string = "./../../../../assets/icons/dashboard/No-data-found.svg";

  tableHeaders:String[] = ['First Name', "Last Name", "Phone Number", "Email", "Created By", "Created Date", "Status", "Edit", "Delete"]
  dataSource!: MatTableDataSource<User>;
  varUsers: User[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private sortService: SortService, private searchService:SearchService, private homeService:UserService, public dialog:MatDialog) {
    // this.varUsers = this.onGetMakers();
    // Assign the data to the data source for the table to render
    // this.dataSource = new MatTableDataSource(this.makers);
  }

 //search & sort
 searchInput: string = '';
 selectedSortOption: string = 'newest;'

  ngOnInit() {
    this.searchService.search$.subscribe((searchTerm)=> {
      this.searchInput = searchTerm;
      this.applySearch();
    })

    this.sortService.sortOption$.subscribe((option) => {
      this.selectedSortOption = option;
      this.applyFilter();
    });

    this.onGetMakers();
  }

  makers!: User[]

  onGetMakers() {
    this.homeService.getMakerObjs().subscribe({
      next:(query) => {
        this.makers = query;
        console.log("allUsers:-->", this.makers);
      this.dataSource = new MatTableDataSource(this.makers);

      },
      error(err) { console.log(err) },                    //error - handling error sent to observable.
      complete() { console.log('Done getting ');}         //fxn run on completion
    });
  }

  applySearch() {
    // Fetch your data from the data service
    let data = this.makers;

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
     let data = this.makers;

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
    this.dataSource.sort = this.sort;
  }

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
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
    const dialogRef = this.dialog.open(NewUserDialogComponent)
  }
}
