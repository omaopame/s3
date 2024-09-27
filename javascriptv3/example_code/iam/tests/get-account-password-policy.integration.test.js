// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { describe, it, expect } from "vitest";
import { getAccountPasswordPolicy } from "../actions/get-account-password-policy.js";

describe("Get account password policy", () => {
  it("should return the password policy", () => {
    expect(() => getAccountPasswordPolicy()).rejects.toThrow(
      "The Password Policy with domain",
    );
  });
});
