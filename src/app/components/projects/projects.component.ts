import { Component, OnInit } from '@angular/core';
import { Projects } from 'src/app/model/projects.model';
import { ProjectsService } from 'src/app/services/projects.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
	selector: 'app-projects',
	templateUrl: './projects.component.html',
	styleUrls: ['./projects.component.css']
})

export class ProjectsComponent implements OnInit {

	sectionTitle = 'proyectos';
    isLogged = false;
    isLoadding = true;
    loaddingForUpdate = false;

    alerts = {
        "uploading" : false,
        "updating" : false,
        "deleting" : false
    }

    newProjectInput: any = {
        "img": "",
        "title": "",
        "date": undefined,
        "description": "",
        "prjLink": ""
    }

	projectsItems: Projects[] = [];
	prjToUpdate!: Projects;

	constructor(private projectsService: ProjectsService, private tokenService: TokenService) {
	}

	ngOnInit(): void {
		this.projectsList();
        if (this.tokenService.getToken()) {
			this.isLogged = true;
		} else {
			this.isLogged = false;
		}
	}

    createInputImg(e: any) {
        this.newProjectInput.img = e[0].base64;
    }

    clearInputImg() {
        this.newProjectInput.img = "";
    }

    editInputImg(itemImg: any) {
        this.newProjectInput.img = itemImg;
    }

	goToLink(url: any) {
		window.open(url, "_blank");
	}
	
	projectsList(): void {
        this.projectsService.list().subscribe(
            data => {
                this.projectsItems = data.sort((a, b) => b.date - a.date);
                this.isLoadding = false;
                this.alerts.uploading = false;
                this.alerts.updating = false;
                this.alerts.deleting = false;
            }
        );
    }

    deleteProject(id: any) {
        this.alerts.deleting = true;
        this.projectsService.delete(id).subscribe(
            data => {
                this.projectsList();
            }
        );
    }
    
    // =================== CREATE PROJECT ===================
	createProject(): void {
        this.alerts.uploading = true;
        const project = new Projects(this.newProjectInput.img, this.newProjectInput.title, this.newProjectInput.date, this.newProjectInput.description, this.newProjectInput.prjLink);
        this.projectsService.add(project).subscribe(
            data => {
                this.projectsList();
            }
        );
        this.clearNewProjectInput();        
    }

	clearNewProjectInput() {
        this.newProjectInput.img = "";
		this.newProjectInput.title = "";
		this.newProjectInput.date = undefined;
        this.newProjectInput.description = "";
        this.newProjectInput.prjLink = "";
    }

    // =================== EDIT PROJECT ===================
	findProject(id: any) {
        this.loaddingForUpdate = true;
        this.projectsService.detail(id).subscribe(
            data => {
                this.prjToUpdate = data;
                this.loaddingForUpdate = false;
            }
        );
    }

	updateProject(id: any): void {
        this.alerts.updating = true;
        if (this.newProjectInput.img.length > 0) {
            this.prjToUpdate.img = this.newProjectInput.img;
            this.newProjectInput.img = "";
        }
        this.projectsService.update(id, this.prjToUpdate).subscribe(
            data => {
                this.projectsList();
            }
        );
    }

}
