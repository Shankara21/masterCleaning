import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { forkJoin } from 'rxjs';
import { Subscription, timer } from 'rxjs'; // Import necessary modules
import { map, share } from 'rxjs/operators';
import { AuthServiceService } from 'src/app/services/authService/auth-service.service';
import { MasterServiceService } from 'src/app/services/masterService/master-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  {
  alert: boolean = false;
  alertMsg: string = "";
  rxTime = new Date();
  subscription: Subscription | undefined;

  dateFilter = new Date()
  dateArray: any[] = [].constructor(this.lastdayOfMonth(this.dateFilter.getFullYear(),this.dateFilter.getMonth()))
  monthYearFilter: any = this.dateFilter.toISOString().slice(0,7)
  areaFilter: any = 'General'

  dataCleanings:any[] = []
  dataCleaningFilter:any[] = []
  dataReportMonthlys:any[] = []
  dataAreas:any[] = []
  dailyChecklistCount: number = 0;
  weeklyChecklistCount: number = 0;
  monthlyChecklistCount: number = 0;


  constructor(private masterService: MasterServiceService, private authService: AuthServiceService) { }
  ngOnInit() {
    console.log(this.authService.GetPayload());
    forkJoin(
      this.masterService.GetChecklistReportMonthly(this.dateFilter.getMonth()+1,this.dateFilter.getFullYear(),this.areaFilter),
      this.masterService.GetDataCleaning(),
      this.masterService.GetArea(),      
      ).subscribe(res=>{
      this.dataReportMonthlys = res[0];
      this.dataCleanings = res[1];
      this.dataAreas = res[2];
      this.dataCleaningFilter = this.dataCleanings
      
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
      
      //daily count
      this.masterService.getDailyChecklistCount().subscribe(
        (data: any) => {
          this.dailyChecklistCount = data[0].daily_count;
        },
        (error) => {
          console.error('Error fetching data:', error);          
        }
      );

      //weekly count
      this.masterService.getWeeklyChecklistCount().subscribe(
        (data: any) => {
          console.log('Weekly Checklist Data:', data);
          this.weeklyChecklistCount = data[0].weekly_count;
          console.log('Weekly Checklist Count:', this.weeklyChecklistCount);
        },
        (error) => {
          console.error('Error fetching data:', error);          
        }
      );

      // monthly count
      this.masterService.getMonthlyChecklistCount().subscribe(
        (data: any)=> {
          console.log('Monthly Checklist Data:', data);
          this.monthlyChecklistCount = data[0].monthly_count;
          console.log('Monthly Checklist Count:', this.monthlyChecklistCount);
        },
        (error) => {
          console.error('Error fetching data:', error);          
        }
      );

  }
  
  changeArea(){
    this.dataCleaningFilter = this.filterArea()
  }
  filterArea(){
    return this.dataCleanings.filter(data=>data.mst_area.name == this.areaFilter)
  }

  changeFilter(){
    this.dateFilter = new Date(this.monthYearFilter)
    this.dateArray = [].constructor(this.lastdayOfMonth(this.dateFilter.getFullYear(),this.dateFilter.getMonth()))
    this.masterService.GetChecklistReportMonthly(this.dateFilter.getMonth()+1,this.dateFilter.getFullYear(),this.areaFilter).subscribe(data=> {
      this.dataReportMonthlys = data
    })
    
  }
  changeAreaFilter(){
    this.masterService.GetChecklistReportMonthly(this.dateFilter.getMonth()+1,this.dateFilter.getFullYear(),this.areaFilter).subscribe(data=> {
      this.dataReportMonthlys = data
    })
    this.dataCleaningFilter = this.filterArea()
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

   ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
     }
   }
}
