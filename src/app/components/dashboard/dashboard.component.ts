import { MatSidenav } from '@angular/material/sidenav';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  @ViewChild('sidebar') sidebar!:MatSidenav;

  reason = "";

  close() {
    this.sidebar.close;
  }
}
