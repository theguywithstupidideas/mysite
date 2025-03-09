import {Component, Input} from '@angular/core';
import {MatCard, MatCardContent} from '@angular/material/card';

@Component({
  selector: 'app-timeline-segment',
  imports: [
    MatCard,
    MatCardContent
  ],
  templateUrl: './timeline-segment.component.html',
  styleUrl: './timeline-segment.component.css'
})
export class TimelineSegmentComponent {
  @Input() Title: string = 'default';
  @Input() Date: string = 'Date';
}
