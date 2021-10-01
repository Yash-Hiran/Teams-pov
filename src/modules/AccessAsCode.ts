import { Organization } from "./organization";
import { AccessAsCodeConfiguration } from "./AccessAsCodeConfiguration";
// import { AccessAsCodeResult } from "./AccessAsCodeResult";
import { App, S3Backend, TerraformStack, TerraformVariable } from "cdktf";
import { Construct } from "constructs";
import { SlackProvider } from '../../.gen/providers/slack'

class MyStack extends TerraformStack{
    constructor(scope: Construct, name: string, accessAsCode: AccessAsCode) {
        super(scope, name);

        new S3Backend(this, accessAsCode.configuration.backend);
    }
}

export class AccessAsCode {
    organization: Organization;
    configuration: AccessAsCodeConfiguration;

    constructor(organization: Organization, configuration: AccessAsCodeConfiguration) {
        this.organization = organization;
        this.configuration = configuration;
    }

    provision() {
        const app = new App();
        const stack = new MyStack(app, 'teams', this);

        this.inputTerraformVariables(stack)

        app.synth();
    }  

    inputTerraformVariables(stack: MyStack){
        const slackToken = new TerraformVariable(stack, 'SLACK_TOKEN', {
            type: 'string' 
        });

        new SlackProvider(stack, "slack", {
            token: slackToken.stringValue
        });
    }
}