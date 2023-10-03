import { MasterServiceService } from './../../../services/masterService/master-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-area',
  templateUrl: './index-area.component.html',
  styleUrls: ['./index-area.component.css']
})
export class IndexAreaComponent implements OnInit {

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
    this.MasterServiceService.GetArea().subscribe((res: any) => {
      this.datas = res;
      this.datas.forEach((element: any) => {
        element.index = this.datas.indexOf(element) + 1;
      })
    })
  }

  getDataModal(id: any) {
    this.MasterServiceService.ShowArea(id).subscribe((res: any) => {
      this.dataModal = res;
    })
  }

  deleteData(id: any) {
    this.MasterServiceService.DeleteArea(id).subscribe((res: any) => {
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
