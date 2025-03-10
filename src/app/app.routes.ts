import { Routes } from '@angular/router';
import {MainComponent} from './pages/main/main.component';
import {CelluleStaminaliComponent} from './pages/biologia/corpo-umano/cellule-staminali/cellule-staminali.component';
import {StuartAgeComponent} from './pages/inglese/stuart-age/stuart-age.component';
import {NapoleoneComponent} from './pages/storia/napoleone/napoleone.component';
import {TeoremaAreaComponent} from './pages/matematica/trigonometria/teorema-area/teorema-area.component';

export const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'cellule-staminali', component: CelluleStaminaliComponent },
  { path: 'stuart-age', component: StuartAgeComponent },
  { path: 'napoleone', component: NapoleoneComponent },
  { path: 'teorema-area', component: TeoremaAreaComponent },
  { path: '', redirectTo: 'main', pathMatch: 'full' },
];
