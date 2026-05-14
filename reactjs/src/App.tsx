import { Children, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";

import Bai1 from "./tong_quan_reactjs/bai1.js";
import Bai2 from "./tong_quan_reactjs/bai2.js";
import Bai3 from "./tong_quan_reactjs/bai3.js";
import Bai1Class from "./class_componan/Bai1Class.jsx";
import { Bai2Class } from "./class_componan/Bai2Class.jsx";
import { Bai3Class } from "./class_componan/Bai3Class.jsx";
import Bai1Hook_buoi4 from "./buoi4_hook/Bai1Hook_buoi4.js";
import { Bai2Hook_buoi4 } from "./buoi4_hook/Bai2Hook_buoi4.js";

function App() {
  return (
    <>
      {/* /////////// buổi 2 ////////////// */}
      {/* <Bai1 />
      <Bai2 />
      <Bai3 /> */}
      {/* /////////////buổi 3 ////////////////*/}
      {/* <Bai1Class />
      <Bai2Class />
      <Bai3Class /> */}
      {/* ///////////// buổi 4 ///////////////////// */};
      <Bai1Hook_buoi4 />
      <Bai2Hook_buoi4 />
    </>
  );
}

export default App;
