import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';




import { provideRouter, Routes } from '@angular/router';

import { HomeComponent } from './app/components/pages/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent }, 
  
];



bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));


