import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { forkJoin } from 'rxjs';
import { MasterServiceService } from 'src/app/services/masterService/master-service.service';

@Component({
  selector: 'app-view-checklist',
  templateUrl: './view-checklist.component.html',
  styleUrls: ['./view-checklist.component.css']
})
export class ViewChecklistComponent {
  alert: boolean = false;
  alertMsg: string = "";

  dataChecklist: any

  params = this.actRoute.snapshot.params['id']

  constructor(private masterServiceService: MasterServiceService, private router: Router, private actRoute:ActivatedRoute, private spinner: NgxSpinnerService){

  }
  ngOnInit(): void {
    console.log(this.params);
    
    forkJoin(this.masterServiceService.ShowChecklist(this.params)).subscribe(data=>{
      console.log(data[0]);
      this.dataChecklist = data[0]
      
    },err=>{})
    
  }
}
