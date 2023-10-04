import { MasterServiceService } from './../../../services/masterService/master-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-data-cleaning',
  templateUrl: './index-data-cleaning.component.html',
  styleUrls: ['./index-data-cleaning.component.css']
})
export class IndexDataCleaningComponent implements OnInit {

  constructor(private MasterServiceService: MasterServiceService) { }

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
    this.MasterServiceService.GetDataCleaning().subscribe((res: any) => {
      this.datas = res;
      this.datas.forEach((element: any) => {
        element.index = this.datas.indexOf(element) + 1;
      })
    })
  }

  getDataModal(id: any) {
    this.MasterServiceService.ShowDataCleaning(id).subscribe((res: any) => {
      this.dataModal = res;
    })
  }

  deleteData(id: any) {
    this.MasterServiceService.DeleteDataCleaning(id).subscribe((res: any) => {
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
