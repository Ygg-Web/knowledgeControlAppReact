import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, Checkbox, IconButton, TextField, Tooltip } from "@mui/material";
import AddBoxSharpIcon from "@mui/icons-material/AddBoxSharp";
import DeleteIcon from "@mui/icons-material/Delete";
import { QuestionItem } from "../../features/task/types/task";
import DykTypography from "./typography/DykTypography";
import DykButton from "./buttons/DykButton";

interface Props {
  header: string;
  onSaveQuestion: (question: QuestionItem) => void;
}

class Answer {
  id = Date.now();
  text = "";
  valid = true;
}
export default function TheDialog({ header, onSaveQuestion }: Props) {
  const [open, setOpen] = React.useState(false);
  const [answers, setAswers] = React.useState<Answer[]>([]);
  const [question, setQuestion] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addAnswer = () => {
    if (answers.length <= 5) {
      setAswers([...answers, new Answer()]);
    } else {
      console.log("max 5 вариантов ответа");
    }
  };

  const handleQuestion = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("test", e);
    setQuestion(e.target.value);
  };

  const handleInputChange = (id: number, value: string) => {
    setAswers((prevAnswers) =>
      prevAnswers.map((answer) =>
        answer.id === id ? { ...answer, text: value } : answer
      )
    );
  };

  const handleCheckboxChange = (
    id: number,
    value: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAswers((prevAnswers) =>
      prevAnswers.map((answer) =>
        answer.id === id ? { ...answer, valid: value.target.checked } : answer
      )
    );
  };

  const deleteAnswer = (id: number) => {
    setAswers(answers.filter((v) => v.id !== id));
  };

  const onSave = () => {
    onSaveQuestion({
      id: Date.now(),
      question,
      answers,
    });
    handleClose();
  };

  return (
    <>
      <Tooltip title="Добавить вопрос">
        <IconButton
          aria-label="add"
          size="large"
          onClick={handleClickOpen}
          disableRipple
          sx={{p: 0, mx: 0, mb: 1}}
        >
          <AddBoxSharpIcon fontSize="inherit" />
        </IconButton>
      </Tooltip>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="sm"
        PaperProps={{
          sx: {
            maxHeight: 900,
          },
        }}
      >
        <DialogTitle component="div" variant="body1">{header}</DialogTitle>
        <DialogContent
          dividers
          sx={{
            maxHeight: 400,
          }}
        >
          <TextField
            placeholder="Вопрос"
            value={question}
            name="question"
            onChange={handleQuestion}
            fullWidth
            size="small"
            sx={{ my: 1 }}
          />
          <DykTypography text="Создайте варианты ответов на вопрос" variant="body2" align="center"/>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Tooltip title="Добавить ответ">
              <IconButton
                aria-label="add"
                size="large"
                onClick={addAnswer}
                disableRipple
                sx={{ p: 0, my: 1}}
              >
                <AddBoxSharpIcon fontSize="inherit" />
              </IconButton>
            </Tooltip>
          </Box>
          {answers.map((answer) => (
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Checkbox
                checked={answer.valid}
                onChange={(e) => handleCheckboxChange(answer.id, e)}
                disableRipple
              />
              <TextField
                key={`${answer.id}`}
                value={answer.text}
                onChange={(e) => handleInputChange(answer.id, e.target.value)}
                fullWidth
                size="small"
                sx={{ my: 1 }}
              />
              <IconButton
                aria-label="delete"
                size="large"
                onClick={() => deleteAnswer(answer.id)}
                disableRipple
              >
                <DeleteIcon fontSize="inherit" />
              </IconButton>
            </Box>
          ))}
        </DialogContent>
        <DialogActions>
          {/* TODO: autoFocus */}
          <DykButton title="Сохранить" onClick={onSave} />
          <DykButton title="Отмена" onClick={handleClose} />
        </DialogActions>
      </Dialog>
    </>
  );
}
