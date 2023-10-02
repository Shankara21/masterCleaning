import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDataCleaningComponent } from './show-data-cleaning.component';

describe('ShowDataCleaningComponent', () => {
  let component: ShowDataCleaningComponent;
  let fixture: ComponentFixture<ShowDataCleaningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowDataCleaningComponent]
    });
    fixture = TestBed.createComponent(ShowDataCleaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
