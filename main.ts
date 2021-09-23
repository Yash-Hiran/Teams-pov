import { Construct } from "constructs";
import { App, S3Backend, TerraformStack } from "cdktf";

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
new MyStack(app, "teams-poc");
app.synth();
