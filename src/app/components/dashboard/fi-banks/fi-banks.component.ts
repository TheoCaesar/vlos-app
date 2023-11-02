import { AfterViewChecked, AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, } from '@angular/material/paginator';
import {MatSort, } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { UserService } from 'src/app/services/user.service';
import { FIUser } from './../../../interfaces/fiUser';

@Component({
  selector: 'app-fi-banks',
  templateUrl: './fi-banks.component.html',
  styleUrls: ['./fi-banks.component.css']
})
export class FiBanksComponent implements AfterViewInit {
  editIcon:string = "./../../../../assets/icons/dashboard/edit.svg"
  deleteIcon:string = "./../../../../assets/icons/dashboard/delete.svg"
  deactivateIcon:string = "./../../../../assets/icons/dashboard/deactivate.svg"
  reactivateIcon:string = "./../../../../assets/icons/dashboard/reactivate.svg"
  emptyList:string = "./../../../../assets/icons/dashboard/No-data-found.svg";

  tableHeaders:String[] = [
    'FI Name', "FI Short Name", "FI Code", "FI Type", "Created By",
    "Created Date", "Status", "Date Modified" ,"Edit", "Delete", "(de)activate"
  ]
  dataSource!: MatTableDataSource<FIUser>;
  varUsers!: FIUser[];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private homeService:UserService) {
    this.varUsers = this.homeService.banks;
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.varUsers);
  }

  isBankDeleted(status: string){
    return status == "Deleted" ?  true : false;
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
