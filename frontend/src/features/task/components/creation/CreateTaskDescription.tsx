import { TextField } from "@mui/material";
import React from "react";
import ButtonUploadImage from "../ButtonUploadImage";

export default function CreateTaskDescription({
  name,
  inputName,
  description,
  inputDescription,
  image,
  uploadImage,
}: any) {
  return (
    <>
      <ButtonUploadImage image={image} uploadImage={uploadImage} />
      <TextField
        placeholder="Название"
        value={name}
        name="name"
        onChange={inputName}
        fullWidth
        size="small"
        sx={{ my: 1 }}
      />
      <TextField
        placeholder="Описание"
        value={description}
        multiline
        name="description"
        fullWidth
        onChange={inputDescription}
        size="small"
        sx={{ my: 1 }}
      />
    </>
  );
}
