import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { LoginComponent } from './layouts/login/login.component';
import { HomeComponent } from './modules/home/home.component';
import { Report1Component } from './modules/report1/report1.component';
import { ReportsComponent } from './modules/reports/reports.component';
import { SelectComponent } from './modules/select/select.component';

const routes: Routes = [
  {path: 'home', component: DefaultComponent, children:[
    {path: '', component: HomeComponent},
    {path: 'reports', component: ReportsComponent, children:[
      {path:'', component: SelectComponent},
      {path:'report1', component: Report1Component} 
    ]}
  ]},
  {path: '',  component: LoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
