import { Component, OnInit } from '@angular/core';
import { Projects } from 'src/app/model/projects.model';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
	selector: 'app-projects',
	templateUrl: './projects.component.html',
	styleUrls: ['./projects.component.css']
})

export class ProjectsComponent implements OnInit {

	sectionTitle = 'proyectos';

    logged = true;

	projectsItems: Projects[] = [];

	// variables para crear un nuevo item
	createImg: String = '';
	createTitle: String = '';
	createDate: String = '';
	createDescription: String = '';
	createPrjLink: String = '';

	prjToUpdate!: Projects;

	constructor(private projectsService: ProjectsService) {
	}

	ngOnInit(): void {
		this.projectsList();
	}

	goToLink(url: string) {
		window.open(url, "_blank");
	}
	
	projectsList(): void {
        this.projectsService.list().subscribe(
            data => {
                this.projectsItems = data;
            }
        );
    }

	createProject(): void {
        const project = new Projects(this.createImg, this.createTitle, this.createDate, this.createDescription, this.createPrjLink);
        this.projectsService.add(project).subscribe(
            data => {
                this.projectsList();
            }
        );
        this.clearForm();        
    }

	clearForm() {
        this.createImg = '';
		this.createTitle = '';
		this.createDate = '';
        this.createDescription = '';
        this.createPrjLink = '';
    }

	deleteProject(id: any) {
        this.projectsService.delete(id).subscribe(
            data => {
                this.projectsList();
            }
        );
    }

	findProject(id: any) {
        this.projectsService.detail(id).subscribe(
            data => {
                this.prjToUpdate = data;
            }
        )
    }

	update(id: any): void {
        this.projectsService.update(id, this.prjToUpdate).subscribe(
            data => {
                this.projectsList();
            }
        )
    }

}
