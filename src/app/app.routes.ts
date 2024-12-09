import {ExtraOptions, Routes} from '@angular/router';
//
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent, title: 'Home'},
  {path: 'about', component: AboutComponent, title: 'About'},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
];

export const routeOptions: ExtraOptions = {
  enableTracing: true
};
