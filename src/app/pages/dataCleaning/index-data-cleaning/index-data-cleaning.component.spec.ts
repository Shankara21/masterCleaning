import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexDataCleaningComponent } from './index-data-cleaning.component';

describe('IndexDataCleaningComponent', () => {
  let component: IndexDataCleaningComponent;
  let fixture: ComponentFixture<IndexDataCleaningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndexDataCleaningComponent]
    });
    fixture = TestBed.createComponent(IndexDataCleaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
