import "../../styles/editor.css";
import React from "react";

function Input(props) {
  return <input type="text" placeholder={props.info} />;
}

export default function PersonalInfo() {
  return (
    <div className="personalInfo">
      <h3>Personal Information</h3>

      <div className="lists">
        <Input info="Name" />
        <Input info="Phone" />
        <Input info="Email" />
        <Input info="ImageUrl" />
        <Input info="Address" />
      </div>

      <h3>About me</h3>
      <Input info="Description" />
    </div>
  );
}
