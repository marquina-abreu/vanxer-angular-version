import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()

export class SolicitudClientService {

	public url: String;

	constructor(private http : HttpClient){
		this.url = "http://localhost:5100/api/solicitud/";
	}

	listarZonas(){
		return this.http.get(this.url+'lista-zonas')
			.pipe(map((data)=>{
				// console.log("res desde el servicio \n",data);

				return data;

			}))
	}

	listarTurnos(){
		return this.http.get(this.url+'lista-turnos')
		.pipe(map((data)=>{
			// console.log("res desde el servicio \n",data);

			return data;

		}))
		
	}

	listarTrans(zona,turno){


		return this.http.get(this.url+'lista-trans/'+zona+'/'+turno)
			.pipe(map((data)=>{
				return data;
			}))
	}

	findImageTra(trans){ // buscar nombre de la imagen por medio del id del transportista
		return this.http.get(this.url+'imagen-trans/'+trans);

	}



}