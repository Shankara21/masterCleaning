import { Router } from '@angular/router';
import { MasterServiceService } from './../../../services/masterService/master-service.service';
import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-create-checklist',
  templateUrl: './create-checklist.component.html',
  styleUrls: ['./create-checklist.component.css']
})
export class CreateChecklistComponent implements OnInit {

  constructor(private MasterServiceService: MasterServiceService, private Router: Router, private spinner: NgxSpinnerService) { }

  users: any;
  areas: any;

  alert: boolean = false;
  alertMsg: string = "";

  form = new FormGroup({
    userId: new FormControl('', [Validators.required]),
    areaId: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
  })

  ngOnInit() {
    this.spinner.show();
    forkJoin(
      this.MasterServiceService.GetUser(),
      this.MasterServiceService.GetArea()
    ).subscribe((res: any) => {
      this.users = res[0];
      this.areas = res[1];
    }, (err: any) => { }, () => { this.spinner.hide() });
  }

  submit() {

  }
}
