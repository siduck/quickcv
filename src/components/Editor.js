import "../styles/editor.css";
import React, { Component } from "react";

import uniqid from "uniqid";

function Input(props) {
  return <input type="text" placeholder={props.info} />;
}

function PersonalInfo() {
  return (
    <div className="personalInfo">
      <h3>Personal Information</h3>

      <Input info="Name" />
      <Input info="Title" />
      <Input info="Phone number" />
      <Input info="Email" />
      <Input info="profile image url" />
      <Input info="Address" />
    </div>
  );
}

function Skills(props) {
  return (
    <>
      {Array.from(Array(props.n)).map(() => (
        <div className="skillItem">
          <Input info="your skill" key={uniqid} />
          <Input info="percentage" key={uniqid} />
        </div>
      ))}
    </>
  );
}

class About extends Component {
  constructor() {
    super();
    this.state = {
      skills: 1,
    };

    this.addSkill = this.addSkill.bind(this);
  }

  addSkill() {
    this.setState({
      skills: this.state.skills + 1,
    });
  }

  render() {
    return (
      <div className="aboutMe">
        <h3>About me</h3>
        <Input info="Description" />

        <h3>Skills</h3>
        <Skills n={this.state.skills} />

        <button onClick={this.addSkill}>add</button>
      </div>
    );
  }
}

function InfoItems(props) {
  return (
    <>
      {Array.from(Array(props.n)).map(() => (
        <div
          className={props.type === "workExp"
            ? "workExpList "
            : "educationInfoList"}
        >
          <Input
            info={props.type === "workExp" ? "Company" : "University Name"}
            key={uniqid}
          />
          <Input
            info={props.type === "workExp" ? "Position" : "Degree"}
            key={uniqid}
          />
          <Input info="City" key={uniqid} />
          <Input info="From year" key={uniqid} />
          <Input info="To year" key={uniqid} />
        </div>
      ))}
    </>
  );
}

class WorkExperience extends Component {
  constructor() {
    super();
    this.state = {
      workExp: 0,
      educationInfo: 0,
    };

    this.addWorkExp = this.addWorkExp.bind(this);
    this.addEducationInfo = this.addEducationInfo.bind(this);
  }

  addWorkExp() {
    this.setState({ workExp: this.state.workExp + 1 });
  }

  addEducationInfo() {
    this.setState({ educationInfo: this.state.educationInfo + 1 });
  }

  render() {
    return (
      <div className="workExperienceList">
        <h3>Work Experience</h3>
        <InfoItems n={this.state.workExp} type="workExp" />
        <button onClick={this.addWorkExp}>add</button>

        <h3>Education</h3>
        <InfoItems n={this.state.educationInfo} type="educationInfo" />
        <button onClick={this.addEducationInfo}>add</button>
      </div>
    );
  }
}

export default function Editor() {
  return (
    <div className="editor">
      <PersonalInfo />
      <About />
      <WorkExperience />
    </div>
  );
}
