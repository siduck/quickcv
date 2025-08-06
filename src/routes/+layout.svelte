<script lang="ts">
  import favicon from "$lib/assets/favicon.svg";
  import "virtual:uno.css";
  import "@unocss/reset/tailwind.css";
  import "$lib/css/style.css";
  import Ui from "$lib/ui/index.svelte";
  import Navbar from "$lib/ui/navbar.svelte";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()}
<Navbar />
<Ui />
