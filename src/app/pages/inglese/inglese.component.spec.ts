import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngleseComponent } from './inglese.component';

describe('IngleseComponent', () => {
  let component: IngleseComponent;
  let fixture: ComponentFixture<IngleseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IngleseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngleseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
