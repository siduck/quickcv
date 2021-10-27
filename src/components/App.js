import React, { useState } from "react";

import Navbar from "./Navbar";
import Editor from "./Editor";
import View from "./View";

export function App(props) {
  const [mode, setMode] = useState("view");

  return (
    <div className="App">
      <Navbar
        setEditMode={() => setMode("edit")}
        setViewMode={() => setMode("view")}
      />
      {mode === "edit" ? <Editor /> : <View />}
    </div>
  );
}
