// ESTO ES COMO DECIR EL ' app.module.ts q esta en la raiz de la carpeta app' , pero este module es para admin, por eso se llama admin.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';//para los formularios
//Http
import { HttpModule } from "@angular/http";
import { TransporteRoutingModule } from './transporte-routing.module';

//componentes
import { HomeTransComponent } from './home/home-trans.component';
//services
import { UserService } from '../services/user.service';
//guards 
import { TransporteGuard } from '../services/transporte.guard';




@NgModule({
	declarations: [
		HomeTransComponent
	],
	imports:[
		CommonModule,
		FormsModule,
		HttpModule,
		TransporteRoutingModule
	],
	exports:[
		HomeTransComponent
		// ListComponent,
		// AddComponent,
		// EditComponent
	],
	providers:[TransporteGuard, UserService]
})

export class TransporteModule { }