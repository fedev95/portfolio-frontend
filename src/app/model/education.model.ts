export class Education {
    id?: number;
    title: String;
    academyName: String;
    certificationLink: String;

    constructor(title: String, academyName: String, certificationLink: String) {
        this.title = title;
        this.academyName = academyName;
        this.certificationLink = certificationLink;
    }

}