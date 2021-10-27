import React from "react";

import Navbar, { currentMode } from "./Navbar";
import Editor from "./Editor";
import View from "./View";

export function App() {
  let mode = currentMode.useValue();
  return (
    <div className="App">
      <Navbar />
      {mode === "edit" ? <Editor /> : <View />}
    </div>
  );
}
