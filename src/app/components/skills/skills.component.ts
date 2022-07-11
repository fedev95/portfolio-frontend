import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-skills',
	templateUrl: './skills.component.html',
	styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

	logged = true;

	section_title = 'skills';

	newSkill = '';

	frontend: string[] = [
		'HTML / CSS / JS',
		'Bootstrap',
		'Angular'
	];

	backend: string[] = [
		'SQL'
	]

	addSkill(type: any, skill: any) {
		if (skill.length > 0) {
			type.push(skill);
			this.newSkill = '';
		}
	}

	removeSkill(type: any[], skill: any) {
		let i = type.indexOf(skill);
		if (i !== -1) {
			type.splice(i, 1);
		}
	}

	constructor() { }

	ngOnInit(): void {
	}

}
