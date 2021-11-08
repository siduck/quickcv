import "../../styles/editor.css";

import { newRidgeState } from "react-ridge-state";
import { XCircle } from "phosphor-react";

export const workExperience_data = newRidgeState([{
  Company: "",
  Position: "",
  From: "",
  To: "",
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

export default function WorkExperience() {
  let [inputFields, setInputField] = workExperience_data.use();

  function handleChangeInput(index, event) {
    const values = [...inputFields];

    values[index][event.target.placeholder] = event.target.value;
    setInputField(values);
  }

  function newInput() {
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
          <div className="deleteInput" onClick={() => removeInput(index)}>
            <XCircle size={32} weight="fill" />
          </div>

          <div className="lists">
            <Input
              info="Company"
              onChange={(event) => handleChangeInput(index, event)}
            />

            <Input
              info="Position"
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
