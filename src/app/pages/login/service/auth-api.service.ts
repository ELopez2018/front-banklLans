import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  private server =  environment.SERVER
  constructor(private http: HttpClient) { }
  public login$(credentials: any): Observable<any> {
    const url = `${this.server}/api/auth/login`
    return this.http
      .post<any>(url, credentials)
  }
}
