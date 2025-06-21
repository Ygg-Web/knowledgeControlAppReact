import { Box, TextField } from "@mui/material";
import React from "react";
import TheDialog from "../../../../components/UI/TheDialog";
import { QuestionItem } from "../../types/task";

interface Props {
  questions: QuestionItem[],
  onSaveQuestion: (question: QuestionItem) => void;
}
export default function CreateTaskQuestions({
  questions,
  onSaveQuestion,
}: Props) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        m: 1,
      }}
    >
      <TheDialog header="Создание вопроса" onSaveQuestion={onSaveQuestion} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        {questions.map((item) => (
          <TextField
            id={`${item.id}${item.question}`}
            defaultValue={item.question}
            size="small"
            fullWidth
            sx={{ mb: 1 }}
            slotProps={{
              input: {
                readOnly: true,
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
