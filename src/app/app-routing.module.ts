import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { MasterAnchorLoginComponent } from './components/master-anchor-login/master-anchor-login.component';
import { authGuard } from './auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/dashboard/home/home.component';
import { CheckerComponent } from './components/dashboard/checker/checker.component';
import { FiBanksComponent } from './components/dashboard/fi-banks/fi-banks.component';
import { MakerComponent } from './components/dashboard/maker/maker.component';

const routes: Routes = [
  {path:"", component:AdminLoginComponent},
  {
    path:"master-anchor-login",
    component:MasterAnchorLoginComponent,
    canActivate:[authGuard]
  },
  {
    path:"dashboard",
    component:DashboardComponent,
    children: [
      // {
      //   path:"",
      //   component: HomeComponent,
      // },
      {
        path:"maker",
        component:MakerComponent,
      },
      {
        path:"checker",
        component:CheckerComponent
      },
      {
        path:'banks',
        component:FiBanksComponent
      },
    ]
  },
  {path:"temp", component: MakerComponent},
  {path:"temp2", component: CheckerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
