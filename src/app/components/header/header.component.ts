import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	pageLogoSrc = 'assets/imgs/ap-logo.png';

	socialNetworks: any[];
	
	constructor() { 
		this.socialNetworks = [
			{name: 'LinkedIn', url: 'https://ar.linkedin.com'},
			{name: 'GitHub', url: 'https://github.com/altoPancho'}
		]
	}

	ngOnInit(): void {
	}

}