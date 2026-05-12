import { useRef } from "react";

export default function Bai3() {
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
    </div>
  );
}
