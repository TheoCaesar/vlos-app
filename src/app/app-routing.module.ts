import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { MasterAnchorLoginComponent } from './components/master-anchor-login/master-anchor-login.component';
import { authGuard } from './auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {path:"", component:AdminLoginComponent},
  {
    path:"master-anchor-login",
    component:MasterAnchorLoginComponent,
    canActivate:[authGuard]
  },
  { path:"dashboard", component:DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
