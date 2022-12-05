import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstCmpComponent } from './first-cmp/first-cmp.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'hero-detail',component:HeroDetailComponent
  },
  {
    path:'first-cmp',component:FirstCmpComponent
  },
  {
    path:'',component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
