import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand fs-3" to="/">BD Online Voting Ststem</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link fs-5" to="/user-login">User Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-5" to="/admin-login">Admin Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-5" to="/create-account">Create Account</Link>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  );
};

export default Header;