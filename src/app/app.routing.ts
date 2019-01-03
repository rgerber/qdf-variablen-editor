import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent, AuthGuard } from './login';
import { RegisterComponent } from './register';
import { VerwaltungComponent } from './verwaltung/verwaltung.component';


const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'verwaltung', component: VerwaltungComponent},
    { path: 'variablen', loadChildren: './variablen/variablen.module#VariablenModule'},
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },    
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);