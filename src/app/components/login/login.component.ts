import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	user = '';
	password = '';

	loginForm: FormGroup;

  	constructor(private formBuilder: FormBuilder, private authService: AuthService, private route:Router){ 
    	this.loginForm= this.formBuilder.group({
			user:['', [Validators.required]],
      		password:['',[Validators.required]],
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
		return false;
	}
 
	onSubmit(event: Event) {
		event.preventDefault; 
		
		this.authService.logIn(this.loginForm.value).subscribe(data => {
			this.route.navigate(['/portfolio']);
		})
	}	

}
