import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  //icons
  homeIcon:string = './../../../../assets/icons/sidebar/home.svg'
  faqIcon:string = './../../../../assets/icons/sidebar/faq.svg'
  makerIcon:string = './../../../../assets/icons/sidebar/maker-blue.svg'
  checkerIcon:string = './../../../../assets/icons/sidebar/checker.svg'
  bankIcon:string = './../../../../assets/icons/sidebar/bank.svg'
  settingsIcon:string = './../../../../assets/icons/sidebar/settings.svg'
  arrowIcon:string = './../../../../assets/icons/sidebar/arrow-right.svg'
  userIcon:string =  './../../../../assets/icons/sidebar/user-white.svg'
  ext_sidebar:boolean = false;

  hideDetails() {
    this.ext_sidebar = false;
  }
  showDetails() {
    this.ext_sidebar = true;
  }
}
