import "../styles/editor.css";
import React from "react";

import Skills from "../components/editor_comp/Skills";
import PersonalInfo from "../components/editor_comp/personalInfo";

export default function Editor() {
  return (
    <div className="editor">
      <PersonalInfo />
      <Skills />
    </div>
  );
}
