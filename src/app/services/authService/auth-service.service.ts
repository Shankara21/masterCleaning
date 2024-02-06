import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { Environtment } from 'src/app/environtment';
import { MasterServiceService } from '../masterService/master-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  constructor(private HttpClient: HttpClient, private cookieService: CookieService, @Inject(DOCUMENT) private document: Document,private masterService : MasterServiceService) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  // Login
  Login(data: any) {
    return this.HttpClient.post(Environtment.baseUrl + '/auth/login', data);
  }
  LoginOs(data: any) {
    return this.HttpClient.post(Environtment.baseUrl + '/auth/loginOs', data);
  }

  // SetToken
  SetToken(token: string) {
    this.cookieService.delete('MasterCleaningToken');
    this.cookieService.set('MasterCleaningToken', token, 8 / 24);
  }
  SetUser(user:any){
    localStorage.setItem('UserData', JSON.stringify(user))
  }
  GetUser(){
    const user = window.localStorage.getItem('UserData')
    if(user){
      return JSON.parse(user)
    }
    return {}
  }
  // GetToken
  GetToken() {
    return this.cookieService.get('MasterCleaningToken');
  }

  // Refresh Token
  RefreshToken() {
    this.cookieService.set('MasterCleaningToken', this.GetToken(), 4 / 24);
  }

  // DeleteToken
  DeleteToken() {
    localStorage.clear()
    this.cookieService.delete('MasterCleaningToken');
  }

  // GetPayload
  GetPayload() {
    const token = this.GetToken();
    if (token) {
      const payload = token.split('.')[1];
      return JSON.parse(atob(payload));
    } else {
      return null;
    }
  }

  // GetUserName
  GetUserName() {
    const payload = this.GetPayload();
    if (payload) {
      return payload.name;
    } else {
      return '';
    }
  }
  
}
