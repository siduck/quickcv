import "../../styles/editor.css";

import { newRidgeState } from "react-ridge-state";
import { XCircle } from "phosphor-react";
import React from "react";

export const education_data = newRidgeState([{
  University: "",
  Qualification: "",
  From: "",
  To: "",
}]);

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
  let [inputFields, setInputField] = education_data.use();

  function handleChangeInput(index, event) {
    const values = [...inputFields];

    values[index][event.target.placeholder] = event.target.value;
    setInputField(values);
  }

  function newInput(e) {
    e.preventDefault();

    setInputField([...inputFields, {
      University: "",
      Qualification: "",
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
      <h3>Education</h3>

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
              info="University"
              onChange={(event) => handleChangeInput(index, event)}
            />

            <Input
              info="Qualification"
              onChange={(event) => handleChangeInput(index, event)}
            />

            <Input
              info="From"
              onChange={(event) => handleChangeInput(index, event)}
            />
            <Input
              info="To"
              onChange={(event) => handleChangeInput(index, event)}
            />
          </div>
        </div>
      ))}

      <button onClick={newInput}>Add</button>
    </div>
  );
}
