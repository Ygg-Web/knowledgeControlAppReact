import { Box, Step, StepLabel, Stepper } from "@mui/material";
import React from "react";
import DykTypography from "../../../../components/UI/typography/DykTypography";

interface Props {
  steps: string[];
  activeStep: number;
}

export default function CreateTaskHeader({ steps, activeStep }: Props) {
  return (
    <Box>
      <DykTypography text="Создание теста" variant="body1" align="center" />
      <Stepper activeStep={activeStep} sx={{ my: 2 }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
