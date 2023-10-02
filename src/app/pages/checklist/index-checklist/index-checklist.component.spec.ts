import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexChecklistComponent } from './index-checklist.component';

describe('IndexChecklistComponent', () => {
  let component: IndexChecklistComponent;
  let fixture: ComponentFixture<IndexChecklistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndexChecklistComponent]
    });
    fixture = TestBed.createComponent(IndexChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
