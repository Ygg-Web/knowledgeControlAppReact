import React, { useState } from "react";
import CardWrapper from "./components/CardWrapper";
import {
  CardActions,
  CardContent,
  Divider,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import DykButton from "../../components/UI/buttons/DykButton";
import { QuestionItem } from "./types/task";

interface Props {
  question: QuestionItem;
  onAnswer: <T>(event: React.MouseEvent<T, MouseEvent>) => void;
}

export default function TaskQuestions({ question, onAnswer }: Props) {
  const [value, setValue] = useState("");

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("change");
    setValue((event.target as HTMLInputElement).value);
  };
  return (
    <CardWrapper>
      <CardContent
        sx={{ display: "flex", flexDirection: "column", px: 2, pt: 2, pb: 0 }}
      >
        <TextField
          id="outlined-required"
          defaultValue={question.question}
          size="small"
          sx={{ mb: 1 }}
        />
        <RadioGroup
          name="questions"
          value={value}
          onChange={handleRadioChange}
          sx={{ m: 2 }}
        >
          {question.answers.map((answer) => (
            <>
              <FormControlLabel
                key={answer.id}
                value={answer.text}
                label={answer.text}
                control={<Radio disableRipple />}
              />
              <Divider variant="middle" sx={{ mx: 4 }} />
            </>
          ))}
        </RadioGroup>
      </CardContent>
      <CardActions sx={{ justifyContent: "flex-end", mx: 1, mb: 2 }}>
        <DykButton title="Ответить" onClick={onAnswer} />
        <DykButton title="Назад" />
      </CardActions>
    </CardWrapper>
  );
}
