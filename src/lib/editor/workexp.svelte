<script lang="ts">
  import Delete from "./delete.svelte";
  import { addCard, data } from "$lib/state/index.svelte";

  const addWorkexp = () => addCard("workExp");
</script>

{#snippet card(index: number)}
  <div class="grid-(~ cols-2 gap5) relative">
    <Delete {index} type="workExp" />

    <label for="company" class="col-span-2">Company</label>
    <input
      id="company"
      type="text"
      placeholder="Khan Academy"
      class="col-span-2 input"
      bind:value={data.workExp[index].company}
    />

    <label for="title">Job Title</label>
    <label for="date">Date</label>

    <input
      id="title"
      type="text"
      class="input"
      placeholder="Software Engineer"
      bind:value={data.workExp[index].title}
    />

    <input
      id="date"
      type="text"
      class="input"
      placeholder="Jun 2022 - Present"
      bind:value={data.workExp[index].date}
    />

    <label for="description" class="col-span-2">Description</label>
    <textarea
      id="description"
      placeholder="Enter description of your job"
      class="input col-span-2 min-h-[6rem]"
      bind:value={data.workExp[index].desc}
    ></textarea>
  </div>
{/snippet}

<div class="grid gap5">
  <strong class="frow">
    <i class="i-tabler:briefcase"></i> Work Experience
  </strong>

  {#each data.workExp as work, index}
    {#if index > 0}
      <hr class="w-full brd" />
    {/if}

    {@render card(index)}
  {/each}

  <button class="btn ml-auto" onclick={addWorkexp}>Add Work</button>
</div>
