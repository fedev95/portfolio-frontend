import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skills } from '../model/skills.model';

@Injectable({
	providedIn: 'root'
})
export class SkillsService {

	// local
	skillsURL = 'http://localhost:8080/portfolio/';

	// skillsURL = 'https://fast-sands-10916.herokuapp.com/portfolio/';

	constructor(private httpClient: HttpClient) {
	}

	public list(): Observable<Skills[]> {
		return this.httpClient.get<Skills[]>(this.skillsURL + 'skl-list');
	}

	public detail(id: number): Observable<Skills> {
		return this.httpClient.get<Skills>(this.skillsURL + `skl-detail/${id}`);
	}

	public add(skill: Skills): Observable<any> {
		return this.httpClient.post<any>(this.skillsURL + 'skl-add', skill);
	}

	public update(id: number, skill: Skills): Observable<any> {
		return this.httpClient.put<any>(this.skillsURL + `skl-update/${id}`, skill);
	}

	public delete(id: number): Observable<any> {
		return this.httpClient.delete<any>(this.skillsURL + `skl-delete/${id}`);
	}


}
