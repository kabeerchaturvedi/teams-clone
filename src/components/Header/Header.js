import React from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <ArrowBackIosIcon fontSize="small" />
        <ArrowForwardIosIcon fontSize="small" />
      </div>
      <div className="header_search">
        <SearchIcon />
        <input placeholder="Search or type a command" />
      </div>
      <div className="header_right">
        <AccountCircleIcon  />
      </div>
    </div>
  );
}

export default Header;
