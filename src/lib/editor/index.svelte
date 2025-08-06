<script lang="ts">
  import Details from "./details.svelte";
  import WorkExp from "./workexp.svelte";
  import Project from "./project.svelte";
  import Education from "./edu.svelte";
  import Skills from "./skills.svelte";
</script>

<div class='grid gap5 p5 children:(p6 brd rounded)'>
  <Details />
  <Skills />
  <WorkExp />
  <Project />
  <Education />
</div>
