<script lang="ts">
  import { onMount } from "svelte";
  import { Btn } from "@haze-ui/svelte";
  import { generatePDF } from "$lib/utils";

  let theme = $state();

  onMount(() => theme = localStorage.theme);

  const toggleTheme = () => {
    theme = theme == "dark" ? "light" : "dark";
    localStorage.theme = theme;
    document.querySelector("html").className = theme;
  };
</script>

<nav class="p3 brd frow items-center sticky top-0 z-10 bg-bg">
  <i class='i-icon-park-solid:flashlamp bg-info text-xl'/>
  <strong >Quick CV</strong>

  <a href='/' class="mr-auto">Templates</a>

  <Btn
    iconL="i-tabler:download"
    txt="Download"
    class="btn-primary"
    onclick={generatePDF}
  />

  <button
    class="btn-soft-eqmd rounded-full"
    aria-label="toggle dark mode"
    onclick={toggleTheme}
  >
    <div
      class={theme == "dark"
      ? "i-line-md:sun-rising-twotone-loop"
      : "i-line-md:moon-twotone-loop"}
    >
    </div>
  </button>
</nav>
