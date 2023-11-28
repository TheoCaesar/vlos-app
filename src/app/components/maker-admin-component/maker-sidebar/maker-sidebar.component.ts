import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FaqComponent } from '../../dashboard/faq/faq.component';
import { DeleteUserPopupComponent } from '../../dashboard/popups/delete-user-popup/delete-user-popup.component';

@Component({
  selector: 'app-maker-sidebar',
  templateUrl: './maker-sidebar.component.html',
  styleUrls: ['./maker-sidebar.component.css']
})
export class MakerSidebarComponent {
  homeIcon:string = './../../../../assets/icons/sidebar/home-icon.svg'
  faqIcon:string = './../../../../assets/icons/sidebar/faq-icon.svg'
  activeFaqIcon:string = './../../../../assets/icons/sidebar/notification-active-white.svg'
  makerIcon:string = './../../../../assets/icons/sidebar/maker-blue.svg'
  activeMakerIcon = './../../../../assets/icons/sidebar/maker-active-white.svg'
  checkerIcon:string = './../../../../assets/icons/sidebar/checker.svg'
  activeCheckerIcon = './../../../../assets/icons/sidebar/checker-active-white.svg'
  bankIcon:string = './../../../../assets/icons/sidebar/bank.svg'
  activeBankIcon = './../../../../assets/icons/sidebar/bank-active-white.svg'
  // settingsIcon:string = './../../../../assets/icons/sidebar/settings.svg'
  arrowIcon:string = './../../../../assets/icons/sidebar/arrow-right.svg'
  userIcon:string =  './../../../../assets/icons/sidebar/user-icon.svg'
  anchorIcon:string = './../../../../assets/icons/sidebar/maker/anchor-icon.svg'
  activeAnchorIcon:string = './../../../../assets/icons/sidebar/maker/anchor-icon-white.svg'
  masteranchorIcon:string = './../../../../assets/icons/sidebar/maker/master-anchor-icon.svg'
  activeMasteranchorIcon:string = './../../../../assets/icons/sidebar/maker/master-anchor-white.svg'
  dealerIcon:string = './../../../../assets/icons/sidebar/maker/dealer-icon.svg'
  activeDealerIcon:string = './../../../../assets/icons/sidebar/maker/dealer-icon-white.svg'
  settingsIcon:string = './../../../../assets/icons/sidebar/maker/settings-icon.svg'


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
