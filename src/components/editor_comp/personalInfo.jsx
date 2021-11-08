import "../../styles/editor.css";
import { newRidgeState } from "react-ridge-state";

let personal_data = {
  Name: "",
  Profession: "",
  Phone: "",
  Email: "",
  ImageUrl: "",
  Address: "",
  Description: "",
};

export const personalInfo_data = newRidgeState(personal_data);

function Input(props) {
  let [value, setValue] = personalInfo_data.use();

  function handleOnChange(e) {
    personal_data[e.target.placeholder] = e.target.value;
    setValue(personal_data);
  }

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
        <Input info="Profession" />
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
