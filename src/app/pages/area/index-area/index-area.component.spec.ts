import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexAreaComponent } from './index-area.component';

describe('IndexAreaComponent', () => {
  let component: IndexAreaComponent;
  let fixture: ComponentFixture<IndexAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndexAreaComponent]
    });
    fixture = TestBed.createComponent(IndexAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
