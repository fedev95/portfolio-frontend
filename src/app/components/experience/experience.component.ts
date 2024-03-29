import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/model/experience.model';
import { ExperienceService } from 'src/app/services/experience.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
	selector: 'app-experience',
	templateUrl: './experience.component.html',
	styleUrls: ['./experience.component.css']
})

export class ExperienceComponent implements OnInit {

	sectionTitle = 'experiencia';

	isLogged = false;

    isLoadding = true;

    loaddingForUpdate = false;

    uploadingAlert = false;
    updatingAlert = false;
    deletingAlert = false;


	experienceItems: Experience[] = [];

	// variables para crear un nuevo item
	createRol: String = '';
	createStartYear: any = undefined;
	createEndYear: any = undefined;
	createCompany: String = '';
	createDescription: String = '';

	expToUpdate!: Experience;

	constructor(private experienceService: ExperienceService, private tokenService: TokenService) {
	}

	ngOnInit(): void {
		this.experienceList();
        if (this.tokenService.getToken()) {
			this.isLogged = true;
		} else {
			this.isLogged = false;
		}
	}

	experienceList(): void {
        this.experienceService.list().subscribe(
            data => {
                this.experienceItems = data;
                this.isLoadding = false;
                this.uploadingAlert = false;
                this.updatingAlert = false;
                this.deletingAlert = false;
            }
        );
    }

	createExperience(): void {
        this.uploadingAlert = true;
        const experience = new Experience(this.createRol, this.createStartYear, this.createEndYear, this.createCompany, this.createDescription);
        this.experienceService.add(experience).subscribe(
            data => {
                this.experienceList();
            }
        );
        this.clearForm();        
    }

	clearForm() {
        this.createRol = '';
		this.createStartYear = undefined;
		this.createEndYear = undefined;
        this.createCompany = '';
        this.createDescription = '';
    }

	deleteExperience(id: any) {
        this.deletingAlert = true;
        this.experienceService.delete(id).subscribe(
            data => {
                this.experienceList();
            }
        );
    }

	findExperience(id: any) {
        this.loaddingForUpdate = true;
        this.experienceService.detail(id).subscribe(
            data => {
                this.expToUpdate = data;
                this.loaddingForUpdate = false;
            }
        )
    }

	update(id: any): void {
        this.updatingAlert = true;
        this.experienceService.update(id, this.expToUpdate).subscribe(
            data => {
                this.experienceList();
            }
        )
    }

}
