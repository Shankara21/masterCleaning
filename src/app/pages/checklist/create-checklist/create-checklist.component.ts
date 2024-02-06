import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MasterServiceService } from './../../../services/masterService/master-service.service';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { forkJoin } from 'rxjs';
import { Moment } from 'moment';
import * as moment from 'moment'; // Import Moment.js

@Component({
  selector: 'app-create-checklist',
  templateUrl: './create-checklist.component.html',
  styleUrls: ['./create-checklist.component.css']
})
export class CreateChecklistComponent implements OnInit {
[x: string]: any;
openDatePicker: any;

  constructor(private MasterServiceService: MasterServiceService, private router: Router, private spinner: NgxSpinnerService) { }

  users: any;
  areas: any;
  dataCleaning: any[] = [];
  dataCleaningFilter: any[] = [];
  checklistLastWeek: any;
  checklistLastMonth: any;

  alert: boolean = false;
  alertMsg: string = "";

  form = new FormGroup({
    userId: new FormControl('', [Validators.required]),
    areaId: new FormControl('', [Validators.required]),
    date: new FormControl(new Date().toISOString().slice(0, 10), [Validators.required]),
    checklistDetails: new FormArray([]),
  })

  checklistDetailPush(cleaning: number) {
    this.form.value['checklistDetails']
    let items = this.form.get('checklistDetails') as FormArray
    items.push(new FormGroup({
      dataCleaningId: new FormControl(cleaning),
      status: new FormControl(false),
    }))
  }

  ngOnInit() {
    this.spinner.show();
    forkJoin(
      this.MasterServiceService.GetUser(),
      this.MasterServiceService.GetArea(),
      this.MasterServiceService.GetDataCleaning(),
      this.MasterServiceService.GetChecklistWeekly(),
      this.MasterServiceService.GetChecklistMonthly(),
    ).subscribe((res: any) => {
      this.users = res[0];
      this.areas = res[1];
      this.dataCleaning = res[2];
      this.checklistLastWeek = res[3];
      this.checklistLastMonth = res[4];
      this.dataCleaningFilter = this.dataCleaning

//       // Tambahkan periksaan rentang waktu mingguan dan bulanan di sini     
//       const startDateMonthly: Moment = moment().startOf('month');
//       const endDateMonthly: Moment = moment().endOf('month');
//       const newDate: Moment = moment();
//       const startOfWeek: Moment = newDate.clone().startOf('week');
//       const endOfWeek: Moment = newDate.clone().endOf('week');

//       // Check if the current date is within the current week
// if (newDate.isBetween(startOfWeek, endOfWeek)) {
//   console.log('The current date is within the current week.');

//   // Filter out data that has been checked last week
//   this.dataCleaning = this.dataCleaning.filter(data => {
//     return (
//       data.id != this.checklistLastWeek[0]?.mstDataCleaningId &&
//       data.id != this.checklistLastWeek[1]?.mstDataCleaningId
//     );
//   });
// } else {
//   console.log('The current date is outside the current week.');
// }
//       if (newDate.isBetween(startDateMonthly, endDateMonthly)) {      
//         console.log('Data Cleaning Before Filter:', this.dataCleaning);
        
//         // Filter out data that has been checked last month
//         this.dataCleaning = this.dataCleaning.filter(data => {
//           const shouldFilterOut = (
//             data.id === this.checklistLastMonth[0]?.mstDataCleaningId ||
//             data.id === this.checklistLastMonth[1]?.mstDataCleaningId
//           );
//           console.log(`Should Filter Out ${data.id}: ${shouldFilterOut}`);
//           return !shouldFilterOut;
//         });
//       } else {
//         console.log('Tanggal berada di luar rentang bulan ini.');
//       }
      

      console.log(this.users);
      console.log(this.dataCleaning);
      this.dataCleaning.forEach(element => {
        this.checklistDetailPush(element.id);
      });
      console.log(this.form.value);
    }, (err: any) => { }, () => { this.spinner.hide() });
  }
  
  changeArea(){
    console.log();
    this.form.value.areaId
    this.dataCleaningFilter = this.filterArea()
  }
  filterArea(){
    return this.dataCleaning.filter(data=>data.mst_area.id == this.form.value.areaId)
  }

  submit() {
    console.log(this.form.value);

    if (this.form.invalid) {
      this.alert = true;
      this.alertMsg = "Lengkapi form terlebih dahulu";
      setTimeout(() => {
        this.alert = false;
        this.alertMsg = "";
      }, 3000);
      return;
    } else {
      this.MasterServiceService.CreateChecklist(this.form.value).subscribe((res: any) => {
        this.router.navigate(['/checklist']);
      });
    }
  }
}
