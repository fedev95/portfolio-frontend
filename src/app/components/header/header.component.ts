import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	pageLogoSrc = 'assets/imgs/ap-logo.png';

	logged = false;
	
	constructor() { 
	}

	ngOnInit(): void {
	}

	alternar() {
		if (this.logged == true) {
			this.logged = false;
		} else {
			this.logged = true;
		}
	}

}