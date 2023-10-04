import { MasterServiceService } from './../../../services/masterService/master-service.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-data-cleaning',
  templateUrl: './edit-data-cleaning.component.html',
  styleUrls: ['./edit-data-cleaning.component.css']
})
export class EditDataCleaningComponent implements OnInit {
  constructor(private MasterServiceService: MasterServiceService, private router: Router) { }
  areas: any;

  form = new FormGroup({
    areaId: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    frequency: new FormControl('', [Validators.required]),
    implementer: new FormControl('', [Validators.required]),
    method: new FormControl('', [Validators.required]),
    sanitaryEquipment: new FormControl('', [Validators.required]),
    procedure: new FormControl('', [Validators.required]),
    sanitaryMaterial: new FormControl('', [Validators.required]),
    controller: new FormControl('', [Validators.required]),
  });

  alert: boolean = false;
  alertMsg: string = "";

  ngOnInit() {
    this.MasterServiceService.GetArea().subscribe((res: any) => {
      this.areas = res;
    })
    this.MasterServiceService.ShowDataCleaning(this.router.url.split('/')[2]).subscribe((res: any) => {
      this.form.patchValue({
        areaId: res.areaId,
        description: res.description,
        frequency: res.frequency,
        implementer: res.implementer,
        method: res.method,
        sanitaryEquipment: res.sanitaryEquipment,
        procedure: res.procedure,
        sanitaryMaterial: res.sanitaryMaterial,
        controller: res.controller,
      })
    })
  }

  submit() {
    if (this.form.invalid) {
      this.alert = true;
      this.alertMsg = "Lengkapi form terlebih dahulu";
      setTimeout(() => {
        this.alert = false;
        this.alertMsg = "";
      }, 3000);
    } else {
      this.MasterServiceService.UpdateDataCleaning(this.router.url.split('/')[2], this.form.value).subscribe((res: any) => {
        this.router.navigate(['/cleaning-data']);
      });
    }
  }
}
