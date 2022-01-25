import React from "react";
import "./styles.scss";
import Avatar from "@mui/material/Avatar";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__wrapper">
        <div className="navbar__left">
          <h2 className="logo">Dashboard</h2>
        </div>
        <div className="navbar__right">
          <Avatar src="/broken-image.jpg" sx={{ width: 34, height: 34 }} />
          <p className="user">Usama Serag</p>
          <KeyboardArrowDownIcon />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
