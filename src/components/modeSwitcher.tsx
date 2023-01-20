import "iconify-icon";
import { createSignal } from "solid-js";

export const [editorMode, setEditorMode] = createSignal(false);

export default () => (
  <div class="mb-10 [&_button]:rounded-full vertCentered bg-slate-7 dark:bg-black-2 w-fit p-2 rounded-full !gap-1 mx-auto">
    <button
      bg={editorMode() ? "slate-6 dark:black-3" : "dark:black-2"}
      shadow={editorMode() ? "lg" : "none"}
      text={editorMode()? "!white-1 dark:!white-2": "!slate-4"}
      onclick={() => setEditorMode(true)}
    >
      <iconify-icon icon="ph:pencil-simple-fill"></iconify-icon>
      Editor
    </button>

    <button
      bg={!editorMode() ? "slate-5 dark:black-3" : "dark:black-2"}
      shadow={!editorMode() ? "lg" : "none"}
      onclick={() => setEditorMode(false)}
      text={!editorMode()? "!white-1 dark:!white-2": "!slate-4"}
    >
      <iconify-icon icon="ic:round-grid-view"></iconify-icon>
      Viewer
    </button>
  </div>
);
