<script lang="ts">
  import Editor from "../editor/index.svelte";
  import { ui } from "$lib/state/index.svelte";
  import { Tab, Tabs, TabsContent, TabsList } from "@haze-ui/svelte";

  let { children } = $props();

</script>

{#if ui.mode == "split"}
  <div class={`grid-(~ cols-2)`}>
    <div class="sticky top-0 overflow-y-auto h-screen p5 scrollbar">
      <Editor />
    </div>

    <div
      class="h-screen overflow-auto pt5 flex justify-center items-start scrollbar"
    >
      <div
        class='doc'
        id="resume"
        style={`scale: ${ui.viewScale}%`}
      >
        {@render children?.()}
      </div>
    </div>
  </div>
{:else}
  <div class={`grid gap3 justify-center py10`}>
    <Tabs>
      <TabsList class="mx-auto !bg-bg bg-muted tabon-(!bg-secondary)">
        <Tab value="editor"><i class="i-fa-regular:edit"></i>
          Editor</Tab>
        <Tab value="viewer">
          <i class="i-fluent:eye-28-regular"></i> Viewer</Tab>
      </TabsList>

      <TabsContent value="editor" class="max-w-[1000px]">
        <Editor />
      </TabsContent>

      <TabsContent
        value="viewer"
        class='doc'
        style={`scale: ${ui.viewScale}%`}
        id="resume"
      >
        {@render children?.()}
      </TabsContent>
    </Tabs>
  </div>
{/if}
