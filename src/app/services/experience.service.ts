import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from '../model/experience.model';

@Injectable({
	providedIn: 'root'
})
export class ExperienceService {

	experienceURL = 'http://localhost:8080/portfolio/';

	constructor(private httpClient: HttpClient) {

	}

	public list(): Observable<Experience[]> {
		return this.httpClient.get<Experience[]>(this.experienceURL + 'exp-list');
	}

	public detail(id: number): Observable<Experience> {
		return this.httpClient.get<Experience>(this.experienceURL + `exp-detail/${id}`);
	}

	public add(experience: Experience): Observable<any> {
		return this.httpClient.post<any>(this.experienceURL + 'exp-add', experience);
	}

	public update(id: number, experience: Experience): Observable<any> {
		return this.httpClient.put<any>(this.experienceURL + `exp-update/${id}`, experience);
	}

	public delete(id: number): Observable<any> {
		return this.httpClient.delete<any>(this.experienceURL + `exp-delete/${id}`);
	}

}
