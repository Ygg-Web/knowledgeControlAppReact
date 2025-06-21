import React, { useState } from "react";
import PageWrapper from "../../components/wrappers/PageWrapper";
import { Box, Card, CardContent, TextField } from "@mui/material";
import DykTypography from "../../components/UI/typography/DykTypography";
import DykButton from "../../components/UI/buttons/DykButton";
import { useNavigate } from "react-router-dom";

export default function AuthForm({
  isShowSignUp = false,
}: {
  isShowSignUp?: boolean;
}) {
  const navigation = useNavigate();

  const [formData, setFormData] = useState({
    passwd: "",
    email: "",
  });

  const title = isShowSignUp ? "Форма входа" : "Зарегистрируйтесь";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState: { passwd: string; email: string }) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log(formData);
    // Add form submission logic here
  };

  const signUp = () => {
    navigation("/sign-up");
  };

  return (
    <PageWrapper>
      <Card sx={{ width: 400, px: 1 }}>
        <CardContent>
          <DykTypography
            text={title}
            variant="h6"
            align="center"
            sx={{ my: 1 }}
          />
          <TextField
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            size="small"
            sx={{ my: 1 }}
          />
          <TextField
            placeholder="Пароль"
            name="passwd"
            value={formData.passwd}
            onChange={handleChange}
            fullWidth
            size="small"
            sx={{ mt: 1 }}
          />
        </CardContent>
        <Box sx={{ px: 2, pb: 2 }}>
          <DykButton
            title="Войти"
            fullWidth
            sx={{ my: 1 }}
            onClick={handleSubmit}
          />
          {isShowSignUp && (
            <DykButton
              title="Зарегистироваться"
              fullWidth
              sx={{ my: 1 }}
              onClick={signUp}
            />
          )}
        </Box>
      </Card>
    </PageWrapper>
  );
}
