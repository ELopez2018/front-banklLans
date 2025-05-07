import { LoanStatus } from "../enums/loans.enums";

export interface Loan {
  id?: number; 
  userId: number;
  amount: number;
  term: number;
  status: LoanStatus;
  requestDate?: string;
}
