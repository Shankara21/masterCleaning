import { MasterServiceService } from './../../../services/masterService/master-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-role',
  templateUrl: './index-role.component.html',
  styleUrls: ['./index-role.component.css']
})
export class IndexRoleComponent implements OnInit {

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
    this.MasterServiceService.GetRole().subscribe((res: any) => {
      this.datas = res;
      this.datas.forEach((element: any) => {
        element.index = this.datas.indexOf(element) + 1;
      })
    })
  }
  getDataModal(id: any) {
    this.MasterServiceService.ShowRole(id).subscribe((res: any) => {
      this.dataModal = res;
    })
  }

  deleteData(id: any) {
    this.MasterServiceService.DeleteRole(id).subscribe((res: any) => {
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