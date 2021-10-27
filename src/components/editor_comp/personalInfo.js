import "../../styles/editor.css";
import React from "react";

export let personal_data = {
  Name: "",
  Phone: "",
  Email: "",
  ImageUrl: "",
  Address: "",
  Description: "",
};

function handleOnChange(e) {
  personal_data[e.target.placeholder] = e.target.value;
  console.log(personal_data);
}

function Input(props) {
  return (
    <input type="text" placeholder={props.info} onChange={handleOnChange} />
  );
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
