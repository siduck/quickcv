<script lang="ts">
  import favicon from "$lib/assets/favicon.svg";

  import "virtual:uno.css";
  import "@unocss/reset/tailwind.css";
  import "$lib/css/style.css";

  import Ui from "$lib/ui/index.svelte";
  import Navbar from "$lib/ui/navbar.svelte";
  import { demoState } from "$lib/state/index.svelte";

  import { page } from "$app/state";
  import {ui} from "$lib/state/index.svelte"

  let { children } = $props();

  setTimeout(() => {
    demoState.fill();
  }, 0);

  $effect(() => {
    if (page.url.pathname == "/templates") {
      document.body.style.overflow = "visible";
    } else {
      document.body.style.overflow = ui.mode == "split" ? "hidden" : "visible";
    }
  });
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<Navbar />

{#if page.url.pathname == "/templates"}
  {@render children()}
{:else}
  <Ui>
    {@render children()}
  </Ui>
{/if}
