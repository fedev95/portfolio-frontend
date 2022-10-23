import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Projects } from '../model/projects.model';

@Injectable({
	providedIn: 'root'
})

export class ProjectsService {

	// local
	projectsURL = 'http://localhost:8080/portfolio/';

	// projectsURL = 'https://fast-sands-10916.herokuapp.com/portfolio/';

	constructor(private httpClient: HttpClient) {
	}

	public list(): Observable<Projects[]> {
		return this.httpClient.get<Projects[]>(this.projectsURL + 'prj-list');
	}

	public detail(id: number): Observable<Projects> {
		return this.httpClient.get<Projects>(this.projectsURL + `prj-detail/${id}`);
	}

	public add(project: Projects): Observable<any> {
		return this.httpClient.post<any>(this.projectsURL + 'prj-add', project);
	}

	public update(id: number, project: Projects): Observable<any> {
		return this.httpClient.put<any>(this.projectsURL + `prj-update/${id}`, project);
	}

	public delete(id: number): Observable<any> {
		return this.httpClient.delete<any>(this.projectsURL + `prj-delete/${id}`);
	}

}
