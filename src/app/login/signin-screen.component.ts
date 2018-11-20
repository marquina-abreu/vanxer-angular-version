import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from './user.model';
import { UserService } from '../services/user.service';



@Component({
	selector:'vanxer-signin',
	templateUrl: './signin-screen.component.html',
	providers: [UserService]
})

export class SigninScreenComponent implements OnInit {

	public user:User; // aqui guardo el modelo

	public identity;

	public token;
	
	message_error=false;

	signinForm: FormGroup;//formulario
	submitted= false; // esto es para cuando se hace submit

	cargar_envio =false;

	constructor( public dialog: MatDialog, private formBuilder: FormBuilder ,private userService: UserService, private _route: ActivatedRoute, private _router: Router){
		this.user = new  User('','','','',new Date(),'cliente');
	}

	//modals

	openDialog():void{
		const dialogRef= this.dialog.open(DialogErrorSigninComponent, { //nombre d la clase q tiene el dialog
			height: '350px',
			width:'600px'
			
		});

		dialogRef.afterClosed().subscribe(result =>{
			console.log("Dialog resilt : ", result);
		});
	}

	ngOnInit(){
		this.signinForm = this.formBuilder.group({
			user: ['', Validators.required],
			password: ['', [Validators.required, Validators.minLength(6)]]
		});

	}

	get f() {
		return this.signinForm.controls; // esto es para tener acceso a lso form field
	}

	onSubmit(){
		this.submitted = true;
		//si esta validado success
		if (this.signinForm.valid) {
			const {user, password} = this.signinForm.value;
			//crear un usuario
			const user_logueado = new User('',user, password);
			// console.log("Usuario: \n",user_logueado);

			this.cargar_envio=true;

			//
			//iniciar sesion, loguar al usuario y conseguir el objeto
		this.userService.login(user_logueado).subscribe(
			(response) =>{
				this.identity= response.user;

				if (!this.identity || !this.identity._id) { //si no tiene nada identity o no tiene id.. entonces..
					alert("El usuario no se ha Logueado correctamente");
				}else{
					//no mostrar el password
					this.identity.password =""; // la hago vacia

					//guardar info del usuario en el local storage
					localStorage.setItem('identity',JSON.stringify(this.identity));//lo hago stringify porque el localStorage solo guarda numeros o string, mas no objetos
					//conseguir su token 
					this.userService.login(user_logueado,'true').subscribe(//el true es para dar si a generar token
						(response)=>{
							//console.log("hola \n",response);
							this.token= response.token;
							//console.log("token \n ",this.token)
							if (this.token.length <= 0) {
								alert('El token no se ha generado');
							}else{
								//mostrar token
								//console.log("TOken: ",this.token);
								//guardarlo en el localStorage (memoria del navegador)
								localStorage.setItem('Token',this.token);

								//apagar spinner de iniciar sesion una vez la validacion de user y password esten bien
								this.cargar_envio=false;

								//saber q role es para redirigir
								if (this.identity.role=="cliente") {
									this._router.navigate(['/cliente/']);
								}
								if (this.identity.role=="transportista") {
									this._router.navigate(['/transportista/']);
								}

								//cuando inicie session ir a home
								// this._router.navigate(['/']);
							}
						},
						(err)=>{

						});

				}
				
			},
			err =>{
				// console.log("errorr ",err);
				this.message_error= true;
				//apagar spinner de iniciar sesion una vez la validacion de user y password esten bien
				this.cargar_envio=false;
				this.openDialog();
			}
			);
		}
		
	}

}

//MODALS 

@Component({
	selector: 'dialog-signin',
	templateUrl: './signin-dialog.component.html'
})

export class DialogErrorSigninComponent {

}