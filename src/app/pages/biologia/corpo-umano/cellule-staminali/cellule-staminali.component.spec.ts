import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CelluleStaminaliComponent } from './cellule-staminali.component';

describe('CelluleStaminaliComponent', () => {
  let component: CelluleStaminaliComponent;
  let fixture: ComponentFixture<CelluleStaminaliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CelluleStaminaliComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CelluleStaminaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
