export class ExperienceItem {
    rol = '';
    startYear = '';
    endYear = '';
    company = '';
    description = '';

    constructor(rol:string, startYear:string, endYear:string, company:string, description:string) {
        this.rol = rol;
        this.startYear = startYear;
        this.endYear = endYear;
        this.company = company;
        this.description = description;
    }
}