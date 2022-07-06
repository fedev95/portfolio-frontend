import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	user = '';
	password = '';

	loginForm: FormGroup;

  	constructor(private formBuilder: FormBuilder){ 
    	this.loginForm= this.formBuilder.group({
      		password:['',[Validators.required, Validators.minLength(8)]],
      		user:['', [Validators.required]],
   		})
  	}

  	ngOnInit() {}

	get Password(){
		return this.loginForm.get("password");
	}
	
	get User(){
		return this.loginForm.get("user");
	}

	get PasswordValid(){
		return this.Password?.touched && !this.Password?.valid;
	}

	get UserValid() {
		return false
	}
 
	onEnviar(event: Event){
		event.preventDefault; 
	
		if (this.loginForm.valid){
			alert("Todo salio bien ¡Enviar formuario!")
		} else {     
			this.loginForm.markAllAsTouched(); 
		}
	
	}	

}
