import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { LocaleProvider } from "./context/LocaleContext";
import { RegistrationFormProvider } from "./context/RegistrationFormContext";
import { RegistrationFormRoutes } from "./routes/RegistrationFormRoutes";
import { GlobalStyle } from "./styles";

export const App = () => {
  return (
    <BrowserRouter>
      <LocaleProvider>
        <GlobalStyle />
        <Header />
        <RegistrationFormProvider>
          <RegistrationFormRoutes />
        </RegistrationFormProvider>
        <Footer />
      </LocaleProvider>
    </BrowserRouter>
  );
}

export default App;
