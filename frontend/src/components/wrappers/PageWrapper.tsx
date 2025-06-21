import { Box } from "@mui/material";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function PageWrapper({ children }: Props) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </Box>
  );
}
