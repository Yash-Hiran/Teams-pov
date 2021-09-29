export class Person {
    name: string;
    github: string;
    slack: string;
    pagerDuty: string;

    constructor(name: string, github: string, slack: string, pagerDuty: string) {
        this.name = name;
        this.github = github;
        this.slack = slack;
        this.pagerDuty = pagerDuty;
    }
}
