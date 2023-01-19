import "iconify-icon";
import { createSignal } from "solid-js";

export const [editorMode, setEditorMode] = createSignal(true);

export default () => (
  <div class="[&_button]:rounded-full vertCentered bg-slate-7 dark:bg-black-2 w-fit p-2 rounded-full !gap-1 mx-auto">
    <button
      bg={editorMode() ? "slate-6  dark:black-3" : "transparent !shadow-none"}
      shadow={editorMode() ? "lg" : "none"}
      onclick={() => setEditorMode(true)}
    >
      <iconify-icon icon="ph:pencil-simple-fill"></iconify-icon>
      Editor
    </button>

    <button
      bg={!editorMode() ? "slate-6 dark:black-3" : "transparent"}
      shadow={!editorMode() ? "lg" : "none"}
      onclick={() => setEditorMode(false)}
    >
      <iconify-icon icon="ic:round-grid-view"></iconify-icon>
      Viewer
    </button>
  </div>
);