import "../styles/editor.css";
import React, { useState } from "react";

import { personalData } from "../cvData"; // save overall input data here

function Input(props) {
  return <input type="text" placeholder={props.info} />;
}

function PersonalInfo() {
  return (
    <div className="personalInfo">
      <h3>Personal Information</h3>

      <Input info="Name" />
      <Input info="Title" />
      <Input info="Phone" />
      <Input info="Email" />
      <Input info="ImageUrl" />
      <Input info="Address" />

      <h3>About me</h3>
      <Input info="Description" />
    </div>
  );
}

function Skill(props) {
  return (
    <>
      {Array.from(Array(props.list)).map(() => (
        <div className="skillItem">
          <Input info="your skill" />
          <Input info="percentage" />
        </div>
      ))}
    </>
  );
}

function Skills() {
  const [skillslist, set_numberOfSkills] = useState(0);

  return (
    <div className="skillsInput">
      <h3>Skills</h3>
      <Skill list={skillslist} />

      <button onClick={() => set_numberOfSkills(skillslist + 1)}>add</button>
    </div>
  );
}

function WorkExperience(props) {
  return (
    <>
      {Array.from(Array(props.list)).map(() => (
        <div className="workExpList">
          <Input info="Company" />
          <Input info="Position" />
          <Input info="City" />
          <Input info="From year" />
          <Input info="To year" />
          <br />
        </div>
      ))}
    </>
  );
}

function WorkExperiences() {
  const [workExpList, set_numberOfWorkExps] = useState(0);

  return (
    <div className="iteminfolists">
      <h3>Work Experience</h3>
      <WorkExperience list={workExpList} />

      <button onClick={() => set_numberOfWorkExps(workExpList + 1)}>add</button>
    </div>
  );
}

export default function Editor() {
  return (
    <div className="editor">
      <PersonalInfo />
      <Skills />
      <WorkExperiences />
    </div>
  );
}
