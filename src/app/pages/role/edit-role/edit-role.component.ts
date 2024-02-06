import { MasterServiceService } from './../../../services/masterService/master-service.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-role',
  templateUrl: './edit-role.component.html',
  styleUrls: ['./edit-role.component.css']
})
export class EditRoleComponent implements OnInit {
  constructor(private router: Router, private MasterServiceService: MasterServiceService) { }

  params = this.router.url.split('/');

  ngOnInit() {
    this.MasterServiceService.ShowRole(this.params[2]).subscribe((res: any) => {
      this.form.setValue({
        name: res.name,
      })
    })
  }
  form = new FormGroup({
    name: new FormControl(''),
  });
  onSubmit() {
    this.MasterServiceService.UpdateRole(this.params[2], this.form.value).subscribe((res: any) => {
      this.router.navigate(['/role']);
    });
  }
}
