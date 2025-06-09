import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimitiveCounterComponent } from './primitive-counter.component';

describe('PrimitiveCounterComponent', () => {
  let component: PrimitiveCounterComponent;
  let fixture: ComponentFixture<PrimitiveCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimitiveCounterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimitiveCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
