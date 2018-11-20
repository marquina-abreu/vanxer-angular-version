
export class User {
	constructor(
		public _id: string,
		public user: string,
		public password: string,
		public image ?: string,
		public createdAt ?: Date,
		public role ?: string
		){

	}
}