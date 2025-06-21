import { Box } from "@mui/material";
import React from "react";
import PreviewTask from "../task/components/PreviewTask";
import { TaskItem } from "../task/types/task";

export default function TaskList({ data }: { data: TaskItem[] }) {
  return (
    <Box
      sx={{
        my: 1,
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {data.map((item) => (
        <PreviewTask key={item.id} task={item} />
      ))}
    </Box>
  );
}
