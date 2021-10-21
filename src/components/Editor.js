import "../styles/editor.css";
import React, { Component } from "react";

import uniqid from "uniqid";

import { personalData } from "../cvData";

function Input(props) {
  return <input type="text" placeholder={props.info} onChange={fillData} />;
}

function fillData(e) {
  let val = e.target.value;
  personalData[e.target.placeholder] = val;
  // console.log(personalData);
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

function SkillsList(props) {
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

class Skills extends Component {
  constructor() {
    super();
    this.state = {
      numberOfskills: 1,
      id: uniqid(),

      skill: {
        desc: "",
        percentage: "",
      },
    };

    this.addSkill = this.addSkill.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      skill: {
        desc: e.target.value,
        percentage: e.targe.value,
      },
    });
  }
  addSkill() {
    this.setState({
      numberOfskills: this.state.numberOfskills + 1,
    });

    alert(this.state.skill.desc);
  }

  render() {
    return (
      <div className="skillsInput">
        <h3>Skills</h3>
        <SkillsList n={this.state.numberOfskills} />
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
          <br />
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
      <div className="iteminfolists">
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
      <Skills />
      <WorkExperience />
    </div>
  );
}
