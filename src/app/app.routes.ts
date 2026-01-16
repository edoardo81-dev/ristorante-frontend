import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PiattiListComponent } from './components/piatti-list/piatti-list.component';
import { PiattoDetailComponent } from './components/piatto-detail/piatto-detail.component';
import { ContoComponent } from './components/conto/conto.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'menu', redirectTo: 'categoria/Primi', pathMatch: 'full' },

  { path: 'categoria/:categoria', component: PiattiListComponent },

  { path: 'piatti/:id', component: PiattoDetailComponent },
  { path: 'conto', component: ContoComponent },

  { path: '**', redirectTo: '' }
];
