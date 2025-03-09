import { Component } from '@angular/core';
import {InfoPageGenericComponent} from '../../../UI/info-page-generic/info-page-generic.component';
import {TimelineSegmentComponent} from '../../../UI/timeline-segment/timeline-segment.component';

@Component({
  selector: 'app-stuart-age',
  imports: [
    InfoPageGenericComponent,
    TimelineSegmentComponent
  ],
  templateUrl: './stuart-age.component.html',
  styleUrl: './stuart-age.component.css'
})
export class StuartAgeComponent {

}
