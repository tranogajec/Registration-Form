import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { RegistrationFormRoutes } from "./routes/RegistrationFormRoutes";
import { GlobalStyle } from "./styles";

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <RegistrationFormRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
