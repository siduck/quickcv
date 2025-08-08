<script lang="ts">
  import { data } from "$lib/state/index.svelte";
  import { textAreaFormat } from "$lib/utils";
</script>

<div
  class="flex flex-col gap3 rounded bg-bg doc scale-70 p10 [&>hr]:(mt--1)"
  id="resume"
>
  <h1 class="text-4xl font-bold">{data.details.name}</h1>

  <div class="frow mt--1">
    <p>
      {data.details.email} |
      {data.details.phone} |
      {data.details.location} |
      {data.details.website}
    </p>
  </div>

  <!-- Summary -->
  <h2 class="text-2xl font-bold">Summary</h2>
  <hr class="brd-fg" />

  <p>{data.details.about}</p>

  <!-- Experience -->
  <h2 class="text-2xl font-bold">Work Experience</h2>
  <hr class="brd-fg" />
  {#each data.workExp as work}
    <div>
      <div class="frow justify-between">
        <h3 class="text-xl font-semibold">{work.company}</h3>
        <span>{work.date}</span>
      </div>
      <p class="text-lg">{work.title}</p>

      <ul class="list-disc ml5">
        {#each textAreaFormat(work.desc) as line}
          <li>{line}</li>
        {/each}
      </ul>
    </div>
  {/each}

  <h2 class="text-2xl font-bold">Education</h2>
  <hr class="brd-fg" />

  {#each data.education as edu}
    <div>
      <div class="frow justify-between">
        <h3 class="text-xl font-semibold">{edu.institution}</h3>
        <span>{edu.date}</span>
      </div>
      <p class="text-lg">{edu.qualification}</p>
    </div>
  {/each}

  <h2 class="text-2xl font-bold">Skills</h2>
  <hr class="brd-fg" />
  <p>{data.skills.map((s) => s.name).join(", ")}</p>

  <h2 class="text-2xl font-bold">Projects</h2>
  <hr class="brd-fg" />

  {#if data.projects.length > 0}
    {#each data.projects as project}
      <div>
        <h3 class="text-xl font-semibold">{project.name}</h3>
        <p class="text-lg">{project.desc}</p>
      </div>
    {/each}
  {/if}
</div>
