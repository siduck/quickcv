import React from "react";
import { AppWindow, Download, Pencil } from "phosphor-react";
import "../styles/navbar.css";

import { newRidgeState } from "react-ridge-state";

export const currentMode = newRidgeState("edit");

export function ModeSwitcher() {
  let [mode, setMode] = currentMode.use();

  return (
    <div className="modeswitcher">
      <div
        onClick={() => setMode("edit")}
        className={`editBtn ${
          mode === "edit" ? "clickedModeBtn" : "unClickedModeBtn"
        }
        `}
      >
        <Pencil className="editIcon" size={24} weight="fill" />
        Edit
      </div>

      <div
        onClick={() => setMode("view")}
        className={`viewBtn ${
          mode === "view" ? "clickedModeBtn" : "unClickedModeBtn"
        }
        `}
      >
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

export default function Navbar() {
  return (
    <div className="navbar">
      <h2>
        CV Create
      </h2>

      <ModeSwitcher />
      <Savebtn />
    </div>
  );
}
