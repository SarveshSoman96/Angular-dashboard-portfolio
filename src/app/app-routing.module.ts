import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationComponent } from './notification/notification.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {path:"",redirectTo:'/dashboard',pathMatch:'full'},
  {path:"dashboard",component:DashboardComponent},
  {path:"user-profile",component:UserProfileComponent},
  {path:"table-list",component:TableListComponent},
  {path:"typography",component:TypographyComponent},
  {path:"icons",component:IconsComponent},
  {path:"maps",component:MapsComponent},
  {path:"notification",component:NotificationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
