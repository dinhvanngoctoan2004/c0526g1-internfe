import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../redux/action";

const Header = () => {
  const account = useSelector((state) => state.user);

   const dispatch = useDispatch();


   const handelLogout = async()=>{
   
    const isSucset = dispatch(logout())
   }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={`/`}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to={`/studen/add`} className="nav-link">
                Add Student
              </Link>
            </li>
            <li className="nav-item">
              <Link to={`/login`} className="nav-link">
                {account ? `${account.id}` : `login`}
              </Link>
            </li>
            {account && (
              <li
              onClick={()=>{
                handelLogout()
              }}
                style={{
                  cursor: "pointer",
                }}
                className="nav-item"
              >
                logout
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
