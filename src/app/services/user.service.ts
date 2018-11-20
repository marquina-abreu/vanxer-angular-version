import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()


export class UserService {

	public url: String;

	public identity;

	public token;


	constructor(private http : Http){
		this.url = "http://localhost:5100/api/auth/";
	}

	login(user_to_login, gettoken= null){
		if (gettoken) {
			user_to_login.gettoken= gettoken;
		}
		let parametros= JSON.stringify(user_to_login);
		let headers = new Headers({
			'Content-Type':'application/json'})

		return this.http.post(this.url+'login',parametros,{headers:headers})
			.pipe(map(res=>
				res.json()
				));

	}

	getIdentity(){
		let identity= JSON.parse(localStorage.getItem('identity')); // traerme los datos q estan guardado en el navegador, cuando se logeo dicho usuario
		if (identity!="undefined") {
			this.identity = identity;
		}else{
			this.identity= null;
		}
		return this.identity;
	}

	getToken(){
		let token = localStorage.getItem('Token');

		if (token!="undefined") {
			this.token = token;
		}else{
			this.token= null;
		}

		return this.token;
	}
}