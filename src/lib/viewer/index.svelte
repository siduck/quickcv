<script lang="ts">
  import { assignDummyState, data } from "$lib/state/index.svelte";
  import { textAreaFormat } from "$lib/utils.ts";

  import {
    brain,
    briefcase,
    bullseye,
    edu,
    github,
    link,
    location,
    mail,
    phone,
  } from "$lib/icons.svelte";

  import type { Snippet } from "svelte";

  assignDummyState();

  let name = $derived(data.details?.name?.split(" "));
</script>

{#snippet hicon(icon: Snippet, css: string = "")}
  <span class={`flex p2 bg-input rounded-full ${css}`}>
    {@render icon()}
  </span>
{/snippet}

<div class="h-screen overflow-auto p5 bg-muted flex justify-center items-start">
  <div class="flex flex-col gap5 rounded bg-bg doc scale-60 p10" id="resume">
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
        {@render hicon(bullseye, "text-danger")}
        About :
      </h2>
      <br />

      <p class="text-lg">
        {data.details.about}
      </p>

      <div class="frow mx-auto my5">
        <span class="frow">{@render phone()} {data.details.phone} </span>
        <span class="frow">{@render mail()} {data.details.email} </span>
        <span class="frow">{@render link()} {data.details.website} </span>
      </div>
    </div>

    <!---------------------- Education -------------------------------- -->
    <div>
      <h2 class="text-2xl font-bold frow">
        {@render hicon(edu, "text-success")}
        Education :
      </h2>
      <br />

      <div class="grid grid-cols-2 gap3">
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
        {@render hicon(briefcase, "text-info")}
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

          <ul class="list-disc space-y-2 w-full text-secondary-fg ml-2">
            {#each textAreaFormat(work.desc) as x}
              <li class="ml-2">{x}</li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>

    <div>
      <h2 class="text-2xl font-bold frow">
        {@render hicon(brain, "text-warning")}
        Skills :
      </h2>
      <br />

      <div class="frow flex-wrap mb4">
        {#each data.skills as x}
          <span class="badge-secondary-lg">
            {#if x.icon}
              {@html x.icon}
            {/if}
            {x.name}
          </span>
        {/each}
      </div>
    </div>
  </div>
</div>
