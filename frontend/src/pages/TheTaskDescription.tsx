import React from "react";
import TaskDescription from "../features/task/TaskDescription";

export default function Task() {
  const task: any = {
    id: 3,
    img: "",
    name: "test3",
    description: "asdsa asdasdasd asdsadas asdasd asdasd",
    rating: 5,
    count: 10,
    author: "unknown",
  };

  return <TaskDescription task={task} />;
}
