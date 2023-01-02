import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { RegistrationFormRoutes } from "./routes/RegistrationFormRoutes";

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <RegistrationFormRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
