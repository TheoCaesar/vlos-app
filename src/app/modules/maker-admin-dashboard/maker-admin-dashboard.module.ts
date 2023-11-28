import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MakerDashboardComponent } from 'src/app/components/maker-admin-component/maker-dashboard/maker-dashboard.component';
// import { HeaderComponent } from 'src/app/components/dashboard/header/header.component';
import { MakerHomeComponent } from 'src/app/components/maker-admin-component/maker-home/maker-home.component';
import { MakerSidebarComponent } from 'src/app/components/maker-admin-component/maker-sidebar/maker-sidebar.component';


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
import {MatIconModule} from '@angular/material/icon'
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import { MakerHeaderComponent } from 'src/app/components/maker-admin-component/maker-header/maker-header.component';
import { DealerDashboardComponent } from 'src/app/components/maker-admin-component/maker-dashboard/dealer-dashboard/dealer-dashboard.component';
import { AnchorDashboardComponent } from 'src/app/components/maker-admin-component/maker-dashboard/anchor-dashboard/anchor-dashboard.component';
import { MasterAnchorDashboardComponent } from 'src/app/components/maker-admin-component/maker-dashboard/master-anchor-dashboard/master-anchor-dashboard.component';
import { ProgramComponent } from 'src/app/components/maker-admin-component/maker-dashboard/program/program.component';


@NgModule({
  declarations: [
    MakerDashboardComponent,
    MakerHomeComponent,
    MakerHeaderComponent,
    MakerSidebarComponent,
    DealerDashboardComponent,
    AnchorDashboardComponent,
    MasterAnchorDashboardComponent,
    ProgramComponent,

  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatSidenavModule,MatListModule, MatButtonModule,
    MatSelectModule,MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule,
    MatMenuModule,MatDialogModule, RouterModule, MatRadioModule, ReactiveFormsModule, MatTabsModule
  ],
  exports: [
    MakerDashboardComponent,
    MakerHeaderComponent,
    MakerHomeComponent,MakerSidebarComponent,
    DealerDashboardComponent,
    AnchorDashboardComponent,
    MasterAnchorDashboardComponent,
    ProgramComponent,
  ]
})
export class MakerAdminDashboardModule { }
