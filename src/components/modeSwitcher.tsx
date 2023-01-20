import "iconify-icon";
import { createSignal } from "solid-js";
import { get_default_data, get_demo_data, setStore } from "../store";

export const [editorMode, setEditorMode] = createSignal(true);
const [demoShown, setDemo] = createSignal(false);

export default () => (
  <div mb="5 md:10" vertCentered class="!gap-3" mx-auto w-fit>
    <div class="[&_button]:rounded-full vertCentered bg-slate-7 dark:bg-black-2 w-fit p-2 rounded-full !gap-1">
      <button
        bg={editorMode() ? "slate-6 dark:black-3" : "dark:black-2"}
        shadow={editorMode() ? "lg" : "none"}
        text={editorMode() ? "!white-1 dark:!white-2" : "!slate-4"}
        onclick={() =>
          setEditorMode(true)}
        p=".6rem"
      >
        <iconify-icon icon="ph:pencil-simple-fill"></iconify-icon>
        Editor
      </button>

      <button
        bg={!editorMode() ? "slate-6 dark:black-3" : "dark:black-2"}
        shadow={!editorMode() ? "lg" : "none"}
        onclick={() =>
          setEditorMode(false)}
        text={!editorMode() ? "!white-1 dark:!white-2" : "!slate-4"}
        p=".6rem"
      >
        <iconify-icon icon="ic:round-grid-view"></iconify-icon>
        Viewer
      </button>
    </div>

    <button
      p-4
      rounded-full
      onclick={() => {
        setDemo(!demoShown());
        setEditorMode(!demoShown());
        setStore(demoShown() ? get_demo_data() : get_default_data());
      }}
    >
      <iconify-icon
        width="20"
        icon={`material-symbols:${
          demoShown() ? "check-circle-rounded" : "circle-outline"
        }`}
      >
      </iconify-icon>
      Demo
    </button>
  </div>
);
