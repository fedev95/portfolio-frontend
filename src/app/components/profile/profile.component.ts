import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

	logged = false;

	socials = [
		{'socialName': 'GitHub', 'socialLink': 'asdasd'},
		{'socialName': 'LinkedIn', 'socialLink': 'asdasd'},
		{'socialName': 'LinkedIn', 'socialLink': 'asdasd'},
		{'socialName': 'LinkedIn', 'socialLink': 'asdasd'}
	]
		
	constructor() { }

	ngOnInit(): void {
	}

}
