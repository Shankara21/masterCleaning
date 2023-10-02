import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { Environtment } from 'src/app/environtment';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  constructor(private HttpClient: HttpClient, private cookieService: CookieService, @Inject(DOCUMENT) private document: Document) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  // Login
  Login(data: any) {
    return this.HttpClient.post(Environtment.baseUrl + '/auth/login', data);
  }

  // SetToken
  SetToken(token: string) {
    this.cookieService.delete('MasterCleaningToken');
    this.cookieService.set('MasterCleaningToken', token, 8 / 24);
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
}
