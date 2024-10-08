// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

/*
ABOUT THIS NODE.JS EXAMPLE: This example works with the AWS SDK for JavaScript version 2 (v2).

Purpose:
admin-enable-user.js demonstrates how an administrator can enable a user in Amazon Cognito.

Inputs:
 - USERPOOLID
 - EMAIL

*/

// snippet-start:[cognito.JavaScript.admin-enable-user-v2]
const aws = require("aws-sdk");
/*Initializing CognitoIdentityServiceProvider from AWS SDK JS*/
const cognito = new AWS.CognitoIdentityServiceProvider({
  apiVersion: "2016-04-18",
});

const USERPOOLID = "your Cognito User Pool ID";

exports.handler = async (event, context) => {
  const EMAIL = event.email;
  const cognitoParams = {
    UserPoolId: USERPOOLID,
    Username: EMAIL,
  };

  let response = await cognito.adminEnableUser(cognitoParams).promise();
  console.log(JSON.stringify(response, null, 2));
};
// snippet-end:[cognito.JavaScript.admin-enable-user-v2]
