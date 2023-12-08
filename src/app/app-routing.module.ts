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
import { CheckerResolver } from './resolvers/checker-resolver';
import { FiResolver } from './resolvers/fi-resolver';
import { MakerDashboardComponent } from './components/maker-admin-component/maker-dashboard/maker-dashboard.component';
import { DealerDashboardComponent } from './components/maker-admin-component/maker-dashboard/dealer-dashboard/dealer-dashboard.component';
import { AnchorDashboardComponent } from './components/maker-admin-component/maker-dashboard/anchor-dashboard/anchor-dashboard.component';
import { MasterAnchorDashboardComponent } from './components/maker-admin-component/maker-dashboard/master-anchor-dashboard/master-anchor-dashboard.component';
import { ProgramComponent } from './components/maker-admin-component/maker-dashboard/program/program.component';
import { DealerResolver } from './resolvers/maker-admin/dealer-resolver';
import { AnchorResolver } from './resolvers/maker-admin/anchor-resolver';
import { MasterAnchorResolver } from './resolvers/maker-admin/master-anchor-resolver';
import { StatusResolver } from './resolvers/maker-admin/status-resolver';


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
        // resolve: {
        //   checkerData:CheckerResolver
        // }

      },
      {
        path:'banks',
        component:FiBanksComponent,
        resolve: {
          fi_data: FiResolver
        },
      },
    ]
  },
  {
    path:"maker-admin",
    component: MakerDashboardComponent,
    resolve: {
      statusData: StatusResolver,
    },
    children: [
      {
        path: "dealer",
        component: DealerDashboardComponent,
        resolve: {
          dealerData: DealerResolver
        }
      },
      {
        path: "anchor",
        component: AnchorDashboardComponent,
        resolve: {
          anchorData: AnchorResolver
        }

      },
      {
        path: "master-anchor",
        component: MasterAnchorDashboardComponent,
        resolve: {
          masterAnchorData: MasterAnchorResolver
        }

      },
      {
        path: "program",
        component: ProgramComponent,
      },

    ]
  },
  {path:"temp2", component: CheckerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [MakerResolver, CheckerResolver, FiResolver, DealerResolver, AnchorResolver, MasterAnchorResolver, StatusResolver]
})
export class AppRoutingModule { }
