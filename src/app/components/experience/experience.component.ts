import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/model/experience.model';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
	selector: 'app-experience',
	templateUrl: './experience.component.html',
	styleUrls: ['./experience.component.css']
})

export class ExperienceComponent implements OnInit {

	sectionTitle = 'experiencia';

	logged = true;

	experienceItems: Experience[] = [];

	// variables para crear un nuevo item
	createRol: String = '';
	createStartYear: number = NaN;
	createEndYear: number = NaN;
	createCompany: String = '';
	createDescription: String = '';

	expToUpdate!: Experience;

	constructor(private experienceService: ExperienceService) {
	}

	ngOnInit(): void {
		this.experienceList();
	}

	experienceList(): void {
        this.experienceService.list().subscribe(
            data => {
                this.experienceItems = data;
            }
        );
    }

	createExperience(): void {
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
		this.createStartYear = NaN;
		this.createEndYear = NaN;
        this.createCompany = '';
        this.createDescription = '';
    }

	deleteExperience(id: any) {
        this.experienceService.delete(id).subscribe(
            data => {
                this.experienceList();
            }
        );
    }

	findExperience(id: any) {
        this.experienceService.detail(id).subscribe(
            data => {
                this.expToUpdate = data;
            }
        )
    }

	update(id: any): void {
        this.experienceService.update(id, this.expToUpdate).subscribe(
            data => {
                this.experienceList();
            }
        )
    }

}
