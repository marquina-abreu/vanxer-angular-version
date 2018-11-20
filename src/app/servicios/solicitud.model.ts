import { Zona } from './zona.model';
import { Turno } from './turno.model';
import { Transportista } from '../transportista/transportista.model';

export class Solicitud {
	constructor(
		public name: string,
		public surname: string,
		public phone: string,
		public email: string,
		public commentary: string,
		public zona: Zona,
		public turno: Turno,
		public transportista: Transportista,

		){

	}
}