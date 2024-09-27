// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

// ABOUT THIS NODE.JS SAMPLE: This sample is part of the SDK for JavaScript Developer Guide topic at
// https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide//ec2-example-elastic-ip-addresses.html

// snippet-start:[ec2.JavaScript.Addresses.releaseAddress]
// Load the AWS SDK for Node.js
var AWS = require("aws-sdk");
// Set the region
AWS.config.update({ region: "REGION" });

// Create EC2 service object
var ec2 = new AWS.EC2({ apiVersion: "2016-11-15" });

var paramsReleaseAddress = {
  AllocationId: "ALLOCATION_ID",
};

// Disassociate the Elastic IP address from EC2 instance
ec2.releaseAddress(paramsReleaseAddress, function (err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Address released");
  }
});
// snippet-end:[ec2.JavaScript.Addresses.releaseAddress]
