import { AfterViewChecked, AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, } from '@angular/material/paginator';
import {MatSort, } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { UserService } from 'src/app/services/user.service';
import { FIUser } from './../../../interfaces/fiUser';
import { SearchService } from 'src/app/services/search.service';
import { SortService } from 'src/app/services/sort.service';

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

  constructor(private searchService: SearchService, private sortService:SortService, private homeService:UserService) {
    this.varUsers = this.homeService.banks;
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.varUsers);
  }

  isBankDeleted(status: string){
    return status == "Deleted" ?  true : false;
  }

   //search
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
  }

  applySearch() {
    // Fetch your data from the data service
    let data = this.homeService.banks;

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
     let data = this.homeService.banks;

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
}
