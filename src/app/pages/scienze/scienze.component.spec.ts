import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScienzeComponent } from './scienze.component';

describe('ScienzeComponent', () => {
  let component: ScienzeComponent;
  let fixture: ComponentFixture<ScienzeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScienzeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScienzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
