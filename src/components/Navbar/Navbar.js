import React from "react";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import MessageIcon from "@material-ui/icons/Message";
import PeopleIcon from "@material-ui/icons/People";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import CallIcon from "@material-ui/icons/Call";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import HelpIcon from "@material-ui/icons/Help";
import SettingsIcon from "@material-ui/icons/Settings";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar_top">
        <NotificationsActiveIcon />
        <h6>Activity</h6>
        <MessageIcon />
        <h6>Chat</h6>

        <PeopleIcon />
        <h6>Teams</h6>

        <CalendarTodayIcon />
        <h6>Calendar</h6>

        <CallIcon />
        <h6>Calls</h6>

        <InsertDriveFileIcon />
        <h6>Files</h6>
      </div>
      <div className="navbar_bottom">
        <HelpIcon />
        <h6>Help</h6>

        <SettingsIcon />
        <h6>Settings</h6>
      </div>
    </div>
  );
}

export default Navbar;
