import "./buoi4_hook.css";
import {
  loadDanhSachSV,
  themSinhVien,
  xoaDanhSachSinhVien,
} from "../server/server";
import { use, useEffect, useRef, useState } from "react";
import XacNhanXoa from "./xacNhanXoa";
export default function Bai1Hook_buoi4() {
  const [DataSinhVien, setDataSinhVien] = useState<any[]>([]);
  const [hienXNXoa, sethienXNXa] = useState(false);
  const [idXoa, setidXoa] = useState(0);
  const [tenSVXoa, settenSVXoa] = useState("");

  const input_hoTen = useRef<HTMLInputElement>(null);
  const input_namSinh = useRef<HTMLInputElement>(null);
  const input_gioiTinh = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setDataSinhVien(loadDanhSachSV);
  }, []);

  const handelThem = () => {
    const id = DataSinhVien.length + 1;
    const hoTen = input_hoTen.current?.value || "";
    const gioiTinh = input_gioiTinh.current?.value || "";
    const namSinh = input_namSinh.current?.value || "";
    themSinhVien(id, hoTen, namSinh, gioiTinh);
    setDataSinhVien(loadDanhSachSV);
    input_hoTen.current!.value = "";
    input_namSinh.current!.value = "";
    input_gioiTinh.current!.value = "";
  };

  const handelXoa = () => {
    xoaDanhSachSinhVien(idXoa);
    setDataSinhVien(loadDanhSachSV);
    sethienXNXa(false);
  };

  return (
    <>
      {hienXNXoa && (
        <XacNhanXoa
          tat={() => sethienXNXa(false)}
          XacNhanXoa={handelXoa}
          tenSinhVien={tenSVXoa}
        />
      )}
      <p className="Bai1_Ten">Bài 1</p>
      <div className="Bai1_boxCha">
        {/* phần thêm */}
        <div>
          <h2 className="Bai1_h2">Danh Sách Sinh Viên</h2>
          <div className="Bai1_boxInput">
            <input
              ref={input_hoTen}
              className="Bai1_Input"
              type="text"
              placeholder="nhập tên sinh viên"
            />
            <input
              ref={input_namSinh}
              className="Bai1_Input"
              type="number"
              placeholder="nhập năm sinh của sinh viên"
            />
            <input
              ref={input_gioiTinh}
              className="Bai1_Input"
              type="text"
              placeholder="nhập giới tính"
            />
            <button
              onClick={() => {
                handelThem();
              }}
              className="Bai1_buttonThem btn btn-success"
            >
              Thêm sinh viên
            </button>
          </div>
        </div>
        {/* phần danh sách sinh viên */}
        <div className="Bai1_boxBang">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">Họ Tên</th>
                <th scope="col">Năm Sinh</th>
                <th scope="col">Giới tính</th>
                <th style={{ whiteSpace: "nowrap" }} scope="col">
                  Chức năng
                </th>
              </tr>
            </thead>
            <tbody>
              {DataSinhVien &&
                DataSinhVien.map((item, index) => (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{item.hoTen}</td>
                    <td>{item.namSinh}</td>
                    <td>{item.gioiTinh}</td>
                    <td style={{ width: "1%" }}>
                      <button
                        onClick={() => {
                          sethienXNXa(true);
                          setidXoa(index);
                          settenSVXoa(item.hoTen);
                        }}
                        type="button"
                        className="btn btn-danger"
                      >
                        Danger
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
