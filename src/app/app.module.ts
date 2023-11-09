import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInModule } from './modules/sign-in/sign-in.module';
import { SuperAdminDashboardModule } from './modules/super-admin-dashboard/super-admin-dashboard.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { CancelPopupComponent } from './components/dashboard/popups/cancel-popup/cancel-popup.component';
// import { DeletePopupComponent } from './components/dashboard/popups/delete-popup/delete-popup.component';
// import { SuccessPopupComponent } from './components/dashboard/popups/success-popup/success-popup.component';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SignInModule,
    SuperAdminDashboardModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
