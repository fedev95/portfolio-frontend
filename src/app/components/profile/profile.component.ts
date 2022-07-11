import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

	logged = true;
	name = 'federico';
	surname = 'burgos';
	degree = 'Full Stack Developer Jr';

	newName = '';
	newSurname = '';
	newDegree = '';

	incomplete = false;

	update() {
		if(this.newName.length > 0 && this.newSurname.length > 0 && this.degree.length > 0) {
			this.name = this.newName;
			this.surname = this.newSurname;
			this.degree = this.newDegree;
			this.incomplete = false;
		} else {
			this.incomplete = true;
		}
	}

	constructor() { }

	ngOnInit(): void {
	}

}
