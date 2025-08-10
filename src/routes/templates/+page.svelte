<script lang="ts">
  import { onMount } from "svelte";
  import Default from "$lib/templates/default.svelte";
  import Minimal from "$lib/templates/minimal.svelte";

  let List = [
    { name: "default", component: Default },
    { name: "minimal", component: Minimal },
  ];

  onMount(() => document.body.style.overflow = "visible");
</script>

<div class="flex flex-wrap gap-(x4 y12) p10">
  {#each List as x}
    <div
      style="scale: 0.3"
      class="!origin-top-left grid gap3 w-[63mm] h-[89.1mm]"
    >
      <a
        class="badge text-primary-fg w-full text-5xl p5 justify-center capitalize"
        href="/?theme={x.name}"
      >{x.name}</a>

      <div
        class="flex flex-col gap3 rounded bg-bg p10 doc"
      >
        <x.component />
      </div>
    </div>
  {/each}
</div>
