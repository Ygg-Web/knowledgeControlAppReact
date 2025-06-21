import React from "react";
import Container from "@mui/material/Container";
import TheHeader from "../components/appHeader/TheHeader";
import TheFooter from "../components/appFooter/TheFooter";
import { createTheme, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

export interface LayoutProps {
  children: React.ReactNode;
}

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function Default({ children }: LayoutProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <TheHeader />
        <main
          style={{
            flex: "auto",
            height: "100%",
            borderBottom: "1px solid #DCDCDC",
            borderTop: "1px solid #DCDCDC",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Container
            maxWidth="xl"
            sx={{
              flex: "auto",
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}
          >
            {children}
          </Container>
        </main>
        <TheFooter />
      </div>
    </ThemeProvider>
  );
}
