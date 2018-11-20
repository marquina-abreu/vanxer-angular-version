import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from './user.service';

@Injectable()

export class TransporteGuard implements CanActivate {

	constructor(private _router: Router, private _userService: UserService){

	}

	canActivate(){ // este metodo es de angular, para hacer el chequeo de role
		let identity =this._userService.getIdentity();

		if (identity && identity.role == "transportista") {
			return true;
		}else{
			this._router.navigate(['/home']);
			return false;	
		}

	}
}