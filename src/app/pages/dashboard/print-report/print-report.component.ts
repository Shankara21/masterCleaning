import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, forkJoin, timer, map, share } from 'rxjs';
import { MasterServiceService } from 'src/app/services/masterService/master-service.service';

@Component({
  selector: 'app-print-report',
  templateUrl: './print-report.component.html',
  styleUrls: ['./print-report.component.css']
})
export class PrintReportComponent {
  alert: boolean = false;
  alertMsg: string = "";
  rxTime = new Date();
  subscription: Subscription | undefined;

  dateFilter = new Date()
  monthYearFilter: any = this.actRoute.snapshot.queryParamMap.get('date')
  dateArray: any[] = [].constructor(this.lastdayOfMonth(new Date(this.monthYearFilter).getFullYear(),new Date(this.monthYearFilter).getMonth()))
  areaFilter: any = this.actRoute.snapshot.queryParamMap.get('area')

  dataCleanings:any[] = []
  dataReportMonthlys:any[] = []


  constructor(private masterService: MasterServiceService, private actRoute:ActivatedRoute) {
    console.log(this.actRoute.snapshot.queryParamMap.get('date'));
  }
  ngOnInit() {
    
    
    forkJoin(this.masterService.GetChecklistReportMonthly(new Date(this.monthYearFilter).getMonth()+1,new Date(this.monthYearFilter).getFullYear(),this.areaFilter),this.masterService.GetDataCleaning()).subscribe(res=>{
      this.dataReportMonthlys = res[0];
      this.dataCleanings = res[1];
      this.dataCleanings = this.dataCleanings.filter(data=>data.mst_area.name == this.areaFilter)
      console.log(this.dataCleanings);
      
      
    })
    this.subscription = timer(0, 1000)
      .pipe(
        map(() => new Date()),
        share()
      )
      .subscribe(time => {
        // Update the rxTime with the new time
        this.rxTime = time;
      });
  }

  changeFilter(){
    this.dateFilter = new Date(this.monthYearFilter)
    this.ngOnInit()
    
  }

  getChecklistByDate(date:number){
    return this.dataReportMonthlys.filter(data=>new Date(data.date).getDate() == date)[0]
  }

  dateOfDate(dateFull:any){
    return new Date(dateFull).getDate()
  }

  lastdayOfMonth(y:any,m:any){
    return  new Date(y, m+1, 0).getDate();
    }
}
