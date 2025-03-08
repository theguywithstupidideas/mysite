import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorpoUmanoComponent } from './corpo-umano.component';

describe('CorpoUmanoComponent', () => {
  let component: CorpoUmanoComponent;
  let fixture: ComponentFixture<CorpoUmanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorpoUmanoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorpoUmanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
