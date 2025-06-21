import { Theme } from "@emotion/react";
import { Button, SxProps } from "@mui/material";
import React from "react";

interface Props {
  title: string;
  fullWidth?: boolean;
  sx?: SxProps<Theme>;
  disabled?: boolean;
  onClick?: <T>(event: React.MouseEvent<T, MouseEvent>) => void;
}

export default function DykButton({ title, fullWidth, sx, disabled, onClick }: Props) {
  return (
    <Button
      variant="outlined"
      fullWidth={fullWidth}
      sx={{
        textTransform: "none",
        fontSize: "14px",
        ...sx,
      }}
      disabled={disabled}
      onClick={onClick}
    >
      {title}
    </Button>
  );
}
