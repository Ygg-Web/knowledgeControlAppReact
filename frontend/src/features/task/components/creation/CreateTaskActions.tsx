import { Box } from "@mui/material";
import React from "react";
import DykButton from "../../../../components/UI/buttons/DykButton";

interface Props {
  disabled: boolean;
  textApplyBtn: string;
  handleBack: () => void;
  handleNext: () => void;
}
export default function CreateTaskActions({
  disabled,
  textApplyBtn,
  handleBack,
  handleNext,
}: Props) {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
      <DykButton title="Назад" disabled={disabled} onClick={handleBack} />
      <Box sx={{ flex: "1 1 auto" }} />
      <DykButton title={textApplyBtn} onClick={handleNext} />
    </Box>
  );
}
