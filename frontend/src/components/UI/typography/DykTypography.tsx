import { Theme } from "@emotion/react";
import { SxProps, Typography } from "@mui/material";
import React from "react";

interface Props {
  text: string;
  variant?:
    | "button"
    | "caption"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "overline"
    | "inherit";
  sx?: SxProps<Theme>;
  align?: "center" | "left" | "right" | "inherit" | "justify";
}

export default function DykTypography({
  text,
  variant = undefined,
  sx,
  align,
}: Props) {
  return (
    <Typography variant={variant} component="div" sx={sx} align={align}>
      {text}
    </Typography>
  );
}
