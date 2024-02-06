import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintReportComponent } from './print-report.component';

describe('PrintReportComponent', () => {
  let component: PrintReportComponent;
  let fixture: ComponentFixture<PrintReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrintReportComponent]
    });
    fixture = TestBed.createComponent(PrintReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
