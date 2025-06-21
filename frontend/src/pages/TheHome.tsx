import React, { useState } from "react";
import PreviewTest from "../components/UI/PreviewTest";
import { Box, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const items = [
    {
      id: 5,
      img: "",
      name: "test",
      description: "asdsa asdasdasd asdsadas asdasd asdasd",
      rating: 5,
      author: "unknown",
    },
    {
      id: 1,
      img: "",
      name: "test1",
      description: "asdsa asdasdasd asdsadas asdasd asdasd",
      rating: 5,
      author: "unknown",
    },
    {
      id: 2,
      img: "",
      name: "test2",
      description: "asdsa asdasdasd asdsadas asdasd asdasd",
      rating: 5,
      author: "unknown",
    },
    {
      id: 3,
      img: "",
      name: "test3",
      description: "asdsa asdasdasd asdsadas asdasd asdasd",
      rating: 5,
      author: "unknown",
    },
    {
      id: 4,
      img: "",
      name: "test4",
      description: "asdsa asdasdasd asdsadas asdasd asdasd",
      rating: 5,
      author: "unknown",
    },
  ];

  const data: any[] = items;
  const onClickNoData = () => {
    navigate("/constructor");
  };

  const [search, setSearch] = useState("");

  const onSearch = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSearch(e.target.value);
  };
  return (
    <section>
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
      {!data.length ? (
        <Box
          sx={{
            margin: "16px auto",
            display: "flex",
            justifyContent: "center",
            fontFamily: "monospace",
            fontSize: "14px",
          }}
        >
          <Box>
            Данных нет! Для создания теста перейдите в
            <Button
              onClick={onClickNoData}
              sx={{
                textDecoration: "none",
                textTransform: "none",
                backgroundColor: "white",
                mx: 1,
                color: "black",
              }}
            >
              Конструктор
            </Button>
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            my: 1,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {data.map((item) => (
            <PreviewTest key={item.id} task={item} />
          ))}
        </Box>
      )}
    </section>
  );
}
