import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/model/education.model';
import { EducationService } from 'src/app/services/education.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
    selector: 'app-education',
    templateUrl: './education.component.html',
    styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

    sectionTitle = 'educación';

    isLogged = false;

    isLoadding = true;

    educationItems: Education[] = [];

    // variables para crear un nuevo item
    createTitle: String = '';
    createAcademyName: String = '';
    createCertificationLink: String = '';

    edToUpdate!: Education;

    constructor(private educationService: EducationService, private tokenService: TokenService) {
    }

    ngOnInit(): void {
        this.educationList();
        if (this.tokenService.getToken()) {
			this.isLogged = true;
		} else {
			this.isLogged = false;
		}
    }

    educationList(): void {
        this.educationService.list().subscribe(
            data => {
                this.educationItems = data;
                this.isLoadding = false;
            }
        );
    }

    deleteEducation(id: any) {
        this.isLoadding = true;
        this.educationService.delete(id).subscribe(
            data => {
                this.educationList();
            }
        );
    }

    createEducation(): void {
        this.isLoadding = true;
        const education = new Education(this.createTitle, this.createAcademyName, this.createCertificationLink);
        this.educationService.add(education).subscribe(
            data => {
                this.educationList();
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
            }
        )
    }

    update(id: any): void {
        this.isLoadding = true;
        this.educationService.update(id, this.edToUpdate).subscribe(
            data => {
                this.educationList();
            }
        )
    }

    clearEdToUpdate() {
        if (this.edToUpdate) {
            this.edToUpdate.title = '';
            this.edToUpdate.academyName = '';
            this.edToUpdate.certificationLink = '';
        }
    }
        
}
