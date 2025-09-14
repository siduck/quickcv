<script lang="ts">
  import icons from "$lib/icons";
  import { formatUrl, textAreaFormat } from "$lib/utils";
  import { data } from "$lib/state/index.svelte";

  let name = $derived(data.details?.name?.split(" "));
  let name2 = $derived(name?.slice(1))
</script>

{#snippet hicon(icon: string)}
  <span class={`flex p1.5 bg-secondary text-xl rounded-full`}>
    {@html icons[icon]}
  </span>
{/snippet}

<!---------------------- name -------------------------------- -->
<div class="frow mx-auto">
  <h1 class="text-4xl">{name?.[0]}</h1>
  <h1 class="text-primary text-4xl">{name2?.join(' ')}</h1>
</div>

<span class="text-(center xl) mb3 font-light">{data.details.role}</span>

<div class="frow border-(t b solid fg) py3 text-sm justify-center [&>*]:gap2">
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
</div>

<!---------------------- About -------------------------------- -->
<h2 class="frow">{@render hicon("bullseye")}About :</h2>

<p>{data.details.about}</p>

<h2 class="frow">{@render hicon("briefcase")}Experience :</h2>

{#each data.workExp as work}
  <div class="frow flex-wrap gap-y-1 mb4">
    <span>
      <strong>{work.title} </strong>
      - {work.company}
    </span>
    <span class="ml-auto badge-surface-sm">
      {work.date}
    </span>

    <ul class="list-disc space-y-2 text-secondary-fg ml-2">
      {#each textAreaFormat(work?.desc) as x}
        <li class="ml-2">{x}.</li>
      {/each}
    </ul>
  </div>
{/each}

<!---------------------- Education -------------------------------- -->
<h2 class="frow">{@render hicon("edu")}Education :</h2>

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

<h2 class="frow">{@render hicon("brain")}Skills :</h2>

<div class="frow flex-wrap mb4 mt2">
  {#each data.skills as x}
    <span class="badge-secondary">
      {#if x.icon}
        {@html x.icon}
      {/if}
      {x.name}
    </span>
  {/each}
</div>

<h2 class="frow">{@render hicon("opensource")}Projects :</h2>

{#if data.projects.length > 0}
  {#each data.projects as project}
    <div class="flex flex-wrap">
      <span class="badge-lg bg-fg text-primary-fg rounded-b-0"
        >{project.name}</span
      >
      <a href={project.link} target="_blank" class="ml-auto">Link</a>
      <p class="brd-2-fg p3 rounded rounded-tl-0 w-full">{project.desc}</p>
    </div>
  {/each}
{/if}
