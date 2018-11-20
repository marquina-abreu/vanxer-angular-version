// ESTO ES COMO DECIR EL ' app.module.ts q esta en la raiz de la carpeta app' , pero este module es para admin, por eso se llama admin.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';//para los formularios
//Http
import { HttpModule } from "@angular/http";
import { ClienteRoutingModule } from './cliente-routing.module';

//componentes
import { MainComponent } from './components/main.component';
//services
import { UserService } from '../services/user.service';
//guards 
import { ClienteGuard } from '../services/cliente.guard';




@NgModule({
	declarations: [
		MainComponent
	],
	imports:[
		CommonModule,
		FormsModule,
		HttpModule,
		ClienteRoutingModule
	],
	exports:[
		MainComponent
		// ListComponent,
		// AddComponent,
		// EditComponent
	],
	providers:[ClienteGuard, UserService]
})

export class ClienteModule { }