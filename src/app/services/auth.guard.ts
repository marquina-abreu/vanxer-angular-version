import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from './user.service';

@Injectable()

export class AuthGuard implements CanActivate {

	constructor(private _router: Router, private _userService: UserService){

	}
	//aqui se chequeara si hay identity, si hay entonces no permitir q se dirijan a las rutas de no auth osea la rutas de visitante
	canActivate(){ // este metodo es de angular, para hacer el chequeo de role
		let identity =this._userService.getIdentity();

		if (!identity) {
			return true;
		}else{
			if (identity && identity.role == "cliente") {
				this._router.navigate(['/cliente/']);
				return false;
			}
			if (identity && identity.role == "transportista") {
				this._router.navigate(['/transportista/']);
				return false;
			}
			
		}

	}
}