import React from "react";
import PersonalInfo from "../components/view_comp/personalInfo";

import About from "../components/view_comp/about";

export default function View() {
  return (
    <div className="viewer">
      <PersonalInfo />
      <About />
    </div>
  );
}
