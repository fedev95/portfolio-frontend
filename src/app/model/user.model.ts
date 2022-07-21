export class User {
    id?: number;
    name: String;
    surname: String;
    title: String;
    img: String;

    constructor(name: String, surname: String, title: String, img: String) {
        this.name = name;
        this.surname = surname;
        this.title = title;
        this.img = img;
    }
}