import { Component, OnInit } from '@angular/core';
import { EducationItem } from './education-item.model';


@Component({
    selector: 'app-education',
    templateUrl: './education.component.html',
    styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

    sectionTitle = 'education';

    logged = true;

    educationItems = [
        {title: 'Titulo', year: 'yyyy', institution: 'Institucion', institutionLink: 'Link1', certificationLink: 'Link2'},
        {title: 'Titulo 2', year: 'yyyy', institution: 'Institucion 2', institutionLink: 'Link1', certificationLink: 'Link2'},
        {title: 'Titulo 3', year: 'yyyy', institution: 'Institucion 3', institutionLink: 'Link1', certificationLink: 'Link2'}
    ];

    inputTitle = '';
    inputYear = '';
    inputInstitution = '';
    inputInstitutionLink = '';
    inputCertificationLink = '';

    deleteItem(item:any) {
		if (item !== -1) {
			this.educationItems.splice(item, 1);
		}
    }

    addEducation() {
        let newItem = new EducationItem(this.inputTitle, this.inputYear, this.inputInstitution, this.inputInstitutionLink, this.inputCertificationLink);
        this.educationItems.push(newItem);
    }

    constructor() { }

    ngOnInit(): void {
    }

}
