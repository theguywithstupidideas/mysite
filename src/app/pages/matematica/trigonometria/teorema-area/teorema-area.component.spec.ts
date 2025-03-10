import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeoremaAreaComponent } from './teorema-area.component';

describe('TeoremaAreaComponent', () => {
  let component: TeoremaAreaComponent;
  let fixture: ComponentFixture<TeoremaAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeoremaAreaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeoremaAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
