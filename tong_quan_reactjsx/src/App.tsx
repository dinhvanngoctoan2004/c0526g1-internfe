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

  const danhSachSV = [
    {
      hoTen: "Đinh",
      namSinh: 2000,
    },
    {
      hoTen: "Văn",
      namSinh: 2001,
    },
    {
      hoTen: "Ngọc",
      namSinh: 2002,
    },
    {
      hoTen: "Toàn",
      namSinh: 2003,
    },
  ];

  const taiKhona = {
    tenDn: "toan",
    matkhau: "123",
  };

  const input_ten = useRef<HTMLInputElement>(null);
  const input_mk = useRef<HTMLInputElement>(null);

  const dangnhap = () => {
    const ten = input_ten.current?.value.trim() || "";
    const mk = input_mk.current?.value.trim() || "";

    if (ten === taiKhona.tenDn && mk === taiKhona.matkhau)
      alert("đăng nhập thành công");
    else alert("đăng nhập thất bại");
  };

  return (
    <>
      {/* {boxNgoai}

      <div className="boxDanhSachSV">
        <p>Danh Sach Sinh Viên</p>
        <div className="danhSach">
          {danhSachSV.map((e) => (
            <p>
              họ tên: {e.hoTen} | Năm Sinh: {e.namSinh}
            </p>
          ))}
        </div>
      </div>

      <div className=" d-inline-block bg-secondary w-25  p-3 rounded-1 ">
        <p className="text-center fs-3 text-white fw-bold">Đăng Nhập</p>
        <input
          ref={input_ten}
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="nhập tên đăng nhập"
        />
        <input
          ref={input_mk}
          type="password"
          className="form-control mt-2"
          id="exampleFormControlInput1"
          placeholder="nhập mật khẩu của bạn"
        />
        <button
          onClick={() => {
            dangnhap();
          }}
          type="button"
          className="btn btn-success mt-2 container"
        >
          Đăng nhập
        </button>
      </div> */}
      <Bai1 />
      <Bai2 />
      <Bai3 />
    </>
  );
}

export default App;
