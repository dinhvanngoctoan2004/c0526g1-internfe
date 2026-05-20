import { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { login } from "../../redux/action";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";

const Login = () => {
  const inputEmail = useRef(null);
  const inputPassword = useRef(null);
  const natigate = useNavigate();
  const dispatch = useDispatch();

  const handelLogin = async () => {
    const email = inputEmail.current?.value.trim() || "";
    const password = inputPassword.current?.value.trim() || "";
    const isSucset = dispatch(login(email,password))
  };

  return (
    <section
      style={{
        width: "100%",
        padding: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "700px",
          display:"flex",
          flexDirection:"column",
          gap:"10px"
        }}
      >
        <div>

          <label for="inputPassword5" className="form-label">Email</label>
<input ref={inputEmail} type="email" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock"></input>
        </div>
        <div>

          <label for="inputPassword5" className="form-label">Password</label>
<input ref={inputPassword} type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock"></input>
        </div>
        

        <Button
          onClick={() => {
            handelLogin();
          }}
        >
          Submit
        </Button>
      </div>
    </section>
  );
};
export default Login;
