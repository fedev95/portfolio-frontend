import { Component, OnInit } from '@angular/core';
import { ExperienceItem } from './experience-item.model';
import { FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
	selector: 'app-experience',
	templateUrl: './experience.component.html',
	styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

	sectionTitle = 'experience';

	logged = true;

	experienceItems = [
		{rol: 'Rol', startYear: 'yyyy', endYear: 'yyyy', company: 'Compañía', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum non doloribus pariatur quibusdam, autem dolor dolore quo officia aperiam explicabo!'},
		{rol: 'Rol 2', startYear: 'yyyy', endYear: 'yyyy', company: 'Compañía 2', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum non doloribus pariatur quibusdam, autem dolor dolore quo officia aperiam explicabo!'},
		{rol: 'Rol 3', startYear: 'yyyy', endYear: 'yyyy', company: 'Compañía 3', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum non doloribus pariatur quibusdam, autem dolor dolore quo officia aperiam explicabo!'}
	]

	
	inputRol = '';
	inputStartYear = '';
	inputEndYear = '';
	inputCompany = '';
	inputDescription = '';
	
	incomplete = false;
	
	deleteItem(item:any) {
		if (item !== -1) {
			this.experienceItems.splice(item, 1);
		}
    }

	addExperienceItem() {
		if(this.inputRol.length > 0 && this.inputStartYear.length > 0 && this.inputEndYear.length > 0 && this.inputCompany.length > 0 && this.inputDescription.length > 0) {
			let newItem = new ExperienceItem(this.inputRol, this.inputStartYear, this.inputEndYear, this.inputCompany, this.inputDescription);
			this.experienceItems.push(newItem);
			this.inputRol = '';
			this.inputStartYear = '';
			this.inputEndYear = '';
			this.inputCompany = '';
			this.inputDescription = '';
			this.incomplete = false;
		} else {
			this.incomplete = true;
		}
	}

	constructor() {
	}

	ngOnInit(): void {
	}

}
