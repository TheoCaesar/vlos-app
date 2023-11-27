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
import { EditUserComponentComponent } from './components/dashboard/popups/edit-user-component/edit-user-component.component';
import { MakerResolver } from './resolvers/maker-resolver';
import { OtpComponent } from './components/otp/otp.component';

const routes: Routes = [
  {path:"", component:AdminLoginComponent},
  {
    path:"master-anchor-login",
    component:MasterAnchorLoginComponent,
    canActivate:[authGuard]
  },
  {
    path:"verify-admin-login",
    component:OtpComponent,
    // canActivate:[authGuard]
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
        resolve: {
          data: MakerResolver
        },
      },
      {
        path:"checker",
        component:CheckerComponent,

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
  exports: [RouterModule],
  providers: [MakerResolver,]
})
export class AppRoutingModule { }
