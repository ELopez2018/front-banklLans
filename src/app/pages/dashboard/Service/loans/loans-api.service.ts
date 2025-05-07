import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { Loan } from '../../core/interfaces/loan.interface';

@Injectable({
  providedIn: 'root'
})
export class LoansApiService {
  private server = environment.SERVER
  constructor(private http: HttpClient) { }
  public applyForLoan$(loan: Loan): Observable<any> {
    const url = `${this.server}/api/loans/apply`
    return this.http
      .post<any>(url, loan)
  }
}
