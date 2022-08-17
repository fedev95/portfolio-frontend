import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../model/login.model';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	authURL = 'http://localhost:8080/auth/';

	constructor(private httclient: HttpClient) {
	}

	public login(login: Login) {
		
	}
}
