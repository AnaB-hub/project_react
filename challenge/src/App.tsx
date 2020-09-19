import React from "react";

import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import GlobalStyles from "../src/style/global";

import Routes from "./routes";

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Routes />
      <ToastContainer />
    </BrowserRouter>
    <GlobalStyles />
  </>
);

export default App;
