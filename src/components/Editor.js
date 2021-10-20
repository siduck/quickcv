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
    <div>
      {Array.from(Array(props.n)).map(() => (
        <div className="skillItem">
          <Input info="your skill" key={uniqid} />
          <Input info="percentage" key={uniqid} />
        </div>
      ))}
    </div>
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

export default function Editor() {
  return (
    <div className="editor">
      <PersonalInfo />
      <About />
    </div>
  );
}
