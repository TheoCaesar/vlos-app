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
import { HomeComponent } from 'src/app/components/dashboard/home/home.component';
import { CheckerComponent } from 'src/app/components/dashboard/checker/checker.component';
import { FiBanksComponent } from 'src/app/components/dashboard/fi-banks/fi-banks.component';
import { MakerComponent } from 'src/app/components/dashboard/maker/maker.component';

// services
import { UserService } from 'src/app/services/user.service';

//modules
import { Router, RouterModule } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    CheckerComponent,
    MakerComponent,
    FiBanksComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatSidenavModule,MatListModule, MatButtonModule,
    MatSelectModule,MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule,
    MatMenuModule,MatDialogModule, RouterModule
  ],
  exports: [
    DashboardComponent,
    MakerComponent,
    HeaderComponent,CheckerComponent,
    FiBanksComponent,
    SidebarComponent,
  ],
  providers: [
    UserService,
  ]
})
export class SuperAdminDashboardModule { }
