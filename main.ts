import { App, S3Backend, TerraformStack, TerraformVariable } from "cdktf";
import { Construct } from "constructs";
import { Conversation, SlackProvider } from './.gen/providers/slack';

interface MyStackConfig {
  slackToken: TerraformVariable
}

class MyStack extends TerraformStack {
  constructor(scope: Construct, name: string, config: MyStackConfig) {
    super(scope, name);

    new S3Backend(this, {
      bucket: "access-team-local-run-test",
      key: "state/terraform.tfstate",
      region: "us-east-1"
    });

    new SlackProvider(this, "Slack", { 
      token: config.slackToken.stringValue
    })

    new Conversation(this, "demo-conversation", {
      actionOnDestroy: "none",
      isPrivate: false,
      name: "second-channel",
    })
  }
} 

const app = new App();

new MyStack(app, "teams-pov", {
  slackToken: new TerraformVariable(,"SLACK_TOKEN", {
    type: 'string'
  })
})

app.synth();
