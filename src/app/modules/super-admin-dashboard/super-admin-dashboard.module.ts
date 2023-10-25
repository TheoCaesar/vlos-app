import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { HeaderComponent } from 'src/app/components/dashboard/header/header.component';
import { SidebarComponent } from 'src/app/components/dashboard/sidebar/sidebar.component';
import {MatIconModule} from '@angular/material/icon'
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { SidebarExtComponent } from 'src/app/components/dashboard/sidebar-ext/sidebar-ext.component';

@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    SidebarExtComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatSidenavModule,MatListModule
  ],
  exports: [
    DashboardComponent,
    HeaderComponent,
    SidebarComponent, SidebarExtComponent
  ],
})
export class SuperAdminDashboardModule { }
