import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {LandingModule} from './landing/landing.module';
import {LandingComponent} from './landing/landing.component';
import {AlgorithmsComponent} from './content/algorithms.component';
import {DataStructuresComponent} from './content/data-structures.component';


export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'sign-in', component: LoginComponent},
  {path: 'sign-out', component: HomeComponent},
  {path: 'landing', component: LandingComponent,
  children: [
    {path: 'Algorithms', component: AlgorithmsComponent},
    {path: 'Data Structures', component: DataStructuresComponent},
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes), LandingModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
