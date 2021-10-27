import React from "react";
import { aboutUser, education, userSkills, workExperience } from "../store";

function AboutUser() {
  return (
    <div className="aboutDesc">
      <h2 className="aboutTitle">ABOUT ME</h2>
      {aboutUser}
    </div>
  );
}

function Askillk() {
  return (
    <div className="skill">
      {userSkills[0]}
    </div>
  );
}

function Skills() {
  return (
    <div className="skillsViewer">
      <h2 className="aboutSkills">SKILLS</h2>

      <div className="aboutSkills_list">
        <Askillk />
        <Askillk />
        <Askillk />
        <Askillk />
      </div>
    </div>
  );
}

function EducationInfo() {
  return (
    <div className="educationViewer">
      <h2 className="aboutEducation">EDUCATION</h2>

      <div className="aboutEducation_list">
        <div className="educationTime">
          {education[0].time}
        </div>

        <div className="universityTitle">
          {education[0].university}
        </div>
        <div className="qualificationTitle">
          {education[0].qualification}
        </div>
      </div>
    </div>
  );
}

function WorkExperienceInfo() {
  return (
    <div className="workExperienceViewer">
      <h2 className="aboutWorkExperience">WORK EXPERIENCE</h2>

      <div className="aboutEducation_list">
        <div className="WorkExperienceItem">
          {workExperience[0].time}
        </div>

        <div className="positionTitle">
          {workExperience[0].position}
        </div>
        <div className="companyTitle">
          {workExperience[0].company}
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="about">
      <div className="aboutLeft">
        <AboutUser />
        <EducationInfo />
      </div>

      <div className="separatorLine">
      </div>

      <div className="aboutRight">
        <Skills />
        <WorkExperienceInfo />
      </div>
    </div>
  );
}

export default About;
