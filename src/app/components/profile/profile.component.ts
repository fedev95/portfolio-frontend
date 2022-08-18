import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/model/profile.model';
import { Social } from 'src/app/model/social.model';
import { ProfileService } from 'src/app/services/profile.service';
import { SocialService } from 'src/app/services/social.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

	isLogged = false;

	isLoadding = true;

	// datos del perfil
	profileData!: Profile;
	prfToUpdate!: Profile;
	createImg: String = '';

	// redes sociales
	socialItems: Social[] = [];
	createSocialName: String = '';
	createSocialLink: String = '';
	socToUpdate!: Social;	
		
	constructor(private socialService: SocialService, private profileService: ProfileService, private tokenService: TokenService) {
	}

	ngOnInit(): void {
		this.findProfile(1)
		this.socialList();
		if (this.tokenService.getToken()) {
			this.isLogged = true;
		} else {
			this.isLogged = false;
		}
	}

	// ============================== profile data ==============================
	findProfile(id: any) {
        this.profileService.detail(id).subscribe(
            data => {
                this.profileData = data;
				this.isLoadding = false;
            }
			)
		}
		

	findProfileToUpdate(id: any) {
        this.profileService.detail(id).subscribe(
            data => {
                this.prfToUpdate = data;
				this.createImg = this.profileData.img;
            }
        )
    }

	updateProfile(id: any): void {
		this.prfToUpdate.img = this.createImg;
        this.profileService.update(id, this.prfToUpdate).subscribe(
            data => {
                this.findProfile(id);
            }
        )
    }

	onCreateImg(e: any) {
        this.createImg = e[0].base64;
    }


	// ============================== social ==============================
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
		this.clearAddForm();  
    }

	findSocial(id: any) {
        this.socialService.detail(id).subscribe(
            data => {
                this.socToUpdate = data;
            }
        )
    }

	updateSocial(id: any): void {
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
