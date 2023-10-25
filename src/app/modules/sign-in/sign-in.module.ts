import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLoginComponent } from 'src/app/components/admin-login/admin-login.component';
import { MasterAnchorLoginComponent } from 'src/app/components/master-anchor-login/master-anchor-login.component';
import {ReactiveFormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AdminLoginComponent,
    MasterAnchorLoginComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    AdminLoginComponent,
    MasterAnchorLoginComponent,
  ]
})
export class SignInModule { }
