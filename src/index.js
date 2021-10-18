import "./index.css";
import React from "react";
import ReactDOM from "react-dom";

/*
function Headchad() {
  return (
    <h1>uwu</h1>
  );
}

const heading = <Headchad />;
*/

class Headchad extends React.Component {
  render() {
    return <h1>owo</h1>;
  }
}
const heading = <Headchad />;

ReactDOM.render(
  heading,
  document.querySelector("#root"),
);
