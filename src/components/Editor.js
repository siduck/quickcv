import "../styles/editor.css";
import React from "react";

import Skills from "../components/editor_comp/skills";
import PersonalInfo from "../components/editor_comp/personalInfo";
import WorkExperience from "../components/editor_comp/workExperience";
import Education from "../components/editor_comp/education";

import { currentMode } from "../components/Navbar";

export default function Editor() {
  let mode = currentMode.useValue();

  return (
    <div className={`editor ${mode === "edit" ? " " : "hideDiv"}`}>
      <PersonalInfo />
      <Skills />
      <WorkExperience />
      <Education />
    </div>
  );
}
