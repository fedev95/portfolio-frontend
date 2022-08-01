export class Experience {
    
    id?: number;
    rol: String;
    startYear: number;
    endYear: number;
    company: String;
    description: String;

    constructor(rol: String, startYear: number, endYear: number, company: String, description: String) {
        this.rol = rol;
        this.startYear = startYear;
        this.endYear = endYear;
        this.company = company;
        this.description = description;
    }

}