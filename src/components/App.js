import React, { useState } from "react";

import Navbar from "./Navbar";
import Editor from "./Editor";
import View from "./View";

export function App() {
  const [mode, setMode] = useState("edit");

  return (
    <div className="App">
      <Navbar
        setEditMode={() => setMode("edit")}
        setViewMode={() => setMode("view")}
      />
      {mode == "edit" ? <Editor /> : <View />}
    </div>
  );
}
