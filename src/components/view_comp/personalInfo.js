import React from "react";
import { EnvelopeSimple, MapPin, Phone } from "phosphor-react";

import "../../styles/viewer.css";

import { personalInfo_data } from "../editor_comp/personalInfo";

function cap(word) {
  return word.toUpperCase();
}

function UserTitles() {
  let tmp = personalInfo_data.useValue();

  return (
    <div className="userTitles">
      <div className="userName">
        {cap(tmp.Name)}
      </div>
      <div className="userJob">
        WEB DESIGNER
      </div>
    </div>
  );
}

function UserImage() {
  return (
    <div className="userImage">
      <img
        src="https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
        alt="james"
      />
    </div>
  );
}

function Contact(props) {
  const Icon = props.icon;
  return (
    <div className="contact">
      <div className="contactIcon">
        <Icon size={24} weight="fill" />
      </div>
      {props.title}
    </div>
  );
}

function Contacts() {
  return (
    <div className="Contacts">
      <Contact icon={Phone} title={"+1 551 404 4934"} />
      <Contact icon={EnvelopeSimple} title={"lorem@tutanota.com"} />
      <Contact icon={MapPin} title={"lorem ipsum chifdpu spuc"} />
    </div>
  );
}

function PersonalInfo() {
  return (
    <div className="personalInfo_viewer">
      <UserTitles />
      <UserImage />
      <Contacts />
    </div>
  );
}

export default PersonalInfo;
