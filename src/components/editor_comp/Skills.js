import "../../styles/editor.css";
import { Trash } from "phosphor-react";
import React, { useState } from "react";

export default function Skills() {
  const [inputFields, setInputField] = useState([{
    title: "",
    percentage: "",
  }]);

  function handleChangeInput(index, event) {
    const values = [...inputFields];
    values[index][event.target.placeholder] = event.target.value;
    setInputField(values);
    console.log(inputFields);
  }

  function newSkill(e) {
    e.preventDefault();
    setInputField([...inputFields, { title: "", percentage: "" }]);
  }

  function deleteSkill(index) {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputField(values);
  }

  return (
    <div className="skillsInput">
      <h3>Skills</h3>

      {inputFields.map((inputField, index) => (
        <div className="skillItem" key={index}>
          <input
            type="text"
            placeholder="title"
            value={inputField.title}
            key={`title_${index}`}
            onChange={(event) => handleChangeInput(index, event)}
          />
          <input
            type="text"
            placeholder="percentage"
            value={inputField.percentage}
            key={`percentage_${index}`}
            onChange={(event) => handleChangeInput(index, event)}
          />

          <div className="deleteSkillBtn">
            <Trash onClick={deleteSkill} size={32} weight="fill" />
          </div>
        </div>
      ))}

      <button onClick={newSkill}>Add Skill</button>
    </div>
  );
}
