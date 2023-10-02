import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateChecklistComponent } from './create-checklist.component';

describe('CreateChecklistComponent', () => {
  let component: CreateChecklistComponent;
  let fixture: ComponentFixture<CreateChecklistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateChecklistComponent]
    });
    fixture = TestBed.createComponent(CreateChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
