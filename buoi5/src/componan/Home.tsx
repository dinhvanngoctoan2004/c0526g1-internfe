import { useEffect, useState } from "react";
import { getAllDataStudents, deleteStudent } from "../server/studenServer";
import ConfirmDeletion from "./confirmDeletion";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [studentData, setstudentData] = useState<any[]>([]);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deleteId, setdeleteId] = useState(0);
  const [deleteStudentName, setdeleteStudentName] = useState("");

  const Navigate = useNavigate();

  const handleDeleteStudent = () => {
    deleteStudent(deleteId);
    setstudentData(getAllDataStudents);
    setShowDeleteConfirm(false);
  };

  useEffect(() => {
    setstudentData(getAllDataStudents());
  }, []);

  return (
    <>
      {showDeleteConfirm && (
        <ConfirmDeletion
          close={() => setShowDeleteConfirm(false)}
          confirm={handleDeleteStudent}
          nameStudent={deleteStudentName}
        />
      )}
      <div className="Home_Table">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Sex</th>
              <th scope="col">Course</th>
              <th style={{ whiteSpace: "nowrap" }} scope="col">
                function
              </th>
            </tr>
          </thead>
          <tbody>
            {studentData &&
              studentData.map((item, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.sex}</td>
                  <td>{item.course}</td>
                  <td style={{ width: "1%", display: "flex", gap: "5px" }}>
                    <button
                      onClick={() => {
                        setShowDeleteConfirm(true);
                        setdeleteId(index);
                        setdeleteStudentName(item.name);
                      }}
                      type="button"
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => {
                        Navigate(`/studen/update/${index}`);
                      }}
                      type="button"
                      className="btn btn-primary"
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Home;
