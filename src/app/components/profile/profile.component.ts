import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

	user: User = new User('','','','');

	constructor() { }

	ngOnInit(): void {
	}

}
