<script lang="ts">
  import Default from "$lib/templates/default.svelte";
  import Minimal from "$lib/templates/minimal.svelte";

  let List = [
    { name: "Default", component: Default },
    { name: "Minimal", component: Minimal },
  ];

  List = [...List, ...List, ...List, ...List];
</script>

<div class="flex flex-wrap gap-4 bg-secondary p10">
  {#each List as x}
    <div class='grid gap3'>
      <span class='badge'>{x.name}</span>
      <div
        class="flex flex-col gap3 rounded bg-bg p10 doc  !origin-top-left"
        style="zoom: 0.3"
      >
        <x.component />
      </div>
    </div>
  {/each}
</div>
