import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { AboutComponent } from 'src/app/about/about.component';
import { DishsComponent } from 'src/app/dishs/dishs.component';
import { NotFoundComponent } from 'src/app/not-found/not-found.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'dishs',component:DishsComponent},
  {path:'about/dishs',redirectTo:'dishs',pathMatch:'full'},
  {path:'home/dishs',redirectTo:'dishs',pathMatch:'full'},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
