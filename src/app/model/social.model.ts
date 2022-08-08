export class Social {
    id?: number;
    socialName: String;
    socialLink: String;
    

    constructor(socialName: String, socialLink: String) {
        this.socialName = socialName;
        this.socialLink = socialLink;
    }

}