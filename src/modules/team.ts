import {Person} from "./person";

export class Team {
    name: string;
    members: Array<Person>;

    constructor(name: string, members: Array<Person>) {
        this.name = name;
        this.members = members;
    }
}
