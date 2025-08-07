<script lang="ts">
  import { onMount } from "svelte";
  import { Btn, Tab, Tabs, TabsList } from "@haze-ui/svelte";
  import { generatePDF } from "$lib/utils";
  import { demoState, ui } from "$lib/state/index.svelte";

  let theme = $state();

  onMount(() => theme = localStorage.theme);

  const toggleTheme = () => {
    theme = theme == "dark" ? "light" : "dark";
    localStorage.theme = theme;
    document.querySelector("html").className = theme;
  };

  const setActive = (x: string) => ui.mode = x;

  const handleDemo = (x:any) => {
    demoState[x.target.checked ? "fill" : "empty"]();
  };
</script>

<nav class="p3 brd frow items-center sticky top-0 z-10 bg-bg">
  <i class="i-icon-park-solid:flashlamp bg-info text-xl"></i>
  <strong>Quick CV</strong>

  <a href="/" class="mr-auto">Templates</a>

  <label for="demoswitch" class="brd frow p2 px3 rounded">
    <input
      type="checkbox"
      class="checkbox-sm"
      id="demoswitch"
      onchange={handleDemo}
    />
    Demo
  </label>

  <Tabs value={ui.mode} setValue={setActive}>
    <TabsList class="p1 tab-(p2 px2 text-sm) tabon-(brd)">
      <Tab value="split"><i class="i-material-symbols:splitscreen-left"></i>
        Split</Tab>
      <Tab value="tab"> <i class="i-gravity-ui:layout-tabs"></i> Tabbed</Tab>
    </TabsList>
  </Tabs>

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
