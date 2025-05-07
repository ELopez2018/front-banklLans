import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  private server = ""
  constructor(private http: HttpClient) { }
  public login$(credentials: any): Observable<any> {
    const url = `${this.server}/auth`
    return this.http
      .post<any>(url, credentials)
  }
}
