import { Box, TextField } from "@mui/material";
import React from "react";

interface Props {
  search: string;
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function TaskControllers({ search, onSearch }: Props) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextField
        placeholder="Поиск"
        value={search}
        name="search"
        onChange={onSearch}
        size="small"
        sx={{ width: "250px" }}
        type="text"
      />
    </Box>
  );
}
