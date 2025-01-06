import React from "react";
import PreviewCard from "../components/UI/PreviewCard";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const items = [
    {
      id: 5,
      img: "",
      title: "test",
      description: "asdsa asdasdasd asdsadas asdasd asdasd",
    },
    {
      id: 1,
      img: "",
      title: "test1",
      description: "asdsa asdasdasd asdsadas asdasd asdasd",
    },
    {
      id: 2,
      img: "",
      title: "test2",
      description: "asdsa asdasdasd asdsadas asdasd asdasd",
    },
    {
      id: 3,
      img: "",
      title: "test3",
      description: "asdsa asdasdasd asdsadas asdasd asdasd",
    },
    {
      id: 4,
      img: "",
      title: "test4",
      description: "asdsa asdasdasd asdsadas asdasd asdasd",
    },
  ];

  const data: any[] = items;
  const onClickNoData = () => {
    navigate("/constructor");
  };

  return (
    <section>
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
            my: 2,
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {data.map((item) => (
            <PreviewCard key={item.id} />
          ))}
        </Box>
      )}
    </section>
  );
}
