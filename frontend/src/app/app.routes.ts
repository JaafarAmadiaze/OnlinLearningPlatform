
import { Routes ,RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { CoursePageComponent } from './components/pages/course-page/course-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { NgModule } from '@angular/core';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route
  { path: 'search/:searchTerm', component: HomeComponent }, // Example route 
  {path: 'tag/:tagName', component: HomeComponent}, // Example route
  {path : 'course/:id',component: CoursePageComponent}, // Example route
  {path: 'cart-page', component: CartPageComponent}, // Example route
  {path: 'discover', component: HomeComponent}, // Example route
  {path :'login', component : LoginPageComponent }, // Example route
];
