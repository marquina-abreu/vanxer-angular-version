import { Component, DoCheck, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from './services/user.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements OnInit, DoCheck {
  title = 'Vanxer';

  

  public identity;

  constructor(private _route: ActivatedRoute, private _router: Router, private userService: UserService){
  }

  ngOnInit(){ // cuando cargue este componente..
    
  	 this.identity= this.userService.getIdentity();
    
    }
  

  ngDoCheck(){ // con DoCheck, el siemrpe trabaja viendo q cambio se realiza, y lo muestra de una, si hay cambio en el localStorage, tambien lo cambia de una, tipo ajax.
  	this.identity= this.userService.getIdentity();
  }

  //cerrar session
  logout(){
  	localStorage.clear();
  	this.identity= null;
  	this._router.navigate(['/']);
  }

  
}
