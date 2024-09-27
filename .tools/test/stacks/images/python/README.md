![Stability: Stable](https://img.shields.io/badge/stability-Stable-success.svg?style=for-the-badge)

# Amazon ECR Public Repositories stack

The code in this directory deploys an AWS Cloud Development Kit (AWS CDK) stack for hosting container images in Amazon Elastic Container Registry (Amazon ECR).

This stack can be deployed in isolation; however, it serves a purpose in this repository's [test automation architecture](../README.md).

Specifically, a GitHub action workflow builds and publishes Docker images into the Amazon ECR repositories managed by this stack.

![weathertop-comp-1.png](..%2Farchitecture_diagrams%2Fpng%2Fweathertop-comp-1.png)

---

## System requirements

- NodeJS 18+ (check with `node -v`)
- python 3.11 (check with `python --version`)
- AWS access key and secret for AWS user with permissions to create the preceding resources

---

## AWS CDK setup and deployment

First, install the AWS CDK:

```
npm install -g aws-cdk
```

You can check the toolkit version with this command:

```
cdk --version
```

Now you are ready to create a virtualenv:

```
python3 -m venv .venv
```

Activate your virtualenv:

```
source .venv/bin/activate
```

Install the required dependencies:

```
pip install -r requirements.txt
```

---

## Stack deployment

At this point you can now synthesize the AWS CloudFormation template for this code.

```
cdk synth
```

If everything looks good, go ahead and deploy. This step will actually make
changes to your AWS cloud environment.

```
cdk bootstrap
cdk deploy
```

To clean up, issue this command:

```
cdk destroy
```

To exit the virtualenv python environment:

```
deactivate
```

# Useful commands

- `cdk ls` List all stacks in the app
- `cdk synth` Emit the synthesized CloudFormation template
- `cdk deploy` Deploy this stack to your default AWS account/Region
- `cdk diff` Compare deployed stack with current state
- `cdk docs` Open CDK documentation

---

This code has been tested and verified to run with AWS CDK 2.70.0 (build c13a0f1).
