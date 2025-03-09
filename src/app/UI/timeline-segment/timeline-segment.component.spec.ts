import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineSegmentComponent } from './timeline-segment.component';

describe('TimelineSegmentComponent', () => {
  let component: TimelineSegmentComponent;
  let fixture: ComponentFixture<TimelineSegmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimelineSegmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimelineSegmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
