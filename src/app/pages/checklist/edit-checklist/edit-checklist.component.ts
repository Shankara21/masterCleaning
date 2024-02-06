import { Component,OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MasterServiceService } from 'src/app/services/masterService/master-service.service';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-edit-checklist',
  templateUrl: './edit-checklist.component.html',
  styleUrls: ['./edit-checklist.component.css']
})
export class EditChecklistComponent {
  constructor(private MasterServiceService: MasterServiceService, private router: Router, private spinner: NgxSpinnerService,private actRoute:ActivatedRoute) { }

  params = this.actRoute.snapshot.params['id']

  users: any;
  areas: any;
  dataCleaning: any[] = [];
  dataChecklist: any;
  checklistLastWeek: any;
  checklistLastMonth: any;
  form!:FormGroup


  alert: boolean = false;
  alertMsg: string = "";

  initialForm(){
    console.log(this.dataChecklist);
    
    this.form = new FormGroup({
    userId: new FormControl(this.dataChecklist.userId, [Validators.required]),
    areaId: new FormControl(this.dataChecklist.areaId, [Validators.required]),
    checklistDetails: new FormArray([]),
    date: new FormControl(this.dataChecklist.date, [Validators.required]),
      
  })
  }
  

  checklistDetailPush(cleaning:number,status:Boolean){    
    this.form.value['checklistDetails']
    let items = this.form.get('checklistDetails') as FormArray
    items.push(new FormGroup({
      dataCleaningId: new FormControl(cleaning),
      status: new FormControl(status),
    }) )
    
  }

  ngOnInit() {
    this.spinner.show();
    forkJoin(
      this.MasterServiceService.GetUser(),
      this.MasterServiceService.GetArea(),   
      this.MasterServiceService.GetDataCleaning(),
      this.MasterServiceService.GetChecklistWeekly(), 
      this.MasterServiceService.ShowChecklist(this.params)    
    ).subscribe((res: any) => {
      this.users = res[0];
      this.areas = res[1];     
      this.dataCleaning = res[2];    
      this.checklistLastWeek = res[3];
      this.dataChecklist = res[4]
       this.initialForm()
       this.dataChecklist.tr_checklistdetails.forEach((element:any) => {
        this.checklistDetailPush(element.mstDataCleaningId,element.status)
       });
      //  this.form.value['userId']= this.dataChecklist.userId
      //  this.form.value['areaId']= this.dataChecklist.areaId
       console.log(this.form.value);
       
       
       
       
    }, (err: any) => { }, () => { this.spinner.hide() });
    // console.log(this.form);
    const startDate = new Date('2023-10-22'); // Tanggal awal rentang minggu
    const endDate = new Date('2023-10-28');   // Tanggal akhir rentang minggu
    const currentDate = new Date();            // Tanggal saat ini

    if (currentDate >= startDate && currentDate <= endDate) {
      console.log('Tanggal berada dalam rentang minggu ini.');
      // Di sini Anda bisa menambahkan log data lainnya yang ingin Anda tampilkan.
    } else {
      console.log('Tanggal berada di luar rentang minggu ini.');
    }
  }

  get filterDataCleaning(){

    return this.dataCleaning;
  }

  submit() {
    // console.log(this.form.value);
    // console.log(this.form.value.tr_checklistdetail[0].status | undefined);
    if (this.form.invalid) {
      this.alert = true;
      this.alertMsg = "Lengkapi form terlebih dahulu";
      setTimeout(() => {
        this.alert = false;
        this.alertMsg = "";
      }, 3000);
      return
    } else {

      this.MasterServiceService.UpdateChecklist(this.params,this.form.value).subscribe((res: any) => {
        this.alert = true;
      this.alertMsg = "Update Checklist Success!";
      setTimeout(() => {
        this.alert = false;
        this.alertMsg = "";
      }, 3000);
        this.router.navigate(['/checklist']);
      });
    }
    
  }
}
