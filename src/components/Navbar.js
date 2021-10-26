import React from "react";
import { AppWindow, Download, Pencil } from "phosphor-react";

import "../styles/navbar.css";

export function ModeSwitcher(props) {
  return (
    <div className="modeswitcher">
      <div
        onClick={props.editMode}
        className="editBtn"
      >
        <Pencil className="editIcon" size={24} weight="fill" />
        Edit
      </div>

      <div onClick={props.viewMode} className="viewBtn">
        <AppWindow className="viewIcon" size={24} weight="fill" />
        View
      </div>
    </div>
  );
}

function Savebtn() {
  return (
    <div className="savebtn">
      <Download className="saveIcon" size={24} weight="fill" />
      Download
    </div>
  );
}

export default function Navbar(props) {
  return (
    <div className="navbar">
      <h2>
        CV Create
      </h2>

      <ModeSwitcher editMode={props.setEditMode} viewMode={props.setViewMode} />
      <Savebtn />
    </div>
  );
}
