import "../../styles/editor.css";

import { Trash } from "phosphor-react";
import { newRidgeState } from "react-ridge-state";

export const skills_data = newRidgeState([{
  Title: "",
  Percentage: "",
}]);

function Input(props) {
  return (
    <input
      type="text"
      placeholder={props.info}
      onChange={props.onChange}
    />
  );
}

export default function Skills() {
  let [inputFields, setInputField] = skills_data.use();

  function handleChangeInput(index, event) {
    const values = [...inputFields];

    values[index][event.target.placeholder] = event.target.value;
    setInputField(values);
  }

  function newSkill() {
    setInputField([...inputFields, { Title: "", Percentage: "" }]);
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
          <Input
            info="Title"
            onChange={(event) => handleChangeInput(index, event)}
          />
          <Input
            info="Percentage"
            onChange={(event) => handleChangeInput(index, event)}
          />
          <div className="deleteInput" onClick={() => deleteSkill(index)}>
            <Trash size={32} weight="fill" />
          </div>
        </div>
      ))}

      <button onClick={newSkill}>Add Skill</button>
    </div>
  );
}
