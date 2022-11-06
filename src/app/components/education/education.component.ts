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
    loaddingForUpdate = false;
    
    alerts = {
        "uploading": false,
        "updating": false,
        "deleting": false
    }

    newEducationInputs = {
        "title": "",
        "academy": "",
        "certificationLink": ""
    }

    educationList: Education[] = [];
    edToUpdate!: Education;

    constructor(private educationService: EducationService, private tokenService: TokenService) {
    }

    ngOnInit(): void {
        this.getEducationList();
        if (this.tokenService.getToken()) {
			this.isLogged = true;
		} else {
			this.isLogged = false;
		}
    }

    getEducationList(): void {
        this.educationService.list().subscribe(
            data => {
                this.educationList = data;
                this.isLoadding = false;
                this.alerts.uploading = false;
                this.alerts.updating = false;
                this.alerts.deleting = false;
            }
        );
    }

    deleteEducation(id: any) {
        this.alerts.deleting = true;
        this.educationService.delete(id).subscribe(
            data => {
                this.getEducationList();
            }
        );
    }

    // =================== UPDATE EDUCATION ===================
    findEducation(id: any) {
        this.loaddingForUpdate = true;
        this.educationService.detail(id).subscribe(
            data => {
                this.edToUpdate = data;
                this.loaddingForUpdate = false;
            }
        );
    }

    updateEducation(id: any): void {
        this.alerts.updating = true;
        this.educationService.update(id, this.edToUpdate).subscribe(
            data => {
                this.getEducationList();
            }
        );
    }

    // =================== CREATE EDUCATION ===================
    createEducation(): void {
        this.alerts.uploading = true;
        let newEducation: Education = new Education(this.newEducationInputs.title, this.newEducationInputs.academy, this.newEducationInputs.certificationLink);
        this.educationService.add(newEducation).subscribe(
            data => {
                this.getEducationList();
            }
        );
        this.clearNewEducation();
    }

    clearNewEducation() {
        this.newEducationInputs.title = "";
        this.newEducationInputs.academy = "";
        this.newEducationInputs.certificationLink = "";
    }

}