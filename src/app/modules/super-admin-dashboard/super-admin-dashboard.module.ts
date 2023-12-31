import { User } from 'src/app/interfaces/user';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { HeaderComponent } from 'src/app/components/dashboard/header/header.component';
import { SidebarComponent } from 'src/app/components/dashboard/sidebar/sidebar.component';
import { HomeComponent } from 'src/app/components/dashboard/home/home.component';
import { CheckerComponent } from 'src/app/components/dashboard/checker/checker.component';
import { FiBanksComponent } from 'src/app/components/dashboard/fi-banks/fi-banks.component';
import { MakerComponent } from 'src/app/components/dashboard/maker/maker.component';
import { NewUserDialogComponent } from 'src/app/components/dashboard/home/new-user-dialog/new-user-dialog.component';
import { FaqComponent } from 'src/app/components/dashboard/faq/faq.component';
import { NewBankDialogComponent } from 'src/app/components/dashboard/home/new-bank-dialog/new-bank-dialog.component';
import { CancelPopupComponent } from 'src/app/components/dashboard/popups/cancel-popup/cancel-popup.component';
import { SuccessPopupComponent } from 'src/app/components/dashboard/popups/success-popup/success-popup.component';
import { DeletePopupComponent } from 'src/app/components/dashboard/popups/delete-popup/delete-popup.component';

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
import { DeleteUserPopupComponent } from 'src/app/components/dashboard/popups/delete-user-popup/delete-user-popup.component';
import { EditUserComponentComponent } from 'src/app/components/dashboard/popups/edit-user-component/edit-user-component.component';
import { SortService } from 'src/app/services/sort.service';
import { SearchService } from 'src/app/services/search.service';
import { BankStatusPopupComponent } from 'src/app/components/dashboard/popups/bank-status-popup/bank-status-popup.component';
import { EditBankPopupComponent } from 'src/app/components/dashboard/popups/edit-bank-popup/edit-bank-popup.component';
import { OtpComponent } from 'src/app/components/otp/otp.component';
import { LoaderComponent } from 'src/app/components/core/loader/loader.component';


@NgModule({
  declarations: [
    DashboardComponent, LoaderComponent,
    HeaderComponent,
    SidebarComponent,
    FaqComponent,
    EditBankPopupComponent,
    HomeComponent,
    OtpComponent,
    CheckerComponent,
    MakerComponent,
    FiBanksComponent,
    NewUserDialogComponent, NewBankDialogComponent,
    CancelPopupComponent,
    DeletePopupComponent,
    SuccessPopupComponent,    DeleteUserPopupComponent,
    EditUserComponentComponent, BankStatusPopupComponent,

  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatSidenavModule,MatListModule, MatButtonModule,
    MatSelectModule,MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule,
    MatMenuModule,MatDialogModule, RouterModule, MatRadioModule, ReactiveFormsModule, MatTabsModule
  ],
  exports: [
    DashboardComponent,
    MakerComponent,
    HeaderComponent,CheckerComponent,FaqComponent,
    FiBanksComponent,NewUserDialogComponent,NewBankDialogComponent,
    SidebarComponent,
    CancelPopupComponent,
    DeletePopupComponent,    DeleteUserPopupComponent,
    EditBankPopupComponent,
    EditUserComponentComponent,
    SuccessPopupComponent,BankStatusPopupComponent,LoaderComponent
  ],
  providers: [
    UserService, SortService, SearchService,
  ]
})
export class SuperAdminDashboardModule { }
