import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../images/logo.svg";
import { AuthContext } from "../../contexts/AuthProvider";

const NavSection = () => {

  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(err => console.log(err));
  }
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src={logo} className="app-logo" alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link active nav-style"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/allProperty" className="nav-link nav-style">
                  All Properties
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/addProperty" className="nav-link nav-style">
                  Add Property
                </Link>
              </li>
            </ul>

            {
              user?.uid ?
                <>
                  <span className="navbar-text">
                    <Link to="/dashboard" className="nav-link nav-style">
                      Dashboard
                    </Link>
                  </span>
                  <span className="navbar-text">
                    <Link>
                      <button onClick={handleLogOut} className="nav-button">Logout</button>
                    </Link>
                  </span>
                </>
                :
                <>
                  <span className="navbar-text">
                    <Link to="/logIn">
                      <button className="nav-button">Login</button>
                    </Link>
                  </span>
                  <span className="navbar-text ms-lg-3 ms-md-3 ms-sm-0">
                    <Link to="/signUp">
                      <button
                        className="nav-button"
                        style={{ backgroundColor: "#7065f0", color: "White" }}
                      >
                        SignUp
                      </button>
                    </Link>
                  </span>
                </>
            }

          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavSection;