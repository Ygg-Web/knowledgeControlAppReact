import { Box } from "@mui/material";
import React from "react";

export default function NotFound() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
      }}
    >
      Такой страницы не существует
    </Box>
  );
}
