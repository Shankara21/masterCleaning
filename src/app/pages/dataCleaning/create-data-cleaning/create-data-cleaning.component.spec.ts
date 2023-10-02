import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDataCleaningComponent } from './create-data-cleaning.component';

describe('CreateDataCleaningComponent', () => {
  let component: CreateDataCleaningComponent;
  let fixture: ComponentFixture<CreateDataCleaningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateDataCleaningComponent]
    });
    fixture = TestBed.createComponent(CreateDataCleaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
