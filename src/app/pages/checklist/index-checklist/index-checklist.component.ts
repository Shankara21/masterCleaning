import { MasterServiceService } from './../../../services/masterService/master-service.service';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-index-checklist',
  templateUrl: './index-checklist.component.html',
  styleUrls: ['./index-checklist.component.css']
})
export class IndexChecklistComponent implements OnInit {
  constructor(private MasterServiceService: MasterServiceService, private spinner: NgxSpinnerService) { }

  datas: any;

  search: any;

  dataModal: any;

  alert: boolean = false;
  alertMsg: string = "";

  config = {
    id: 'custom',
    itemsPerPage: 10,
    currentPage: 1,
  };

  ngOnInit() {
    this.spinner.show();
    this.MasterServiceService.GetChecklist().subscribe((res: any) => {
      this.datas = res;
      this.datas.forEach((element: any) => {
        element.index = this.datas.indexOf(element) + 1;
      })
    }, (err: any) => { }, () => { this.spinner.hide(); })
  }

  getDataModal(id: any) {
    this.MasterServiceService.ShowChecklist(id).subscribe((res: any) => {
      this.dataModal = res;
    })
  }

  deleteData(id: any) {
    this.MasterServiceService.DeleteChecklist(id).subscribe((res: any) => {
      this.alert = true;
      this.alertMsg = "Data berhasil dihapus";
      setTimeout(() => {
        this.alert = false;
        this.alertMsg = "";
      }, 3000);
      this.ngOnInit();
    })
  }

}
