import { MasterServiceService } from './../../../services/masterService/master-service.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-area',
  templateUrl: './edit-area.component.html',
  styleUrls: ['./edit-area.component.css']
})
export class EditAreaComponent implements OnInit {
  constructor(private router: Router, private MasterServiceService: MasterServiceService) { }

  params = this.router.url.split('/');

  ngOnInit() {
    this.MasterServiceService.ShowArea(this.params[2]).subscribe((res: any) => {
      this.form.setValue({
        name: res.name,
      })
    })
  }
  form = new FormGroup({
    name: new FormControl(''),
  });
  onSubmit() {
    this.MasterServiceService.UpdateArea(this.params[2], this.form.value).subscribe((res: any) => {
      this.router.navigate(['/area']);
    });
  }
}
