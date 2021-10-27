import React from "react";
import PersonalInfo from "../components/view_comp/personalInfo";

import About from "../components/view_comp/about";

import { currentMode } from "../components/Navbar";

export default function View() {
  let mode = currentMode.useValue();

  return (
    <div className={`viewer ${mode === "view" ? " " : "hideDiv"}`}>
      <PersonalInfo />
      <About />
    </div>
  );
}
