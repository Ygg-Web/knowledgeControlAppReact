import React from "react";
import { Box } from "@mui/material";
import ButtonUploadFile from "../../../components/uploadFile/ButtonUploadFile";

interface Props {
  image: string;
  uploadImage: (str: string) => void;
}

export default function ButtonUploadImage({ image, uploadImage }: Props) {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <ButtonUploadFile uploadFile={uploadImage}>
          <Box
            sx={{
              width: 500,
              height: 200,
              m: 1,
            }}
          >
            {image ? (
              <img
                src={image}
                alt="image"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "4px",
                }}
              />
            ) : (
              <Box
                sx={{
                  display: "flex",
                  bgcolor: "#757575",
                  height: "100%",
                  p: 2,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 3,
                  fontSize: '14px',
                }}
              >
                Загрузить изображение
              </Box>
            )}
          </Box>
        </ButtonUploadFile>
      </Box>
    </>
  );
}
