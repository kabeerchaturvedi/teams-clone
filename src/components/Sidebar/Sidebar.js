import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SubjectIcon from "@material-ui/icons/Subject";
import AddBoxIcon from "@material-ui/icons/AddBox";
import "./Sidebar.css";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <div className="sidebar_top_left">
          Chat
          <ExpandMoreIcon />
        </div>
        <div className="sidebar_top_right">
          <SubjectIcon />
          <AddBoxIcon />
        </div>
      </div>
      <div className="sidebar_bottom">UP Kabeer 6/2</div>
    </div>
  );
}

export default Sidebar;
