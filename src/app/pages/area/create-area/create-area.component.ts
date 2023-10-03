import { MasterServiceService } from './../../../services/masterService/master-service.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-area',
  templateUrl: './create-area.component.html',
  styleUrls: ['./create-area.component.css']
})
export class CreateAreaComponent implements OnInit {

  constructor(private router: Router, private MasterServiceService: MasterServiceService) { }

  ngOnInit() {

  }
  form = new FormGroup({
    name: new FormControl(''),
  });
  onSubmit() {
    this.MasterServiceService.CreateArea(this.form.value).subscribe((res: any) => {
      this.router.navigate(['/area']);
    })
  }

}
