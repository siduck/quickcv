<script lang="ts">
  import { addCard, data } from "$lib/state/index.svelte";
  import Delete from "./delete.svelte";
  const addProject = () => addCard("projects");
</script>

{#snippet projectCard(index: number)}
  <div class="relative grid-(~ cols-2 gap5)">
    <Delete {index} type="projects" />

    <label for="project">Project Name</label>
    <label for="project-link">Link</label>

    <input
      id="project"
      type="text"
      placeholder="Name"
      class="input"
      bind:value={data.projects[index].name}
    />

    <input
      id="project-date"
      placeholder="Enter link"
      class="input"
      bind:value={data.projects[index].link}
      type="url"
    />

    <label for="project-desc" class="col-span-2">Description</label>
    <input
      id="project-desc"
      type="text"
      placeholder="Enter desc"
      class="col-span-2 input"
      bind:value={data.projects[index].desc}
    />
  </div>
{/snippet}

<div class="grid gap5">
  <strong class="frow">
    <i class="i-pajamas:project"></i> Project
  </strong>

  {#each data.projects as project, index}
    {#if index > 0}
      <hr class="w-full brd" />
    {/if}
    {@render projectCard(index)}
  {/each}

  <button class="btn ml-auto" onclick={addProject}>Add Project</button>
</div>
