// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { describe, it, expect, vitest, beforeAll, afterAll } from "vitest";
import { listGroups } from "../actions/list-groups.js";
import { getUniqueName } from "@aws-doc-sdk-examples/lib/utils/util-string.js";
import { createGroup } from "../actions/create-group.js";
import { deleteGroup } from "../actions/delete-group.js";

describe("List groups", () => {
  const groupName = getUniqueName("test-group");

  beforeAll(async () => {
    await createGroup(groupName);
  });

  afterAll(async () => {
    await deleteGroup(groupName);
  });

  it("should list user groups", async () => {
    const mockLog = vitest.fn((x) => console.log(x));

    for await (const group of listGroups()) {
      mockLog(group.GroupName);
    }

    expect(mockLog).toHaveBeenCalledWith(groupName);
  });
});
