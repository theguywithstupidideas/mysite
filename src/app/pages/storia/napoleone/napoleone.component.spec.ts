import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NapoleoneComponent } from './napoleone.component';

describe('NapoleoneComponent', () => {
  let component: NapoleoneComponent;
  let fixture: ComponentFixture<NapoleoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NapoleoneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NapoleoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
