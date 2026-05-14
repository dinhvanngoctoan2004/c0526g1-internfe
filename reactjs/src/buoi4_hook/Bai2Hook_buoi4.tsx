import { useState } from "react";
import "./buoi4_hook.css";

export const Bai2Hook_buoi4 = () => {
  const [So, setSo] = useState(0);
  const tang = () => {
    setSo((pre) => pre + 1);
  };
  const giam = () => {
    setSo((pre) => pre - 1);
  };
  const reload = () => {
    setSo(0);
  };

  return (
    <>
      <p className="Bai1_Ten">Bài 2</p>
      <div className="Bai2_boxCha">
        <p className="Bai2_number">{So}</p>
        <div className="Bai2_boxButton">
          <button onClick={tang} className="Bai2_button">
            <img
              className="Bai2_imgButton"
              src="https://img.icons8.com/?size=100&id=166&format=png&color=000000"
              alt=""
            />
          </button>
          <button onClick={giam} className="Bai2_button">
            <img
              className="Bai2_imgButton"
              src="https://img.icons8.com/?size=100&id=164&format=png&color=000000"
              alt=""
            />
          </button>
          <button onClick={reload} className="Bai2_button">
            <img
              className="Bai2_imgButton"
              src="https://img.icons8.com/?size=100&id=12491&format=png&color=000000"
              alt=""
            />
          </button>
        </div>
      </div>
    </>
  );
};
