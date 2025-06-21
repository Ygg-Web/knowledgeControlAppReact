import React from "react";
import TaskCreate from "../features/task/TaskCreate";
import PageWrapper from "../components/wrappers/PageWrapper";

export default function Constructor() {
  return (
    <PageWrapper>
      <TaskCreate />
    </PageWrapper>
  );
}
