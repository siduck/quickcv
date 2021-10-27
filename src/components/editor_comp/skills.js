import "../../styles/editor.css";
import { Trash } from "phosphor-react";
import React, { useState } from "react";

export let skillsList;

export default function Skills() {
  const [inputFields, setInputField] = useState([{
    Title: "",
  }]);

  function handleChangeInput(index, event) {
    const values = [...inputFields];
    values[index][event.target.placeholder] = event.target.value;
    setInputField(values);

    skillsList = values;
  }

  function newSkill(e) {
    e.preventDefault();
    setInputField([...inputFields, { Title: "" }]);
  }

  function deleteSkill(index) {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputField(values);
  }

  return (
    <div className="skillsInput">
      <h3>Skills</h3>

      {inputFields.map((
        inputField,
        index,
      ) => (
        <div className="skillItem" key={index}>
          <input
            type="text"
            placeholder="Title"
            value={inputField.Title}
            onChange={(event) => handleChangeInput(index, event)}
          />
          <div className="deleteInput" onClick={deleteSkill}>
            <Trash size={32} weight="fill" />
          </div>
        </div>
      ))}

      <button onClick={newSkill}>Add Skill</button>
    </div>
  );
}
