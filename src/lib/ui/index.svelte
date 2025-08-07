<script lang="ts">
  import Editor from "../editor/index.svelte";
  import Viewer from "../viewer/index.svelte";
  import { ui } from "$lib/state/index.svelte";
  import { Tab, Tabs, TabsContent, TabsList } from "@haze-ui/svelte";
</script>

{#if ui.mode == "split"}
  <div class={`grid-(~ cols-2) bg-secondary`}>
    <div class="sticky top-0 overflow-y-auto h-screen p5 scrollbar">
      <Editor />
    </div>

    <div
      class="h-screen overflow-auto p5 flex justify-center items-start scrollbar"
    >
      <Viewer />
    </div>
  </div>
{:else}
  <div class={`grid gap3 bg-secondary justify-center py10`}>
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

      <TabsContent value="viewer">
        <Viewer />
      </TabsContent>
    </Tabs>
  </div>
{/if}
