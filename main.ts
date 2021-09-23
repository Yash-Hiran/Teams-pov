import { Construct } from "constructs";
import { App, S3Backend, TerraformStack, TerraformVariable } from "cdktf";
import { SlackProvider } from './.gen/providers/slack';

class MyStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    new S3Backend(this, {
      bucket: "access-team-local-run-test",
      key: "state/terraform.tfstate",
      region: "us-east-1"
    });   
  }
}

const app = new App();
const stack = new MyStack(app, "teams-poc");

const slackToken = new TerraformVariable(stack, "SLACK_TOKEN", {
  type: 'string'
});

new SlackProvider(stack, "Slack", {
  token: slackToken.stringValue
})

app.synth();
