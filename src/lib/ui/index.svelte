<script lang="ts">
  import Editor from "../editor/index.svelte";
  import Viewer from "../viewer/index.svelte";
</script>

<div class="grid-(~ cols-2) bg-secondary">
  <div class="sticky top-0 overflow-y-auto h-screen p5">
    <Editor />
  </div>

  <div
    class="h-screen overflow-auto p5 bg-muted flex justify-center items-start"
  >
    <Viewer />
  </div>
</div>
