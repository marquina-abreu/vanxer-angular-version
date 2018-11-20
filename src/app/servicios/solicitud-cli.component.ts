import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Zona } from './zona.model';
import { Turno } from './turno.model';
import { Solicitud } from './solicitud.model';
import { Transportista } from '../transportista/transportista.model';
import { SolicitudClientService } from './solicitud.service'

// declare var $:any;

@Component({
	selector:'vanxer-solic-cli',
	templateUrl: './solicitud-cli.component.html',
	providers: [SolicitudClientService]
})

export class SolicitudClientComponent implements OnInit {

	public zonas:Zona[];

	public turnos: Turno[];

	public turnoSelected:string="0";

	public transportistas: Transportista[];

	public transportista_selec:string="0"; //transportista q selecciono, del select de trnasportistas

	public imagen_trans;
	
	public cargar_trans = false;

	public zonaSelected:string="0";

	public url;

	solicitudForm: FormGroup;

	constructor(private formBuilder: FormBuilder, private solicitudClientServ: SolicitudClientService){
			
			this.url = "http://localhost:5100/api/solicitud/";
	}

	refresZona(){
		//cada vez q se cambie el select de zona, volver turnoSelected y transportista_selec en 0 , porq asi cada vez q cambie de zona, hago q los demas select se cierren
		this.turnoSelected="0";
		this.transportista_selec="0";

	}
	



	ngOnInit(){

		this.solicitudForm = this.formBuilder.group({
			zonaSelected: ['0', Validators.required],
			turnoSelected: ['0', Validators.required],
			transportista_selec: ['0', Validators.required],
			email: ['', Validators.required],
			name: ['', [Validators.required, Validators.minLength(6)]],
			surname: ['', Validators.required],
			phone: ['', Validators.required],
			commentary: ['', Validators.required]

		});
		

		this.solicitudClientServ.listarZonas().subscribe((data:Zona[])=>{ 
			
			let zona;
			//debugger;
			if (!data) {
				alert('Error no hay zonas');
			}else{
				
				for ( const key in data) {
					zona = data[key];
					zona.key =key;
					this.zonas= zona;
					
				}
				// console.log(this.zonas);
				//limpiar modelo transportista por si ya hay uno seleccionado
				
			}
		})

		this.solicitudClientServ.listarTurnos().subscribe((data:Turno[])=>{ 
			
			let turno;
			//debugger;
			if (!data) {
				alert('Error no hay turnos');
			}else{
				
				for ( const key in data) {
					turno = data[key];
					turno.key =key;
					this.turnos= turno;
					
				}
				
			}
		})
	}


	findImage(trans){
		this.solicitudClientServ.findImageTra(trans).subscribe((data)=>{
			let imagen_tra= data; // me trae un objeto.. 
			//convertir objeto en array..
			let imagen= Object.keys(imagen_tra).map(function(key){return imagen_tra[key];});
			// console.log("array: \n",imagen);
			this.imagen_trans= imagen[0].image_car;//el array en su posicion cero, elegir el atributo image_car

		});

	}

	zona_turSelect(){

		this.transportista_selec="0";
		this.cargar_trans=true;
		
		this.solicitudClientServ.listarTrans(this.zonaSelected,this.turnoSelected).subscribe((data:Transportista[])=>{
			let trans_res= data;
			let transportista;

			if (!trans_res) {
				alert('Error no hay transportistas');
				console.log("holaaa no hayy");
			}else{
				
				for ( const key in trans_res) {
					transportista = trans_res[key];
					transportista.key =key;
					this.transportistas= transportista;
				}
				this.cargar_trans= false; //apago o quito el spinner porq ya encontro transportistas
			}
		},(error)=>{
			

		})
		
	}



}