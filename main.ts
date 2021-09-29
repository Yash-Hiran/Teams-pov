import {AccessAsCode} from "./src/modules/AccessAsCode";
import {Person} from "./src/modules/person";
import {Team} from "./src/modules/team";
import {Organization} from "./src/modules/organization";

const person1: Person = {
    name: "",
    github: "",
    slack: "",
    pagerDuty: ""
}
const person2: Person = {
    name: "",
    github: "",
    slack: "",
    pagerDuty: ""
}
const team1Members: Array<Person> = [person1, person2]
const team2Members: Array<Person> = []

const teams = [
    new Team("Team 1", team1Members),
    new Team("Team 2", team2Members)
]

const organization = new Organization(teams);

const accessAsCode = new AccessAsCode(organization, {
    backend: {},
    slack: {},
    pagerDuty: {},
    github: {token: "", organization: ""},
})

accessAsCode.provision();
