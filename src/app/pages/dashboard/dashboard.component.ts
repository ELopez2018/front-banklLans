import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { CookiesEnums } from '../../core/app-enums/app.enums';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-dashboard',
  imports: [ CommonModule, ReactiveFormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  standalone: true
})
export class DashboardComponent implements OnInit {
  loanForm!: FormGroup;
  loanRequests: any[] = [];
  isAdmin: boolean = false;  // Simula si el usuario es administrador
 jwtHelper = new JwtHelperService()
  constructor(private fb: FormBuilder, private cookieService:CookieService) { }

  ngOnInit(): void {
    // Inicializar formulario
    this.loanForm = this.fb.group({
      name: ['', [Validators.required]],
      amount: ['', [Validators.required, Validators.min(1)]],
      duration: ['', [Validators.required, Validators.min(1)]]
    });

    // Cargar las solicitudes previas desde el localStorage
    const storedRequests = localStorage.getItem('loanRequests');
    if (storedRequests) {
      this.loanRequests = JSON.parse(storedRequests);
    }


    let  token: any = this.cookieService.get(CookiesEnums.AUTH);
    console.log(token);
    // Simular un administrador (esto se puede verificar con un token JWT real)
     token = this.jwtHelper.decodeToken(token);
     console.log(token);
    if (token) {
      if (token.role === 'admin') {
        this.isAdmin = true;
      }
    }
  }

  onSubmit(): void {
    if (this.loanForm.valid) {
      const newLoan = {
        ...this.loanForm.value,
        status: 'Pendiente'
      };

      this.loanRequests.push(newLoan);
      localStorage.setItem('loanRequests', JSON.stringify(this.loanRequests));
      alert('Solicitud enviada con éxito');

      // Limpiar el formulario
      this.loanForm.reset();
    }
  }

  changeLoanStatus(loan: any, newStatus: string): void {
    const loanIndex = this.loanRequests.findIndex(l => l === loan);
    if (loanIndex !== -1) {
      this.loanRequests[loanIndex].status = newStatus;
      localStorage.setItem('loanRequests', JSON.stringify(this.loanRequests));
      alert(`Préstamo marcado como ${newStatus}`);
    }
  }
}
