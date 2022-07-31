import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/model/education.model';
import { EducationService } from 'src/app/services/education.service';

@Component({
    selector: 'app-education',
    templateUrl: './education.component.html',
    styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

    sectionTitle = 'educación';

    logged = true;

    educationItems: Education[] = [];

    createTitle: String = '';
    createAcademyName: String = '';
    createCertificationLink: String = '';

    edToUpdate!: Education;

    constructor(private educationService: EducationService) { }

    ngOnInit(): void {
        this.listEducation();
    }

    listEducation(): void {
        this.educationService.list().subscribe(
            data => {
                this.educationItems = data;
            }
        );
    }

    deleteEducation(id: any) {
        this.educationService.delete(id).subscribe(
            data => {
                this.listEducation();
            }
        );
    }

    createEducation(): void {
        const education = new Education(this.createTitle, this.createAcademyName, this.createCertificationLink);
        this.educationService.add(education).subscribe(
            data => {
                this.listEducation();
            }
        );
        this.clearForm();        
    }

    clearForm() {
        this.createTitle = '';
        this.createAcademyName = '';
        this.createCertificationLink = '';
    }

    findEducation(id: any) {
        this.educationService.detail(id).subscribe(
            data => {
                this.edToUpdate = data;
                // console.log(this.edToUpdate);
            }
        )
    }

    update(id: any): void {
        this.educationService.update(id, this.edToUpdate).subscribe(
            data => {
                this.listEducation();
            }
        )
    }
    

        
}
