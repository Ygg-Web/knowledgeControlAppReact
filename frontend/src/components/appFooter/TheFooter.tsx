import { Box } from "@mui/material";
import React from "react";

export default function TheFooter() {
  return (
    <footer>
      <Box
        sx={{
          height: 80,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "monospace",
          fontSize: "12px",
        }}
      >
        &copy; 2025 NikitaChepik. Все права защищены.
      </Box>
    </footer>
  );
}
