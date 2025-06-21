import React, { useState } from "react";
import CardWrapper from "./components/CardWrapper";
import { Box, CardContent } from "@mui/material";
import CreateTaskDescription from "./components/creation/CreateTaskDescription";
import DykTypography from "../../components/UI/typography/DykTypography";
import CreateTaskQuestions from "./components/creation/CreateTaskQuestions";
import { QuestionItem } from "./types/task";
import PreviewTask from "./components/PreviewTask";
import CreateTaskReady from "./components/creation/CreateTaskReady";
import CreateTaskStepper from "./components/creation/CreateTaskStepper";
import CreateTaskActions from "./components/creation/CreateTaskActions";

const steps = ["Описание", "Создание вопросов", "Проверка"];

const enum StepName {
  Description,
  Questions,
  Preview,
}

export default function TaskCreate() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  const [image, setImage] = useState("");
  const [questions, setQuestions] = useState<QuestionItem[]>([]);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState: { name: string; description: string }) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSaveQuestion = (question: QuestionItem) => {
    setQuestions([...questions, question]);
  };

  const onSave = () => {};

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const item = {
    id: 2,
    img: "",
    name: "test2",
    description: "asdsa asdasdasd asdsadas asdasd asdasd",
    rating: 5,
    author: "unknown",
  };

  return (
    <CardWrapper>
      <CardContent
        sx={{ height: "500px", display: "flex", flexDirection: "column" }}
      >
        <CreateTaskStepper steps={steps} activeStep={activeStep} />
        {activeStep === steps.length ? (
          <CreateTaskReady
            disabled={activeStep === 0}
            handleBack={handleBack}
            onSave={onSave}
          />
        ) : (
          <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <Box sx={{ flex: 1 }}>
              {activeStep === StepName.Description && (
                <CreateTaskDescription
                  name={formData.name}
                  description={formData.description}
                  inputName={handleChangeInput}
                  inputDescription={handleChangeInput}
                  image={image}
                  uploadImage={setImage}
                />
              )}
              {activeStep === StepName.Questions && (
                <Box>
                  <DykTypography
                    text="Cоздайте вопросы для теста"
                    align="center"
                    variant="body2"
                  />
                  <CreateTaskQuestions
                    questions={questions}
                    onSaveQuestion={onSaveQuestion}
                  />
                </Box>
              )}
              {activeStep === StepName.Preview && (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <DykTypography
                    text=" Ваш тест почти готов, можете посмотреть что получилось!"
                    align="center"
                    sx={{ mb: 2 }}
                    variant="body2"
                  />
                  <PreviewTask key={item.id} task={item} />
                </Box>
              )}
            </Box>
            <CreateTaskActions
              textApplyBtn={
                activeStep === steps.length - 1 ? "Завершить" : "Далее"
              }
              disabled={activeStep === 0}
              handleBack={handleBack}
              handleNext={handleNext}
            />
          </Box>
        )}
      </CardContent>
    </CardWrapper>
  );
}
