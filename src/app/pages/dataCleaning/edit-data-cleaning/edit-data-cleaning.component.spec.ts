import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDataCleaningComponent } from './edit-data-cleaning.component';

describe('EditDataCleaningComponent', () => {
  let component: EditDataCleaningComponent;
  let fixture: ComponentFixture<EditDataCleaningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditDataCleaningComponent]
    });
    fixture = TestBed.createComponent(EditDataCleaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
