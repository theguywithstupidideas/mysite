import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeoremaCosenoComponent } from './teorema-coseno.component';

describe('TeoremaCosenoComponent', () => {
  let component: TeoremaCosenoComponent;
  let fixture: ComponentFixture<TeoremaCosenoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeoremaCosenoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeoremaCosenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
