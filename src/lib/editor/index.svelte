<script lang="ts">
  import Details from "./details.svelte";
  import WorkExp from "./workexp.svelte";
  import Project from "./project.svelte";
  import Education from "./edu.svelte";
</script>

<div class='grid gap5 p10 children:(p6 brd rounded)'>
  <Details />
  <WorkExp />
  <Project />
  <Education />
</div>
