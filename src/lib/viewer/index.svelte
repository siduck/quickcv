<script lang="ts">
  import { assignDummyState, data } from "$lib/state/index.svelte";
  import { textAreaFormat } from "$lib/utils.ts";

  assignDummyState();

  let name = data.details?.name?.split(" ");
</script>

{#snippet hicon(css: string)}
  <span class="flex p2 bg-input rounded-full">
    <i class={css}></i>
  </span>
{/snippet}

<div class="brd m5 py10 flex bg-secondary">
  <div class="flex flex-col gap5 rounded bg-bg doc scale-80 p10">
    <!---------------------- name -------------------------------- -->
    <hr class="w-full brd" />
    <div class="frow mx-auto mt3">
      <h1 class="text-4xl">{name?.[0]}</h1>
      <h1 class="text-primary text-4xl">{name?.[1]}</h1>
    </div>

    <span class="text-(center 2xl) mb3 font-light">Frontend Web Developer</span>

    <hr class="w-full brd" />

    <!---------------------- About -------------------------------- -->
    <div>
      <h2 class="text-2xl font-bold frow">
        {@render hicon("i-cuida:bullseye-outline bg-danger")}
        About :
      </h2>
      <br />

      <p class="text-lg">
        {data.details.about}
      </p>
    </div>

    <!---------------------- Education -------------------------------- -->
    <div>
      <h2 class="text-2xl font-bold frow">
        {@render hicon("i-mdi:education-outline bg-success")}
        Education :
      </h2>
      <br />

      <div class='grid grid-cols-2 gap3'>
        {#each data.education as edu}
          <div class="frow flex-wrap gap-y-1 mb4">
            <span>
              {edu.institution}
            </span>
            <span class="badge-secondary ml-auto">
              {edu.date}
            </span>
            <br />
            <span class="text-muted-fg w-full">
              {edu.qualification}
            </span>
          </div>
        {/each}
      </div>
    </div>

    <div>
      <h2 class="text-2xl font-bold frow">
        {@render hicon("i-tabler:briefcase bg-warning")}
        Experience :
      </h2>
      <br />

      {#each data.workExp as work}
        <div class="frow flex-wrap gap-y-1 mb4">
          <span>
            {work.company}
          </span>
          <span class="text-muted-fg text-sm mr-auto">
            {work.date}
          </span>
          <span class="badge-surface">
            {work.title}
          </span>

          <ul class="list-disc  space-y-2 w-full text-secondary-fg ml-2" >
            {#each textAreaFormat(work.desc) as x}
              <li class='ml-2'>{x}</li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>
  </div>
</div>
