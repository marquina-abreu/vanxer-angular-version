//ESTO ES EL FICHERO DE RUTAS PARA EL transportista

import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//componentes del transportista

import { HomeTransComponent } from './home/home-trans.component';

//guard de admin.. para saber si el role es admin y permitir navegar en estas rutas
import { TransporteGuard } from '../services/transporte.guard'; // esto tambien debe ir en el module, osea en transporte.module

//Ruteo

const clienteRoutes: Routes = [
	{
		path: 'transportista',
		component: HomeTransComponent,
		canActivate: [TransporteGuard],// <==aqui meto el guard, si se cumple, deja pasar a ver las demas rutas
		children: [
			{ path: '', redirectTo: 'transportista', pathMatch:'full' }
	
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

export class TransporteRoutingModule {}