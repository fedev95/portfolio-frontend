export class Profile {

    id?: number;
    img: String;
    name: string;
    lastname: string;
    title: string;
    description: string;

    constructor(img: String, name: string, lastname: string, title: string, description: string) {
        this.img = img;
        this.name = name;
        this.lastname = lastname;
        this.title = title;
        this.description = description;
    }

}