import { Link } from "react-router-dom";
import "./index.css";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="nav-bar-cont">
      <ul className="nav-bar">
        <li>
          <Link to="/">
            <img
              className="nav-logo"
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="web logo"
            />
          </Link>
        </li>

        <li>
          <Link className="n-link" to="/">
            Home
          </Link>
          <Link className="n-link" to="/jobs">
            jobs
          </Link>
        </li>

        <li>
          <button
            className="btn btn-primary"
            onClick={() => {
              Cookies.remove("jwtToken");
              navigate("/login");
            }}
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
