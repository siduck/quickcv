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
        {cap(tmp.Profession)}
      </div>
    </div>
  );
}

function UserImage() {
  let tmp = personalInfo_data.useValue();

  return (
    <div className="userImage">
      <img
        src={tmp.ImageUrl}
        alt="profile pic"
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
  let tmp = personalInfo_data.useValue();

  return (
    <div className="Contacts">
      <Contact icon={Phone} title={tmp.Phone} />
      <Contact icon={EnvelopeSimple} title={tmp.Email} />
      <Contact icon={MapPin} title={tmp.Address} />
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
