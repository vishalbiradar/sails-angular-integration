import { Routes } from '@angular/router';
import { LoginRegistraionComponent } from './loginRegistraion.component';

export const LoginRegistrationRoutes: Routes = [
    { path: 'login',  component: LoginRegistraionComponent },
    { path: '',  redirectTo: 'login', pathMatch: 'full' }
];
