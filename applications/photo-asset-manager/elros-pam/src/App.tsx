﻿// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { Alert } from "@cloudscape-design/components";
import AppLayout from "@cloudscape-design/components/app-layout";
import { useEffect } from "react";

import "./App.css";
import LoginNavigation from "./LoginNavigation";
import { useStore } from "./store";
import LabelsLayout from "./LabelsLayout";

function App() {
  const { authStatus, checkAuth } = useStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return (
    <>
      <LoginNavigation title="Photo Asset Management" />
      <AppLayout
        toolsHide={true}
        navigationHide={true}
        contentType="cards"
        content={<LabelsLayout />}
        notifications={
          authStatus !== "signed_in" && (
            <Alert type="warning">
              Log in to view, upload, and download images.
            </Alert>
          )
        }
      />
    </>
  );
}

export default App;
