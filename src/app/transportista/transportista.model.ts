import { User } from '../login/user.model';
import { Zona } from '../servicios/zona.model';

export class Transportista {
	constructor(
		public _id:string,
		public name_tra: string,
		public surname_tra: string,
		public email: string,
		public phone: string,
		public modelo_car: string,
		public image_car: string,
		public capacity: number,
		public date_created: Date,
		public user: User,
		public zona: Zona

		){

	}
}