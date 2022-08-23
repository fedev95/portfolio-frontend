import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/model/skills.model';
import { SkillsService } from 'src/app/services/skills.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
	selector: 'app-skills',
	templateUrl: './skills.component.html',
	styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

	sectionTitle = 'habilidades';

	isLogged = false;

	isLoadding = true;

	isActive = false;

	uploading = false;
	deleting = false;
	
	skillsItems: Skills[] = [];
	frontend: Skills[] = [];
	backend: Skills[] = [];
	
	createSkillName = '';
	createSkillType = '';
	
	sklToUpdate!: Skills;
	
	isFrontend: boolean = false;
	isBackend: boolean = false;
	
	constructor(private skillsService: SkillsService, private tokenService: TokenService) {
	}

	ngOnInit(): void {
		this.skillsList();
		if (this.tokenService.getToken()) {
			this.isLogged = true;
		} else {
			this.isLogged = false;
		}
	}
	
	skillsList(): void {
		this.skillsService.list().subscribe(
			data => {
				this.frontend = [];
				this.backend = [];
				this.skillsItems = data;
				this.skillTypeList();
				this.isLoadding = false;
				this.uploading = false;
				this.deleting = false;
            }
		);
    }

	skillTypeList() {
		for (let skill of this.skillsItems) {
			if (skill.skillType == 'frontend') {
				this.frontend.push(skill);
			} else {
				this.backend.push(skill);
			}
		}
	}

	deleteSkill(id: any) {
		this.deleting = true;
        this.skillsService.delete(id).subscribe(
            data => {
                this.skillsList();
            }
        );
    }

	createSkill(): void {
		this.uploading = true;
        const skill = new Skills(this.createSkillName, this.createSkillType);
        this.skillsService.add(skill).subscribe(
            data => {
                this.skillsList();
            }
			);
		this.clearAddForm();  
    }

	findSkill(id: any) {
        this.skillsService.detail(id).subscribe(
            data => {
                this.sklToUpdate = data;
            }
        )
    }

	activeFrontendBorder() {
		this.isFrontend = true;
		this.isBackend = false;
	}

	activeBackendBorder() {
		this.isBackend = true;
		this.isFrontend = false;
	}

	clearAddForm() {
		this.createSkillName = '';
		this.createSkillType = '';
		this.isFrontend = false;
		this.isBackend = false;
	}

}
