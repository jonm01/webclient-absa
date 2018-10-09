import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ScrapComponent } from './scrap/scrap.component';
import { AnalyseComponent } from './analyse/analyse.component';
const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full' },
  {path:'home', component:HomeComponent},
  {path:'scrap', component: ScrapComponent},
  {path:'analyse', component: AnalyseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
