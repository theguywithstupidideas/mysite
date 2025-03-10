import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngoloAggiuntoComponent } from './angolo-aggiunto.component';

describe('AngoloAggiuntoComponent', () => {
  let component: AngoloAggiuntoComponent;
  let fixture: ComponentFixture<AngoloAggiuntoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngoloAggiuntoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngoloAggiuntoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
