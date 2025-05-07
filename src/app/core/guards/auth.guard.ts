import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';  // Importar CookieService
import { CookiesEnums } from '../app-enums/app.enums';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  jwtHelper = new JwtHelperService()
  constructor(private cookieService: CookieService, private router: Router, ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    // Lógica para verificar si el token está presente
    const token = this.cookieService.get(CookiesEnums.AUTH);
   const isTokenExpired = this.jwtHelper.isTokenExpired(token)
   console.log(isTokenExpired);
    if (!isTokenExpired) {
      // Si el token existe, permitimos el acceso
      return true;
    } else {
      // Si no existe el token, redirigimos al login
      this.router.navigate(['/']);
      return false;
    }
  }
}
