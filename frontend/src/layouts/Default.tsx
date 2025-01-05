import React from "react";
import Container from "@mui/material/Container";
import TheHeader from "../components/header/TheHeader";
import TheFooter from "../components/footer/TheFooter";

export interface LayoutProps {
  children: React.ReactNode;
}

export default function Default({ children }: LayoutProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <TheHeader />
      <main style={{ flex: "0 1 auto", height: "100%" }}>
        <Container
          maxWidth="xl"
          sx={{
            backgroundColor: "black",
            height: "100%",
            color: "white",
            borderBottom: "1px solid #DCDCDC",
            borderTop: "1px solid #DCDCDC",
          }}
        >
          {children}
        </Container>
      </main>
      <TheFooter />
    </div>
  );
}
