// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

/*
ABOUT THIS NODE.JS EXAMPLE: This example works with the AWS SDK for JavaScript version 3 (v3),
which is available at https://github.com/aws/aws-sdk-js-v3. This example is in the 'AWS SDK for JavaScript v3 Developer Guide' at
https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/cross-service-example-dataupload.html.

Purpose:
add_data.js is part of a tutorial demonstrating how to build and deploy an app to submit
data to an Amazon DynamoDB table. To run the full tutorial, see
https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/cross-service-example-submitting-data.html.
add_data.js contains the 'submitData' that submits the the data inputted in the browser to the table.

Inputs (replace in code):
- REGION
- IDENTITY_POOL_ID
- TABLE_NAME
- PHONE_NUMBER

Running the code:
node add_data.js
 */
// snippet-start:[s3.JavaScript.cross-service.addDataV3.complete]
// snippet-start:[s3.JavaScript.cross-service.addDataV3.config]
// Import required AWS SDK clients and commands for Node.js
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

const client = new S3Client({});
 
export const putObjectTest = async () => {
  const command = new PutObjectCommand({
    Bucket: "test-bucket",
    Key: "hello-s3.txt",
    Body: "Hello S3!",
  });

  try {
    const response = await client.send(command);
    console.log(response);
  } catch (err) {
    console.error(err);
  }
};


// Expose the function to the browser
window.putObjectTest = putObjectTest;
// snippet-end:[s3.JavaScript.cross-service.addDataV3.function]
// snippet-end:[s3.JavaScript.cross-service.addDataV3.complete]
