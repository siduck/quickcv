import "../../styles/editor.css";

import { Trash, XCircle } from "phosphor-react";
import React, { useState } from "react";

export let educationList;

function Input(props) {
  return (
    <input
      type="text"
      placeholder={props.info}
      value={props.value}
      onChange={props.onChange}
    />
  );
}

export default function Education() {
  const [inputFields, setInputField] = useState([{
    University: "",
    Qualifcation: "",
    From: "",
    To: "",
  }]);

  function handleChangeInput(index, event) {
    const values = [...inputFields];

    values[index][event.target.placeholder] = event.target.value;
    setInputField(values);
    educationList = values;
  }

  function newInput(e) {
    e.preventDefault();

    setInputField([...inputFields, {
      University: "",
      Qualifcation: "",
      From: "",
      To: "",
    }]);
  }

  function deleteWorkExp(index) {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputField(values);
  }

  return (
    <div className="workExperienceList">
      <h3>Education</h3>

      {inputFields.map((
        inputField,
        index,
      ) => (
        <div className="workExperience" key={index}>
          <div className="deleteInput" onClick={deleteWorkExp}>
            <XCircle size={32} weight="fill" />
          </div>

          <div className="lists">
            <Input
              info="University"
              value={inputField.University}
              onChange={(event) => handleChangeInput(index, event)}
            />

            <Input
              info="Qualifcation"
              value={inputField.Qualifcation}
              onChange={(event) => handleChangeInput(index, event)}
            />

            <Input
              info="From"
              value={inputField.From}
              onChange={(event) => handleChangeInput(index, event)}
            />
            <Input
              info="To"
              value={inputField.To}
              onChange={(event) => handleChangeInput(index, event)}
            />
          </div>
        </div>
      ))}

      <button onClick={newInput}>Add</button>
    </div>
  );
}
