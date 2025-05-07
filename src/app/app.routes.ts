import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuard } from './core/guards/auth.guard';
import { PathEnums } from './core/app-enums/app.enums';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: PathEnums.DASHBOARD, component: DashboardComponent, canActivate: [AuthGuard] },
];
