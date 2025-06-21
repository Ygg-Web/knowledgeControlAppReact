import React from "react";
import { useNavigate } from "react-router-dom";
import { CardActions, CardContent } from "@mui/material";
import CardWrapper from "./components/CardWrapper";
import DykTypography from "../../components/UI/typography/DykTypography";
import DykButton from "../../components/UI/buttons/DykButton";

export default function TaskFinish() {
  const navigation = useNavigate();

  const onRepeat = () => {
    navigation(`/task/questions/3`);
  };

  const onGoHome = () => {
    navigation(`/`);
  };

  return (
    <CardWrapper>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          px: 2,
          py: 4,
        }}
      >
        <DykTypography
          text="Тест завершен!"
          variant="body1"
          sx={{ fontWeight: "bold" }}
        />
        <DykTypography text="Ваш результат: 10/10" variant="body2" />
        <DykTypography text="Поздравляю!" variant="body2" />
      </CardContent>
      <CardActions sx={{ justifyContent: "flex-end", mx: 1, mb: 2 }}>
        <DykButton title="Повторить" onClick={onRepeat} />
        <DykButton title="На главную" onClick={onGoHome} />
      </CardActions>
    </CardWrapper>
  );
}
