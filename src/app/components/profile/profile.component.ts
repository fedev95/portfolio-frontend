import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

	name = 'federico';
	surname = 'burgos';
	degree = 'Full Stack Developer Jr';

	constructor() { }

	ngOnInit(): void {
	}

}
