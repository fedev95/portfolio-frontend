import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-experience-item',
	templateUrl: './experience-item.component.html',
	styleUrls: ['./experience-item.component.css']
})
export class ExperienceItemComponent implements OnInit {

	position = 'position';
	period = 'yyyy - yyyy';
	company = 'company';
	jobDescription = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum non doloribus pariatur quibusdam, autem dolor dolore quo officia aperiam explicabo!';

	constructor() { }

	ngOnInit(): void {
	}

}
