import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeoremaSenoComponent } from './teorema-seno.component';

describe('TeoremaSenoComponent', () => {
  let component: TeoremaSenoComponent;
  let fixture: ComponentFixture<TeoremaSenoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeoremaSenoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeoremaSenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
