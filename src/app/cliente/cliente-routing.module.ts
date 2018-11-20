//ESTO ES EL FICHERO DE RUTAS PARA EL CLIENTE

import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//componentes del admin

import { MainComponent } from './components/main.component';


//guard de admin.. para saber si el role es admin y permitir navegar en estas rutas
import { ClienteGuard } from '../services/cliente.guard'; // esto tambien debe ir en el module, osea en cliente.module

//Ruteo

const clienteRoutes: Routes = [
	{
		path: 'cliente',
		component: MainComponent,
		canActivate: [ClienteGuard],// <==aqui meto el guard, si se cumple, deja pasar a ver las demas rutas
		children: [
			{ path: '', redirectTo: 'cliente', pathMatch:'full' }
	
		]
	}

];


@NgModule({
	imports: [
		RouterModule.forChild(clienteRoutes)
	],
	exports: [
		RouterModule
	]
})

export class ClienteRoutingModule {}