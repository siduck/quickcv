<script lang="ts">
  import Default from "$lib/templates/default.svelte";
  import Minimal from "$lib/templates/minimal.svelte";
  import Ui from "$lib/ui/index.svelte";
  import { page } from "$app/state";
  import { onMount } from "svelte";
  import { ui } from "$lib/state/index.svelte";

  let { children } = $props();
  console.log(children, "bro");

  let themes = {
    default: Default,
    minimal: Minimal,
  };

  let Component = $derived(
    themes[page.url.searchParams.get("theme") || "default"],
  );

  onMount(() => {
    document.body.style.overflow = ui.mode == "split"
      ? "hidden"
      : "visible";
  });
</script>

<Ui>
  <Component />
</Ui>
