import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routing } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { MaterialModule } from './material.module';
import { MomentModule } from 'angular2-moment';

import { AppComponent } from './app.component';
//component de vista
import { HomeComponent } from './home/home.component';
import { SigninScreenComponent } from './login/signin-screen.component';
//moddals
 import { DialogErrorSigninComponent } from './login/signin-screen.component';
import { ServiciosScreenComponent } from './servicios/servicios-screen.component';
//registro de transportis o cliente
import { RegisterCliComponent } from './register/register-cliente.component';
import { RegisterTraComponent } from './register/register-transportista.component';

//solicitud de clientes visitantes
import { SolicitudClientComponent } from './servicios/solicitud-cli.component';

import 'hammerjs';

//modulos
import { TransporteModule } from './transportista/transporte.module';
import { ClienteModule } from './cliente/cliente.module'; 
//services
import { UserService } from './services/user.service';
//guards
import { AuthGuard } from './services/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SigninScreenComponent,
    ServiciosScreenComponent,
    SolicitudClientComponent,
    RegisterCliComponent,
    RegisterTraComponent,
    DialogErrorSigninComponent
  ],

  entryComponents:[ //esto es para los modals.. 
    DialogErrorSigninComponent //esta clase se encuentra en el componente de signin.. login
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    MomentModule,
    ReactiveFormsModule,
    Routing,
    HttpClientModule,
    HttpModule,
    TransporteModule,
    ClienteModule

  ],
  providers: [AuthGuard,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
