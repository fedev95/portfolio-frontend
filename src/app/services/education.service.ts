import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from '../model/education.model';

@Injectable({
	providedIn: 'root'
})
export class EducationService {

	// local
	educationURL = 'http://localhost:8080/portfolio/';

	// educationURL = 'https://fast-sands-10916.herokuapp.com/portfolio/';

	constructor(private httpClient: HttpClient) {
	}

	public list(): Observable<Education[]> {
		return this.httpClient.get<Education[]>(this.educationURL + 'ed-list');
	}

	public detail(id: number): Observable<Education> {
		return this.httpClient.get<Education>(this.educationURL + `ed-detail/${id}`);
	}

	public add(education: Education): Observable<any> {
		return this.httpClient.post<any>(this.educationURL + 'ed-add', education);
	}

	public update(id: number, education: Education): Observable<any> {
		return this.httpClient.put<any>(this.educationURL + `ed-update/${id}`, education);
	}

	public delete(id: number): Observable<any> {
		return this.httpClient.delete<any>(this.educationURL + `ed-delete/${id}`);
	}

}
