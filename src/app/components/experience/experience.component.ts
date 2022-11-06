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

    alerts = {
        "uploading": false,
        "updating": false,
        "deleting": false
    }

    newExperienceInputs = {
        "rol": "",
        "startYear": NaN,
        "endYear": NaN,
        "company": "",
        "description": ""
    }

	experienceItems: Experience[] = [];
	expToUpdate!: Experience;

	constructor(private experienceService: ExperienceService, private tokenService: TokenService) {
	}

	ngOnInit(): void {
		this.getExperienceList();
        if (this.tokenService.getToken()) {
			this.isLogged = true;
		} else {
			this.isLogged = false;
		}
	}

	getExperienceList(): void {
        this.experienceService.list().subscribe(
            data => {
                this.experienceItems = data;
                this.isLoadding = false;
                this.alerts.uploading = false;
                this.alerts.updating = false;
                this.alerts.deleting = false;
            }
        );
    }

    deleteExperience(id: any) {
        this.alerts.deleting = true;
        this.experienceService.delete(id).subscribe(
            data => {
                this.getExperienceList();
            }
        );
    }

    // =================== CREATE EXPERIENCE ===================
	createExperience(): void {
        this.alerts.uploading = true;
        let experience = new Experience(this.newExperienceInputs.rol, this.newExperienceInputs.startYear, this.newExperienceInputs.endYear, this.newExperienceInputs.company, this.newExperienceInputs.description);
        this.experienceService.add(experience).subscribe(
            data => {
                this.getExperienceList();
            }
        );
        this.clearNewExperienceInputs();        
    }

	clearNewExperienceInputs() {
        this.newExperienceInputs.rol = '';
		this.newExperienceInputs.startYear = NaN;
		this.newExperienceInputs.endYear = NaN;
        this.newExperienceInputs.company = '';
        this.newExperienceInputs.description = '';
    }

    // =================== UPDATE EXPERIENCE ===================
    findExperience(id: any) {
        this.loaddingForUpdate = true;
        this.experienceService.detail(id).subscribe(
            data => {
                this.expToUpdate = data;
                this.loaddingForUpdate = false;
            }
        );
    }

	update(id: any): void {
        this.alerts.updating = true;
        this.experienceService.update(id, this.expToUpdate).subscribe(
            data => {
                this.getExperienceList();
            }
        );
    }	

}
