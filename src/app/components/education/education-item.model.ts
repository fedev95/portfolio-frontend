export class EducationItem {
    title = '';
    year = '';
    institution = '';
    institutionLink = '';
    certificationLink = '';

    constructor(title:string, year:string, institution:string, institutionLink:string, certificationLink:string) {
        this.title = title;
        this.year = year;
        this.institution = institution;
        this.institutionLink = institutionLink;
        this.certificationLink = certificationLink;
    }

}