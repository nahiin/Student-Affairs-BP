import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Workshop } from './workshop/workshop';

export const routes: Routes = [
  { path: '', 
    component: Home },
    
  { path: 'workshops/:slug', 
    component: Workshop },
];
