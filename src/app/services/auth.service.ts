import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from '../model/jwt-dto';
import { Login } from '../model/login.model';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	authURL = 'http://localhost:8080/auth';

	constructor(private httclient: HttpClient) {
	}

	public login(login: Login): Observable<JwtDto> {
		return this.httclient.post<JwtDto>(this.authURL + '/login', login);
	}

}
