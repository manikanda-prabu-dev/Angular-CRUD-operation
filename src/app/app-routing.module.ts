import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { DetailsComponent } from './details/details.component';
import { AddComponent } from './add/add.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'', component:RegisterComponent},
  {path:'register', component:RegisterComponent},
  {path:'details', component:DetailsComponent},
  {path:'add', component:AddComponent},
  {path:'home', component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const route=[RegisterComponent,DetailsComponent,AddComponent]