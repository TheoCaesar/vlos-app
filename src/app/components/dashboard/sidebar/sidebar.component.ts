import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FaqComponent } from '../faq/faq.component';

import { DeleteUserPopupComponent } from '../popups/delete-user-popup/delete-user-popup.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  //icons
  homeIcon:string = './../../../../assets/icons/sidebar/home.svg'
  faqIcon:string = './../../../../assets/icons/sidebar/faq.svg'
  activeFaqIcon:string = './../../../../assets/icons/sidebar/notification-active-white.svg'
  makerIcon:string = './../../../../assets/icons/sidebar/maker-blue.svg'
  activeMakerIcon = './../../../../assets/icons/sidebar/maker-active-white.svg'
  checkerIcon:string = './../../../../assets/icons/sidebar/checker.svg'
  activeCheckerIcon = './../../../../assets/icons/sidebar/checker-active-white.svg'
  bankIcon:string = './../../../../assets/icons/sidebar/bank.svg'
  activeBankIcon = './../../../../assets/icons/sidebar/bank-active-white.svg'
  settingsIcon:string = './../../../../assets/icons/sidebar/settings.svg'
  arrowIcon:string = './../../../../assets/icons/sidebar/arrow-right.svg'
  userIcon:string =  './../../../../assets/icons/sidebar/user-white.svg'

  constructor(public dialog: MatDialog, private sidebarRouter: Router) {}
  ext_sidebar:boolean = false;

  hideDetails() {
    this.ext_sidebar = false;
  }
  showDetails() {
    this.ext_sidebar = true;
  }

  faqIsActive = false;

  openFaqPage() {
    const dialogRef = this.dialog.open(FaqComponent);
    // window.alert("Hello!");
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result: ${result}')
    })
  }

  testPopUp() {
    const dialogRef = this.dialog.open(DeleteUserPopupComponent)
  }
}
