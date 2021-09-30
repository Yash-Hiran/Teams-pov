import {AccessAsCode} from "./src/modules/AccessAsCode";
import {Person} from "./src/modules/person";
import {Team} from "./src/modules/team";
import {Organization} from "./src/modules/organization";

const person1: Person = {
    name: "Yash Hiran",
}
const person2: Person = {
    name: "Yashi Srivastava",
}
const team1Members: Array<Person> = [person1, person2]
const team2Members: Array<Person> = []

const teams = [
    new Team("Team 1", team1Members),
    new Team("Team 2", team2Members)
]

const organization = new Organization(teams);

const accessAsCode = new AccessAsCode(organization, {
    backend: {
        bucket: "access-team-local-run-test",
        key: "state/terraform.tfstate",
        region: "us-east-1"
    },
})

accessAsCode.provision();
