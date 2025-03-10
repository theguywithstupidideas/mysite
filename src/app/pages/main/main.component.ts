import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {InfoPageGenericComponent} from '../../UI/info-page-generic/info-page-generic.component';

@Component({
  selector: 'app-main',
  imports: [
    MatButtonModule,
    InfoPageGenericComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
