import "../styles/editor.css";

function Input(props) {
  return <input type="text" placeholder={props.info} />;
}

function PersonalInfo() {
  return (
    <div className="personalInfo">
      <h3>Personal Information</h3>

      <div>
        <Input info="Name" />
        <Input info="Title" />
      </div>

      <div>
        <Input info="Phone number" />
        <Input info="Email" />
      </div>

      <Input info="Profile Image url" />
      <Input info="Address" />
      <Input info="Description" />
    </div>
  );
}

export default function Editor() {
  return (
    <div className="editor">
      <PersonalInfo />
    </div>
  );
}
