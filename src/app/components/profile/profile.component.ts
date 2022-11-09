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
	
	// ============================== PROFILE ==============================
	exists!: boolean;
	profileData!: Profile;
	prfToUpdate!: Profile;
	createImg: String = "";
	updatingProfileAlert = false;
	loaddingForProfileUpdate = false;
	
	// ============================== SOCIAL ==============================
	newSocialInput = {
		"name": "", // createSocialName: String = '';
		"link": "" // createSocialLink: String = '';
	}

	socialAlerts = {
		"uploading": false, // uploadingSocAlert = false;
		"updating": false, // updatingSocAlert = false;
		"deleting": false // deletingSocAlert = false;
	}

	socialItems: Social[] = [];
	socToUpdate!: Social;
	findSocialLoading = false;

	constructor(private socialService: SocialService, private profileService: ProfileService, private tokenService: TokenService) {
	}

	ngOnInit(): void {
		this.existsProfile(1);
		this.socialList();
		if (this.tokenService.getToken()) {
			this.isLogged = true;
		} else {
			this.isLogged = false;
		}
	}

	// ============================== PROFILE ==============================
	existsProfile(id: number) {
		this.profileService.exists(id).subscribe(
			data => {
				if (data) {
					this.findProfile(1);
				} else {
					this.createProfile(1);
				}
			}
		);
	}

	createProfile(id: number) {
		let profile = new Profile("/assets/imgs/profile-default.jpg", "John", "Doe", "Desarrollador Web", "Sobre mí...");
		this.profileService.add(profile).subscribe(
			data => {
				this.findProfile(id);
			}
		);
	}

	findProfile(id: any) {
        this.profileService.detail(id).subscribe(
            data => {
                this.profileData = data;
				this.isLoadding = false;
				this.updatingProfileAlert = false;
            }
		);
	}

	findProfileToUpdate(id: any) {
		this.loaddingForProfileUpdate = true;
        this.profileService.detail(id).subscribe(
            data => {
                this.prfToUpdate = data;
				this.createImg = this.profileData.img;
				this.loaddingForProfileUpdate = false;
            }
        );
    }

	updateProfile(id: any): void {
		this.updatingProfileAlert = true;
		this.prfToUpdate.img = this.createImg;
        this.profileService.update(id, this.prfToUpdate).subscribe(
            data => {
                this.findProfile(id);
            }
        );
    }

	onCreateImg(e: any) {
        this.createImg = e[0].base64;
    }

	// ============================== SOCIAL ==============================
	socialList(): void {
		this.socialService.list().subscribe(
			data => {
				this.socialItems = data;
				this.socialAlerts.uploading = false;
				this.socialAlerts.updating = false;
				this.socialAlerts.deleting = false;
            }
		);
	}

	deleteSocial(id: any) {
		this.socialAlerts.deleting = true;
        this.socialService.delete(id).subscribe(
            data => {
                this.socialList();
            }
        );
    }

	createSocial(): void {
		this.socialAlerts.uploading = true;
        let skill = new Social(this.newSocialInput.name, this.newSocialInput.link);
        this.socialService.add(skill).subscribe(
            data => {
                this.socialList();
            }
		);
		this.clearAddSocialForm();  
    }

	findSocial(id: any) {
		this.findSocialLoading = true;
        this.socialService.detail(id).subscribe(
            data => {
                this.socToUpdate = data;
				this.findSocialLoading = false;
            }
        );
    }

	updateSocial(id: any): void {
		this.socialAlerts.updating = true;
        this.socialService.update(id, this.socToUpdate).subscribe(
            data => {
                this.socialList();
            }
        );
    }

	clearAddSocialForm() {
		this.newSocialInput.name = "";
		this.newSocialInput.link = "";
	}

}