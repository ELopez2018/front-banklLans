import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';  // Importar CookieService
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private cookieService: CookieService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    // Lógica para verificar si el token está presente
    const token = this.cookieService.get('authToken');

    if (token) {
      // Si el token existe, permitimos el acceso
      return true;
    } else {
      // Si no existe el token, redirigimos al login
      this.router.navigate(['/']);
      return false;
    }
  }
}
