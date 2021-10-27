import React from "react";
import { userSkills, workExperience } from "../store";

import { personalInfo_data } from "../editor_comp/personalInfo";
import { education_data } from "../editor_comp/education";
import { workExperience_data } from "../editor_comp/workExperience";

function AboutUser() {
  let tmp = personalInfo_data.useValue();

  return (
    <div className="aboutDesc">
      <h2 className="aboutTitle">ABOUT ME</h2>
      {tmp.Description}
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
  let tmp = education_data.useValue();

  return (
    <div className="educationViewer">
      <h2 className="aboutEducation">EDUCATION</h2>

      <div className="aboutEducation_list">
        {tmp.map((item) => (
          <div className="educationItem">
            <div className="timeTitle">
              {`${item.From} - ${item.To} `}
            </div>

            <div className="contentText">
              <div>
                {item.University}
              </div>
              <div>
                {item.Qualification}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function WorkExperienceInfo() {
  let tmp = workExperience_data.useValue();

  return (
    <div className="workExperienceViewer">
      <h2 className="aboutWorkExperience">WORK EXPERIENCE</h2>

      <div className="aboutWorkExperience_List">
        {tmp.map((item) => (
          <div className="workExperienceItem">
            <div className="timeTitle">
              {`${item.From} - ${item.To} `}
            </div>

            <div className="contentText">
              <div>
                {item.Position}
              </div>
              <div>
                {item.Company}
              </div>
            </div>
          </div>
        ))}
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
