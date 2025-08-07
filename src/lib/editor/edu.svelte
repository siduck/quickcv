<script lang="ts">
  import { addCard, data } from "$lib/state/index.svelte";
  import Delete from "./delete.svelte";
  const addEducation = () => addCard("education");
</script>

{#snippet educationCard(index: number)}
  <div class="grid-(~ cols-2 gap5) relative">
    <Delete {index} type="education" />

    <label for="institution">Institution</label>
    <label for="edu-date">Date</label>

    <input
      id="institution"
      type="text"
      placeholder="Cornell University"
      class="input"
      bind:value={data.education[index].institution}
    />

    <input
      id="edu-date"
      type="text"
      placeholder="May 2018"
      class="input"
      bind:value={data.education[index].date}
    />

    <label for="qualification" class="col-span-2">Qualification</label>
    <input
      id="qualification"
      type="text"
      placeholder="Bachelor of Science in Computer Engineering"
      class="col-span-2 input"
      bind:value={data.education[index].qualification}
    />
  </div>
{/snippet}

<div class="grid gap5">
  <strong class="frow">
    <i class="i-qlementine-icons:education-16"></i> Education
  </strong>

  {#each data.education as edu, index}
    {#if index > 0}
      <hr class="w-full brd" />
    {/if}
    {@render educationCard(index)}
  {/each}

  <button class="btn ml-auto" onclick={addEducation}>Add Education</button>
</div>
