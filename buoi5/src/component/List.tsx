import { useEffect, useState } from "react";
import { getAllDataStudents, deleteStudent } from "../server/studenServer";
import ConfirmDeletion from "./confirmDeletion";
import { useNavigate } from "react-router-dom";
import Footed from "./Footed";
const List = () => {
  const [studentData, setstudentData] = useState<any[]>([]);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deleteId, setdeleteId] = useState(0);
  const [deleteStudentName, setdeleteStudentName] = useState("");

  const Navigate = useNavigate();

  const getDataStudent = async () => {
    const newdata = await getAllDataStudents();
    setstudentData(newdata);
  };

  const handleDeleteStudent = async () => {
    await deleteStudent(deleteId);
    setShowDeleteConfirm(false);
    getDataStudent();
  };
  const [seacrch, setsearch] = useState("");
  const handelSearch = (event) => {
    setsearch(event.target.value);
  };
  const filterStudent = studentData.filter((item) => {
    return item.name.toLowerCase().includes(seacrch.toLowerCase());
  });

  useEffect(() => {
    getDataStudent();
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
        <input
          onChange={handelSearch}
          value={seacrch}
          type="text"
          className="form-control"
          style={{ margin: "5px 0px", width: "200px" }}
        />
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
            {filterStudent?.map((item, index) => (
              <tr key={item.id}>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.sex}</td>
                <td>{item.course}</td>
                <td style={{ width: "1%", display: "flex", gap: "5px" }}>
                  <button
                    onClick={() => {
                      setShowDeleteConfirm(true);
                      setdeleteId(item.id);
                      setdeleteStudentName(`${item.name}`);
                    }}
                    type="button"
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => {
                      Navigate(`/studen/update/${item.id}`);
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
export default List;
