import { NgxSpinnerService } from 'ngx-spinner';
import { MasterServiceService } from './../../../services/masterService/master-service.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor(private MasterServiceService: MasterServiceService, private router: Router, private spinner: NgxSpinnerService) { }
  listUsers: any;
  roles: any;
  selectedNik: any;

  alert: boolean = false;
  alertMsg: string = "";

  form = new FormGroup({
    nik: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    roleId: new FormControl('', [Validators.required]),
  })
  ngOnInit() {
    this.spinner.show()
    this.MasterServiceService.GetRole().subscribe((res: any) => {
      this.roles = res;
    })
    this.MasterServiceService.GetListNik().subscribe((res: any) => {
      this.listUsers = res;
    }, (err: any) => { }, () => { this.spinner.hide() });
  }

  onChangeNik(e: any) {
    this.MasterServiceService.ShowByNik(e.target.value).subscribe((res: any) => {
      this.form.patchValue({
        nik: res[0].lg_nik,
        name: res[0].lg_name
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
      this.MasterServiceService.CreateUser(this.form.value).subscribe((res: any) => {
        this.router.navigate(['/user']);
      });
    }
  }
}
