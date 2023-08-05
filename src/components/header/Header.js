import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <p>Movie App</p>
        </Link>
      </div>
      <div className="user-image">
        <img
          src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Header;
