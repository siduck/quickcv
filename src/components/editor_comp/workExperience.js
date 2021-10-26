import "../../styles/editor.css";

import { XCircle } from "phosphor-react";
import React, { useState } from "react";

export let workExperienceList;

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

export default function WorkExperience() {
  const [inputFields, setInputField] = useState([{
    Company: "",
    Position: "",
    From: "",
    To: "",
  }]);

  function handleChangeInput(index, event) {
    const values = [...inputFields];

    values[index][event.target.placeholder] = event.target.value;
    setInputField(values);
    workExperienceList = values;
  }

  function newInput(e) {
    e.preventDefault();

    setInputField([...inputFields, {
      Company: "",
      Position: "",
      From: "",
      To: "",
    }]);
  }

  function removeInput(index) {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputField(values);
  }

  return (
    <div className="listofInputs">
      <h3>Work Experience</h3>

      {inputFields.map((
        inputField,
        index,
      ) => (
        <div className="listContainer" key={index}>
          <div className="deleteInput" onClick={removeInput}>
            <XCircle size={32} weight="fill" />
          </div>

          <div className="lists">
            <Input
              info="Company"
              value={inputField.Company}
              onChange={(event) => handleChangeInput(index, event)}
            />

            <Input
              info="Position"
              value={inputField.Position}
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
