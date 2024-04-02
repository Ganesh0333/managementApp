import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CreateStudentsComponent } from './create-students/create-students.component';
import { AllStudentsComponent } from './all-students/all-students.component';
import { DesktopViewComponent } from './desktop-view/desktop-view.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'dashboard',component:DashboardComponent, children:[
    {path:'createstudents',component:CreateStudentsComponent},
    {path:'allstudents',component:AllStudentsComponent},
    {path:'desktopView',component:DesktopViewComponent}
  ]},
  {path:"", component:LoginComponent},
  {path:"**", component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
