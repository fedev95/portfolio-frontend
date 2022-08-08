import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

	logged = true;

	socials = [
		{'socialName': 'GitHub', 'socialLink': 'asdasd'},
		{'socialName': 'LinkedIn', 'socialLink': 'asdasd'},
		{'socialName': 'Instagram', 'socialLink': 'asdasd'}
	]
		
	constructor() { }

	ngOnInit(): void {
	}

}
