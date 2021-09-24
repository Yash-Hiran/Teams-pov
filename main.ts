import { App, S3Backend, TerraformStack, TerraformVariable } from "cdktf";
import { Construct } from "constructs";
import { Conversation, SlackProvider } from './.gen/providers/slack';

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

 new Conversation(stack, "demo-conversation", {
  actionOnDestroy: "none",
  isPrivate: false,
  name: "first-channel",
})


//  new Usergroup(stack, "slack-group", {
//   handle: "demo-handle",
//   name: "demo-grp"
// })

// new UsergroupChannels(stack, "slack-group-channels", {
//   usergroupId: slackGroup.id,
//   channels: [slackChannel.id]
// })

// new UsergroupMembers(stack, "slack-group-members", {
//   usergroupId: "C02FHH7AU2F",
//   members: ["Yash Hiran", "yash.hiran"]
// })

app.synth();
