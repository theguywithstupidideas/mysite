import { Routes } from '@angular/router';
import {MainComponent} from './pages/main/main.component';
import {CorpoUmanoComponent} from './pages/biologia/corpo-umano/corpo-umano.component';
import {CelluleStaminaliComponent} from './pages/biologia/corpo-umano/cellule-staminali/cellule-staminali.component';

export const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'corpo-umano', component: CorpoUmanoComponent },
  { path: 'cellule-staminali', component: CelluleStaminaliComponent },
  { path: '', redirectTo: 'main', pathMatch: 'full' },
];
