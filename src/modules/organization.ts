import {Team} from "./team";

export class Organization {
    teams: Array<Team>;

    constructor(teams: Array<Team>) {
        this.teams = teams;
    }
}
