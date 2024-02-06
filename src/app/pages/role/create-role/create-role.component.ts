import { MasterServiceService } from './../../../services/masterService/master-service.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-role',
  templateUrl: './create-role.component.html',
  styleUrls: ['./create-role.component.css']
})
export class CreateRoleComponent implements OnInit {

  constructor(private router: Router, private MasterServiceService: MasterServiceService) { }

  ngOnInit() {

  }
  form = new FormGroup({
    name: new FormControl(''),
  });
  onSubmit() {
    this.MasterServiceService.CreateRole(this.form.value).subscribe((res: any) => {
      this.router.navigate(['/role']);
    })
  }

}
