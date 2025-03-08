import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuartAgeComponent } from './stuart-age.component';

describe('StuartAgeComponent', () => {
  let component: StuartAgeComponent;
  let fixture: ComponentFixture<StuartAgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StuartAgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StuartAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
