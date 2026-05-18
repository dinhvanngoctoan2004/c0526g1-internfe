import { Formik, Form, Field, ErrorMessage } from "formik";
import { useEffect, useState } from "react";
import { getAllDataCourse } from "../server/courseServer";
import { getDetailStudent, updateStudent } from "../server/studenServer";
import * as Yup from "yup";
import { useNavigate, useParams } from "react-router-dom";

const UpdateStudent = () => {
  const [DataStudent, setDataStudent] = useState<any>({
    name: "",
    age: "",
    sex: "",
    course: "js",
  });

  const navigate = useNavigate();

  const { id } = useParams();

  const [DataCourse, setDataCourse] = useState<any[]>([]);

  const getDataDetailStudent = async () => {
    const data = await getDetailStudent(id);
    setDataStudent(data);
  };

  useEffect(() => {
    setDataCourse(getAllDataCourse);
    getDataDetailStudent();
    console.log(getDetailStudent(id));
  }, []);

  const handelSumit = (value) => {
    // const newDataStudent = {
    //   ...value,
    //   course: JSON.parse(value.course),
    // };
    updateStudent(id, value);
    navigate(-1);
  };

  const validation = Yup.object({
    name: Yup.string().required("The name cannot be left blank."),
    age: Yup.number().required("The age field cannot be left blank."),
  });

  return (
    <div className="Box_addStuden">
      <h1 className="h2 h1_add">update student</h1>
      <Formik
        enableReinitialize={true}
        initialValues={DataStudent}
        onSubmit={handelSumit}
        validationSchema={validation}
      >
        <Form>
          <div>
            <p>Name</p>
            <Field className="form-control" type="text" name="name" />
            <ErrorMessage
              name="name"
              className="text-danger"
              component={"small"}
            />
          </div>
          <div>
            <p>age</p>
            <Field className="form-control" type="number" name="age" />
            <ErrorMessage
              name="age"
              className={`text-danger`}
              component={"small"}
            />
          </div>
          <div>
            <label>sex</label>
            <div
              style={{
                display: "flex",
                gap: "10px",
              }}
            >
              <Field
                className="form-check-input"
                type="radio"
                name="sex"
                value="Male"
              />
              Male
              <Field
                className="form-check-input"
                type="radio"
                name="sex"
                value="Felmale"
              />
              Felmale
            </div>
            <ErrorMessage name="sex" className="text-danger" />
          </div>
          <div>
            <p>Course</p>
            <Field as="select" className="form-select" name="course">
              {DataCourse?.map((e, index) => (
                <option key={index} value={e.nameCourse}>
                  {e.nameCourse}
                </option>
              ))}
            </Field>
            <ErrorMessage name="course" className="text-danger" />
          </div>
          <button
            style={{ marginTop: "10px" }}
            type={`submit`}
            className="btn btn-success btn-sm"
          >
            update student
          </button>
        </Form>
      </Formik>
    </div>
  );
};
export default UpdateStudent;
