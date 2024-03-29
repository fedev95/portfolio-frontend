import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	pageLogoSrc = 'assets/imgs/ap-logo.png';

	isLogged = false;
	
	constructor(private tokenService: TokenService) { 
	}

	ngOnInit(): void {
		if (this.tokenService.getToken()) {
			this.isLogged = true;
		} else {
			this.isLogged = false;
		}
	}

	onLogOut(): void {
		this.tokenService.logOut();
		window.location.reload();
	}

}