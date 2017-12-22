import { Routes, RouterModule } from '@angular/router';

import { LoginRegistrationRoutes } from './loginRegistration/loginRegistration.routes';

const appRoutes: Routes = [
    ...LoginRegistrationRoutes
];

export const appRoutingProviders: any[] = [
];

export const routing = RouterModule.forRoot(appRoutes);
