import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.scss";
import Header from "./components/Header";
import "./styles/global.scss";
import "./index.css";
import Intro from "./components/Intro";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Header />
    <Intro />
  </React.StrictMode>
);
