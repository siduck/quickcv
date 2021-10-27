import React from "react";

import Navbar from "./Navbar";
import Editor from "./Editor";
import View from "./View";

export function App() {

  return (
    <div className="App">
      <Navbar />
      <Editor/>
      <View/>
    </div>
  );
}
