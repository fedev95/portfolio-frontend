import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Social } from '../model/social.model';

@Injectable({
	providedIn: 'root'
})
export class SocialService {

	// local
	socialURL = 'http://localhost:8080/portfolio/';

	// socialURL = 'https://fast-sands-10916.herokuapp.com/portfolio/';

	constructor(private httpClient: HttpClient) {
	}

	public list(): Observable<Social[]> {
		return this.httpClient.get<Social[]>(this.socialURL + 'soc-list');
	}

	public detail(id: number): Observable<Social> {
		return this.httpClient.get<Social>(this.socialURL + `soc-detail/${id}`);
	}

	public add(social: Social): Observable<any> {
		return this.httpClient.post<any>(this.socialURL + 'soc-add', social);
	}

	public update(id: number, social: Social): Observable<any> {
		return this.httpClient.put<any>(this.socialURL + `soc-update/${id}`, social);
	}

	public delete(id: number): Observable<any> {
		return this.httpClient.delete<any>(this.socialURL + `soc-delete/${id}`);
	}

}
