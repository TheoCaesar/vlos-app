import { AfterViewChecked, AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, } from '@angular/material/paginator';
import {MatSort, } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { makeBindingParser } from '@angular/compiler';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  tableHeaders:String[] = ['First Name', "Last Name", "Phone Number", "Email", "Created By", "Created Date", "Status", "Edit", "Delete"]
  dataSource!: MatTableDataSource<User>;
  varUsers!: User[];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;



  constructor(private homeService:UserService) {
    // Fetch our 100 users
    const users = this.homeService.makers;
    this.varUsers = users;
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
    console.log(users)
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


}
