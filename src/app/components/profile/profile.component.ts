import { Component, OnInit } from '@angular/core';
import { Social } from 'src/app/model/social.model';
import { SocialService } from 'src/app/services/social.service';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

	logged = true;

	socialItems: Social[] = [];

	createSocialName: String = '';
	createSocialLink: String = '';
	socToUpdate!: Social;	
		
	constructor(private socialService: SocialService) {
	}

	ngOnInit(): void {
		this.socialList();
	}

	socialList(): void {
		this.socialService.list().subscribe(
			data => {
				this.socialItems = data;
            }
		);
	}

	deleteSocial(id: any) {
        this.socialService.delete(id).subscribe(
            data => {
                this.socialList();
            }
        );
    }

	createSocial(): void {
        const skill = new Social(this.createSocialName, this.createSocialLink);
        this.socialService.add(skill).subscribe(
            data => {
                this.socialList();
            }
			);
		// this.clearAddForm();  
    }

	findSocial(id: any) {
        this.socialService.detail(id).subscribe(
            data => {
                this.socToUpdate = data;
            }
        )
    }

	update(id: any): void {
        this.socialService.update(id, this.socToUpdate).subscribe(
            data => {
                this.socialList();
            }
        )
    }

	clearAddForm() {
		this.createSocialName = '';
		this.createSocialLink = '';
	}

}
