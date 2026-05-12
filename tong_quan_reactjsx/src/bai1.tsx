import { Children, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";

export default function Bai1() {
  const theH1 = React.createElement(
    "h5",
    null,
    "Danh sách trung ương thành phố trung ương của việt nam",
  );
  const Hn = React.createElement("p", null, "+ Hà nội");
  const sg = React.createElement("p", null, "+ Sài Gòn");
  const Dn = React.createElement("p", null, "+ Đà nẵng");
  const Hp = React.createElement("p", null, "+ Hải phòng");
  const ct = React.createElement("p", null, "+ Cần thơ");
  const boxNgoai = React.createElement(
    "div",
    {
      // Thêm class border để bạn thực sự nhìn thấy cái hộp

      style: {
        width: "fit-content",
        height: "fit-content",
        backgroundColor: "#4e635c",
        padding: "10px",
        color: "white",
        border: "1px solid rgba(0, 0, 0, 0.2)",
        font: "bold",
      },
    },
    theH1,
    Hn,
    sg,
    Dn,
    Hp,
    ct,
  );
  return boxNgoai;
}
