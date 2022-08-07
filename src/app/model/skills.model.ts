export class Skills {
    id?: number;
    skillName: String;
    skillType: String;
    

    constructor(skillName: String, skillType: String) {
        this.skillName = skillName;
        this.skillType = skillType;
    }

}