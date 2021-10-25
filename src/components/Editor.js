import "../styles/editor.css";
import React from "react";

import Skills from "../components/editor_comp/skills";
import PersonalInfo from "../components/editor_comp/personalInfo";
import WorkExperience from "../components/editor_comp/workExperience";
import Education from "../components/editor_comp/education";

export default function Editor() {
  return (
    <div className="editor">
      <PersonalInfo />
      <Skills />
      <WorkExperience />
      <Education />
    </div>
  );
}
