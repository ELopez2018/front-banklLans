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

  public approveLoan$(loanId: number): Observable<any> {
    const url = `${this.server}/api/loans/approve/${loanId}`
    return this.http
      .post<any>(url, {} )
  }

  public rejectLoan$(loanId: number): Observable<any> {
    const url = `${this.server}/api/loans//reject/${loanId}`
    return this.http
      .post<any>(url, {})
  }

  public getLoanByStatus$(loan: Loan): Observable<any> {
    const url = `${this.server}/api/loans/apply`
    return this.http
      .post<any>(url, loan)
  }

  public getLoanById$(loan: Loan): Observable<any> {
    const url = `${this.server}/api/loans/apply`
    return this.http
      .post<any>(url, loan)
  }

  public getLoansByUser$(loan: Loan): Observable<any> {
    const url = `${this.server}/api/loans/apply`
    return this.http
      .post<any>(url, loan)
  }

  public updateLoanStatus$(loan: Loan): Observable<any> {
    const url = `${this.server}/api/loans/apply`
    return this.http
      .post<any>(url, loan)
  }
}
