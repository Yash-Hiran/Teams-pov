import {Organization} from "./organization";
import {AccessAsCodeConfiguration} from "./AccessAsCodeConfiguration";
import {AccessAsCodeResult} from "./AccessAsCodeResult";


export class AccessAsCode {
    organization: Organization;
    configuration: AccessAsCodeConfiguration;

    constructor(organization: Organization, configuration: AccessAsCodeConfiguration) {
        this.organization = organization;
        this.configuration = configuration;
    }

    provision(): AccessAsCodeResult {
        return new AccessAsCodeResult()
    }
}

//
// class SomeClass extends TerraformStack {
//     constructor(scope: Construct, id: string) {
//         super(scope, id);
//
//         new S3Backend(this, {
//             bucket: "access-team-local-run-test",
//             key: "state/terraform.tfstate",
//             region: "us-east-1"
//         });
//
//         const app = new App();
//         const stack = new MyStack(app, "teams-poc");
//
//         app.synth();
//     }
// }
