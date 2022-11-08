export class Projects {

    id?: number;
    img: String;
    title: String;
    date: number;
    description: String;
    prjLink: String;

    constructor(img: String, title: String, date: number, description: String, prjLink: String) {
        this.img = img;
        this.title = title;
        this.date = date;
        this.description = description;
        this.prjLink = prjLink;
    }

}