import Navbar from "./navbar";
import ModesBtn, { editorMode } from "./modeSwitcher";
import Editor from "./editor";
import Viewer from "./viewer";

function App() {
  return (
    <div font-sans mx-5 xl:mx-auto xl:px-5 class="max-w-[1820px]">
      <Navbar />
      <ModesBtn />

      {/* use this for html-to-image (svg) */}
      <div id="svgWrapper" rounded-none>
        {editorMode() ? <Editor /> : <Viewer />}
      </div>
    </div>
  );
}

export default App;
