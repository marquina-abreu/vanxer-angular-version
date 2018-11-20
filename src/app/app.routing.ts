import { Routes, RouterModule } from '@angular/router';

//componentes
import { HomeComponent } from './home/home.component';
import { SigninScreenComponent } from './login/signin-screen.component';
import { ServiciosScreenComponent } from './servicios/servicios-screen.component';

import { RegisterCliComponent } from './register/register-cliente.component';
import { RegisterTraComponent } from './register/register-transportista.component';
import { SolicitudClientComponent } from './servicios/solicitud-cli.component';
import { AuthGuard } from './services/auth.guard';//chequeo de no dejar ver las rutas de y pages de los visitantes a los q ya estan logueados


const APP_ROUTES: Routes= [

	{path:'home', component: HomeComponent, canActivate: [AuthGuard], pathMatch:'full'},
	{path: '', redirectTo: 'home', canActivate:[AuthGuard], pathMatch:'full'},
	{path:'signin', component: SigninScreenComponent, canActivate:[AuthGuard]},
	{path:'servicios', component: ServiciosScreenComponent, canActivate:[AuthGuard]},
	{path:'solicitud/clientes', component: SolicitudClientComponent, canActivate:[AuthGuard]},
	{path:'register/transportista', component: RegisterTraComponent, canActivate:[AuthGuard]}
	
];

export const Routing = RouterModule.forRoot(APP_ROUTES);