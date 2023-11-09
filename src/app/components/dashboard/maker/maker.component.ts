import { NewUserDialogComponent } from 'src/app/components/dashboard/home/new-user-dialog/new-user-dialog.component';
import { DeleteUserPopupComponent } from 'src/app/components/dashboard/popups/delete-user-popup/delete-user-popup.component';
import { AfterViewChecked, AfterViewInit, Component, ViewChild} from '@angular/core';
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

  constructor(private homeService:UserService, public dialog:MatDialog) {
    this.varUsers = this.homeService.makers;
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.varUsers);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deletePopUp() {
    const dialogRef = this.dialog.open(DeleteUserPopupComponent)
  }

  editPopUp() {
    const dialogRef = this.dialog.open(NewUserDialogComponent)
  }
}
