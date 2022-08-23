import { Component, OnInit } from '@angular/core';
import { EMPTY, empty, NEVER } from 'rxjs';
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

	projectsItems: Projects[] = [];

    uploading = false;
    updating = false;
    deleting = false;

	// variables para crear un nuevo item
	createImg: String = '';
	createTitle: String = '';
	createDate: String = '';
	createDescription: String = '';
	createPrjLink: String = '';

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

    onCreateImg(e: any) {
        this.createImg = e[0].base64;
    }

    clearCreateImg() {
        this.createImg = '';
    }

    editCreateImg(itemImg: any) {
        this.createImg = itemImg;
    }

	goToLink(url: any) {
		window.open(url, "_blank");
	}
	
	projectsList(): void {
        this.projectsService.list().subscribe(
            data => {
                this.projectsItems = data;
                this.isLoadding = false;
                this.uploading = false;
                this.updating = false;
                this.deleting = false;
            }
        );
    }

	createProject(): void {
        this.uploading = true;
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

    clearPrjToUpdate() {
        if (this.prjToUpdate) {
            this.prjToUpdate.title = '';
            this.prjToUpdate.date = '';
            this.prjToUpdate.description = '';
            this.prjToUpdate.prjLink = '';
        }
    }

	deleteProject(id: any) {
        this.deleting = true;
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

	updateProject(id: any): void {
        this.updating = true;
        if (this.createImg.length > 0) {
            this.prjToUpdate.img = this.createImg;
            this.createImg = '';
        }
        this.projectsService.update(id, this.prjToUpdate).subscribe(
            data => {
                this.projectsList();
            }
        )
    }

}
