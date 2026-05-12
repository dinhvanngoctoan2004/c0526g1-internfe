import { Children, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import Bai1 from "./bai1";
import Bai2 from "./bai2";
import Bai3 from "./bai3";

function App() {
  return (
    <>
      <Bai1 />
      <Bai2 />
      <Bai3 />
    </>
  );
}

export default App;
