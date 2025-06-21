import { ButtonBase } from "@mui/material";
import React, { ReactNode } from "react";

interface Props {
  children?: ReactNode,
  uploadFile: (file: string) => void,
}

export default function ButtonUploadFile({ children,  uploadFile}: Props) {

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        uploadFile(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <ButtonBase
      component="label"
      role={undefined}
      tabIndex={-1}
      aria-label="Avatar image"
      sx={{
        borderRadius: "40px",
        "&:has(:focus-visible)": {
          outline: "2px solid",
          outlineOffset: "2px",
        },
      }}
    >
      {children}
      <input
        type="file"
        accept="image/*"
        style={{
          border: 0,
          clip: "rect(0 0 0 0)",
          height: "1px",
          margin: "-1px",
          overflow: "hidden",
          padding: 0,
          position: "absolute",
          whiteSpace: "nowrap",
          width: "1px",
        }}
        onChange={onChange}
      />
    </ButtonBase>
  );
}
