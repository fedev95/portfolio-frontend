import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../model/profile.model';

@Injectable({
	providedIn: 'root'
})
export class ProfileService {

	profileURL = 'http://localhost:8080/portfolio/';

	constructor(private httpClient: HttpClient) {
	}

	public detail(id: number): Observable<Profile> {
		return this.httpClient.get<Profile>(this.profileURL + `prf-detail/${id}`);
	}

	public add(profile: Profile): Observable<any> {
		return this.httpClient.post<any>(this.profileURL + 'prf-add', profile);
	}

	public update(id: number, profile: Profile): Observable<any> {
		return this.httpClient.put<any>(this.profileURL + `prf-update/${id}`, profile);
	}

}
