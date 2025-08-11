<script lang="ts">
  import { addCard, data } from "$lib/state/index.svelte";
  import Delete from "./delete.svelte";
  const add = () => addCard("skills");
</script>

{#snippet projectCard(index: number)}
  <div class="relative grid-(~ cols-2 gap5)">
    <Delete {index} type="skills" />

    <label for="skill">Skill Name</label>
    <label for="skill-icon">Svg icon url</label>

    <input
      id="skill"
      type="text"
      placeholder="Name"
      class="input"
      bind:value={data.skills[index].name}
    />

    <input
      id="skill-icon"
      type="text"
      placeholder="Enter svg from iconfiy"
      class="input"
      bind:value={data.skills[index].icon}
    />
  </div>
{/snippet}

<div class="grid gap5">
  <strong class="frow">
    <i class="i-typcn:code-outline"></i> Skills
  </strong>

  {#each data.skills as _, index}
    {@render projectCard(index)}
  {/each}

  <button class="btn-primary ml-auto" onclick={add}>Add Skill</button>
</div>
