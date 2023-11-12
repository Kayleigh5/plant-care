import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantsDetailsComponent } from './plants-details.component';

describe('PlantsDetailsComponent', () => {
  let component: PlantsDetailsComponent;
  let fixture: ComponentFixture<PlantsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlantsDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlantsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
