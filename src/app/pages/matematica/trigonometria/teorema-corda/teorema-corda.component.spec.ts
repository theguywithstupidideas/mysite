import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeoremaCordaComponent } from './teorema-corda.component';

describe('TeoremaCordaComponent', () => {
  let component: TeoremaCordaComponent;
  let fixture: ComponentFixture<TeoremaCordaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeoremaCordaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeoremaCordaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
