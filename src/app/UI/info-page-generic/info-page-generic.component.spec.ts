import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPageGenericComponent } from './info-page-generic.component';

describe('InfoPageGenericComponent', () => {
  let component: InfoPageGenericComponent;
  let fixture: ComponentFixture<InfoPageGenericComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoPageGenericComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoPageGenericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
