import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { handleInputVal, handleSearch } from "../Utility/productSlice.js";
import { Button } from "react-bootstrap";
import { handleModalForm } from "../Utility/userSlice.js";

const Navbar = () => {
    const {inpVal} = useSelector((state)=>state.productSlice)
    const {isAuthnticate} = useSelector((s)=>s.userSlice)
    const dispatch = useDispatch()
    const {pathname} = useLocation()
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-secondary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Logo
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="#">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/dashboard">
                  Dashboard
                </Link>
              </li>
            </ul>
            <div>
              {isAuthnticate ? (
                <Button
                  variant="warning"
                  className="mx-5"
                  onClick={() =>
                    dispatch(handleModalForm({ show: true, formType: "Add" }))
                  }
                >
                  LogOut
                </Button>
              ) : (
                <Button
                  variant="success"
                  className="mx-5"
                  onClick={() =>
                    dispatch(handleModalForm({ show: true, formType: "Add" }))
                  }
                >
                  SignUp
                </Button>
              )}
            </div>
            <div className={`d-${pathname == "/" ? "block" : "none"}`}>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2 bg-white text-dark"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  name="inpVal"
                  value={inpVal}
                  onChange={(e) => dispatch(handleInputVal(e.target.value))}
                />
                <button
                  className="btn btn-success"
                  type="button"
                  onClick={() => dispatch(handleSearch())}
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
