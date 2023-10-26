import { User } from 'src/app/interfaces/user';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { HeaderComponent } from 'src/app/components/dashboard/header/header.component';
import { SidebarComponent } from 'src/app/components/dashboard/sidebar/sidebar.component';
import {MatIconModule} from '@angular/material/icon'
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button'
import { SidebarExtComponent } from 'src/app/components/dashboard/sidebar-ext/sidebar-ext.component';
import { HomeComponent } from 'src/app/components/dashboard/home/home.component';
import { MatSelectModule } from '@angular/material/select';

import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { UserService } from 'src/app/services/user.service';

@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    SidebarExtComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatSidenavModule,MatListModule, MatButtonModule,
    MatSelectModule,MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule
  ],
  exports: [
    DashboardComponent,
    HeaderComponent,
    SidebarComponent, SidebarExtComponent
  ],
  providers: [
    UserService,
  ]
})
export class SuperAdminDashboardModule { }
