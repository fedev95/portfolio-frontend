import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-education-item',
	templateUrl: './education-item.component.html',
	styleUrls: ['./education-item.component.css']
})
export class EducationItemComponent implements OnInit {

	title = 'title';
	date = 9999;
	org = 'organization';
	orgLink = '';
	certificationLink = '';

	constructor() { }

	ngOnInit(): void {
	}

}