import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Environtment } from 'src/app/environtment';

@Injectable({
  providedIn: 'root'
})
export class MasterServiceService {


  constructor(private HttpClient: HttpClient,) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // Area
  GetArea():Observable<any> {
    return this.HttpClient.get(Environtment.baseUrl + '/area');
  }
  ShowArea(id: any) {
    return this.HttpClient.get(Environtment.baseUrl + '/area/' + id);
  }
  CreateArea(data: any) {
    return this.HttpClient.post(Environtment.baseUrl + '/area', data);
  }
  UpdateArea(id: any, data: any) {
    return this.HttpClient.put(Environtment.baseUrl + '/area/' + id, data);
  }
  DeleteArea(id: any) {
    return this.HttpClient.delete(Environtment.baseUrl + '/area/' + id);
  }

  // Role
  GetRole() {
    return this.HttpClient.get(Environtment.baseUrl + '/role');
  }
  ShowRole(id: any) {
    return this.HttpClient.get(Environtment.baseUrl + '/role/' + id);
  }
  CreateRole(data: any) {
    return this.HttpClient.post(Environtment.baseUrl + '/role', data);
  }
  UpdateRole(id: any, data: any) {
    return this.HttpClient.put(Environtment.baseUrl + '/role/' + id, data);
  }
  DeleteRole(id: any) {
    return this.HttpClient.delete(Environtment.baseUrl + '/role/' + id);
  }

  // User
  GetUser() {
    return this.HttpClient.get(Environtment.baseUrl + '/user');
  }
  ShowUser(id: any) {
    return this.HttpClient.get(Environtment.baseUrl + '/user/' + id);
  }
  CreateUser(data: any) {
    return this.HttpClient.post(Environtment.baseUrl + '/user', data);
  }
  UpdateUser(id: any, data: any) {
    return this.HttpClient.put(Environtment.baseUrl + '/user/' + id, data);
  }
  DeleteUser(id: any) {
    return this.HttpClient.delete(Environtment.baseUrl + '/user/' + id);
  }
  GetListNik() {
    return this.HttpClient.get(Environtment.baseUrl + '/user/list-nik');
  }
  ShowByNik(nik: any) {
    return this.HttpClient.get(Environtment.baseUrl + '/user/nik/' + nik);
  }
  ShowUserByNik(nik: any) {
    return this.HttpClient.get(Environtment.baseUrl + '/user/user/' + nik);
  }

  // data cleaning
  GetDataCleaning():Observable<any>  {
    return this.HttpClient.get(Environtment.baseUrl + '/data-cleaning');
  }
  ShowDataCleaning(id: any) {
    return this.HttpClient.get(Environtment.baseUrl + '/data-cleaning/' + id);
  }
  CreateDataCleaning(data: any) {
    return this.HttpClient.post(Environtment.baseUrl + '/data-cleaning', data);
  }
  UpdateDataCleaning(id: any, data: any) {
    return this.HttpClient.put(Environtment.baseUrl + '/data-cleaning/' + id, data);
  }
  DeleteDataCleaning(id: any) {
    return this.HttpClient.delete(Environtment.baseUrl + '/data-cleaning/' + id);
  }

  //checklist
  GetChecklist() {
    return this.HttpClient.get(Environtment.baseUrl + '/checklist');
  }
  GetChecklistWeekly() {
    return this.HttpClient.get(Environtment.baseUrl + '/checklist/last/week');
  }
  GetChecklistMonthly() {
    return this.HttpClient.get(Environtment.baseUrl + '/checklist/last/month');
  }
  GetChecklistReportMonthly(month:number,year:number,area:string):Observable<any> {
    return this.HttpClient.get(Environtment.baseUrl + '/checklist/report/monthly/'+month+'/'+year+'/'+area);
  }
  ShowChecklist(id: any) {   
    return this.HttpClient.get(Environtment.baseUrl + '/checklist/' + id);
  }
  CreateChecklist(data: any) {    
    return this.HttpClient.post(Environtment.baseUrl + '/checklist', data);
  }
  UpdateChecklist(id: any, data: any) {
    return this.HttpClient.put(Environtment.baseUrl + '/checklist/' + id, data);
  }
  DeleteChecklist(id: any) {
    return this.HttpClient.delete(Environtment.baseUrl + '/checklist/' + id);
  } 

  //count checklist
  getDailyChecklistCount() {
    return this.HttpClient.get(Environtment.baseUrl + '/count/daily-checklist-count'); 
  }
  getWeeklyChecklistCount() {
    return this.HttpClient.get(Environtment.baseUrl + '/count/weekly-checklist-count'); 
  }
  getMonthlyChecklistCount() {
    return this.HttpClient.get(Environtment.baseUrl + '/count/monthly-checklist-count'); 
  }

}
