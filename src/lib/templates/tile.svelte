<script lang="ts">
  import { formatUrl, textAreaFormat } from "$lib/utils";
  import { data } from "$lib/state/index.svelte";
  import icons from "$lib/icons";
</script>

<div class="text-center border-(y fg) py-6 -mt-3">
  <h1 class="text-4xl tracking-wide">{data.details.name}</h1>
  <p class="uppercase tracking-widest  mt2">
    {data.details.role}
  </p>
</div>

<div
  class=" mt--3 [&>section]:(p3 pb5 pl0) grid-(~ cols-[.3fr_1fr]) rid-rows-4"
>
  <section class="grid gap1 border-(b r fg)">
    <h3 class="uppercase font-bold">Contact</h3>

    <span class="frow">{@html icons.phone} {data.details.phone} </span>
    <span class="frow">{@html icons.mail} {data.details.email} </span>

    {#if data.details.website}
      <a class="frow" href={data.details.website} target="_blank"
        >{@html icons.globe} {formatUrl(data.details.website)}
      </a>
    {/if}

    <a
      class="frow"
      href={`https://github.com/${data.details.github}`}
      target="_blank"
      >{@html icons.github} @{data.details.github}
    </a>
  </section>

  <section class="border-(b fg) !pl5">
    <h3 class="uppercase font-bold">Summary</h3>
    <p class="mt-2 text-sm">{data.details.about}</p>
  </section>

  <section class="grid gap1 border-(b r fg)">
    <h3 class="uppercase font-bold">Education</h3>

    <div class="space-y-4">
      {#each data.education as edu}
        <div>
          <p class="font-semibold">{edu.institution}</p>
          <p class="text-sm">{edu.qualification}</p>
          <p class="text-xs text-muted-fg">{edu.date}</p>
          {#if edu.gpa}
            <p class="text-xs">GPA: {edu.gpa}</p>
          {/if}
        </div>
      {/each}
    </div>
  </section>

  <section class="row-span-2 !pl5 flex flex-col gap3">
    <h3 class="uppercase font-bold -mb-2">Work Experience</h3>
    {#each data.workExp as work}
      <div>
        <div class="flex justify-between">
          <span class="font-semibold text-lg">{work.title}</span>
          <span class="text-sm text-muted-fg">{work.date}</span>
        </div>
        <p class="mb2">{work.company}</p>
        <ul class="list-disc ml-5 text-sm space-y-1">
          {#each textAreaFormat(work.desc) as line}
            <li>{line}</li>
          {/each}
        </ul>
      </div>
    {/each}
  </section>

  <section class="flex flex-col gap3 border-( r fg)">
    <h3 class="uppercase font-bold">Skills</h3>

    <ul class="frow flex-wrap">
      {#each data.skills as x}
        <span class="badge-outline brd-fg">{x.name}</span>
      {/each}
    </ul>
  </section>

  <hr class="border-fg col-span-full" />

  <!-- Projects (optional, not in your screenshot) -->
  {#if data.projects.length > 0}
    <section class="col-span-full pl5">
      <h3 class="uppercase font-bold mb3">Projects</h3>
      {#each data.projects as x}
        <div class="brd-fg p3 flex-col flex gap1">
          <div class="flex justify-between items-center">
            <p class="font-semibold">{x.name}</p>
            <a href={x.link} target="_blank">Link</a>
          </div>
          <p class="text-sm">{x.desc}</p>
        </div>
      {/each}
    </section>
  {/if}
</div>
