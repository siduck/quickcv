<script lang="ts">
  import Details from "./details.svelte";
  import WorkExp from "./workexp.svelte";
  import Project from "./project.svelte";
  import Education from "./edu.svelte";
  import Skills from "./skills.svelte";
</script>

<div class="sticky top-0 overflow-y-auto h-screen p5">
  <div class="grid gap5 children:(p5 brd rounded bg-bg)">
    <Details />
    <Skills />
    <WorkExp />
    <Project />
    <Education />
  </div>
</div>
