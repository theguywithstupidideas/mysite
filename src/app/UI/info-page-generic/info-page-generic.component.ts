import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-info-page-generic',
  imports: [],
  templateUrl: './info-page-generic.component.html',
  styleUrl: './info-page-generic.component.css'
})
export class InfoPageGenericComponent {
  @Input() Title: string = 'Default';
}
