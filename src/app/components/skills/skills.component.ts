import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-skills',
	templateUrl: './skills.component.html',
	styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

	section_title = 'skills';

	frontend: string[] = [
		'HTML / CSS / JS',
		'Bootstrap',
		'Angular'
	];

	backend: string[] = [
		'MySQL',
		'pindonga'
	]

	constructor() { }

	ngOnInit(): void {
	}

}
