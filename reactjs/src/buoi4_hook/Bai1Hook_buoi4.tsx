import "./buoi4_hook.css";
import { loadStudentList, addStudent, deleteStudent } from "../server/server";
import { useEffect, useRef, useState } from "react";
import XacNhanXoa from "./xacNhanXoa";
export default function Bai1Hook_buoi4() {
  const [studentData, setstudentData] = useState<any[]>([]);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deleteId, setdeleteId] = useState(0);
  const [deleteStudentName, setdeleteStudentName] = useState("");

  const input_fullName = useRef<HTMLInputElement>(null);
  const input_birthYear = useRef<HTMLInputElement>(null);
  const input_gender = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setstudentData(loadStudentList);
  }, []);

  const handleAddStudent = () => {
    const id = studentData.length + 1;
    const hoTen = input_fullName.current?.value || "";
    const gioiTinh = input_gender.current?.value || "";
    const namSinh = input_birthYear.current?.value || "";
    addStudent(id, hoTen, namSinh, gioiTinh);
    setstudentData(loadStudentList);
    input_fullName.current!.value = "";
    input_birthYear.current!.value = "";
    input_gender.current!.value = "";
  };

  const handleDeleteStudent = () => {
    deleteStudent(deleteId);
    setstudentData(loadStudentList);
    setShowDeleteConfirm(false);
  };

  return (
    <>
      {showDeleteConfirm && (
        <XacNhanXoa
          tat={() => setShowDeleteConfirm(false)}
          XacNhanXoa={handleDeleteStudent}
          tenSinhVien={deleteStudentName}
        />
      )}
      <p className="Bai1_Ten">Bài 1</p>
      <div className="Bai1_boxCha">
        {/* phần thêm */}
        <div>
          <h2 className="Bai1_h2">Danh Sách Sinh Viên</h2>
          <div className="Bai1_boxInput">
            <input
              ref={input_fullName}
              className="Bai1_Input"
              type="text"
              placeholder="nhập tên sinh viên"
            />
            <input
              ref={input_birthYear}
              className="Bai1_Input"
              type="number"
              placeholder="nhập năm sinh của sinh viên"
            />
            <input
              ref={input_gender}
              className="Bai1_Input"
              type="text"
              placeholder="nhập giới tính"
            />
            <button
              onClick={() => {
                handleAddStudent();
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
              {studentData &&
                studentData.map((item, index) => (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{item.hoTen}</td>
                    <td>{item.namSinh}</td>
                    <td>{item.gioiTinh}</td>
                    <td style={{ width: "1%" }}>
                      <button
                        onClick={() => {
                          setShowDeleteConfirm(true);
                          setdeleteId(index);
                          setdeleteStudentName(item.hoTen);
                        }}
                        type="button"
                        className="btn btn-danger"
                      >
                        Delete
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
