import React from "react";
import { Link } from "react-router-dom";

const Navabar = () => {
  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i className="fab fa-connectdevelop"></i> Tech Connector
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/profile">Developers</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navabar;
