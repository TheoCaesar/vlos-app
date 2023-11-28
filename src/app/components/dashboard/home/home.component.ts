import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, } from '@angular/material/paginator';
import {MatSort, } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { NewUserDialogComponent } from './new-user-dialog/new-user-dialog.component';
import { NewBankDialogComponent } from './new-bank-dialog/new-bank-dialog.component';
import { SearchService } from 'src/app/services/search.service';
import { SortService } from 'src/app/services/sort.service';
import { LoadingServiceService } from '../../core/loader/loading-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  tableHeaders:String[] = ['First Name', "Last Name", "Phone Number", "Email", "Created By", "Created Date", "Status", "Edit", "Delete"]
  dataSource!: MatTableDataSource<User>;
  varUsers!: User[];

  // @ViewChild(MatPaginator) paginator!: MatPaginator;
  // @ViewChild(MatSort) sort!: MatSort;

  makers!:User[];
  showLoader$ = this.spinnerService.loadingAction$;

  constructor(private homeService:UserService, public dialog:MatDialog, private spinnerService: LoadingServiceService,
    private searchService:SearchService, private sortService:SortService,
    ) {}

  ngOnInit(): void {
    this.spinnerService.showLoader();
  }

  triggerSearch(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log("hi",filterValue)
    this.searchService.setSearchTerm(filterValue);

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  triggerFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log("hi",filterValue)
    this.sortService.setSortOption(filterValue);

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  openNewFIDialog() {
    const dialogRef = this.dialog.open(NewBankDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result: ${result}')
    })
  }
  //mat dialogs
  openNewUserDialog() {
    const dialogRef = this.dialog.open(NewUserDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result: ${result}')
    })
  }


  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;
  // }
}
