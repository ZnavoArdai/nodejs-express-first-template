import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import Navbarapp from "./components/featuers/NavBar/NavBar";

import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbarapp />

        <Router />
      </BrowserRouter>
    </>
  );
};

export default App;
