import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("/");

  const handleChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
      <div className="container-fluid px-4 py-1 justify-content-between">
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img src="/Images/axios1.png" alt="axios_logo" className="img-fluid nav-logo" />
        </Link>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navItems"
          aria-controls="navItems"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navItems">
          <ul className="navbar-nav me-auto my-2 mb-lg-0">
            <li className="nav-item">
              <Link
                to="/"
                onClick={() => handleChange("/")}
                className={`nav-link ${activeTab === "/" ? "active" : ""}`}
              >
                Home
              </Link>
            </li>
          </ul>
          <Link to="/addUser" onClick={() => handleChange("/addUser")}>
            <button className="btn btn-light me-2">Add User</button> 
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
