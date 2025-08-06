<script lang="ts">
  import { data } from "$lib/state/index.svelte";
</script>

<div class="grid gap5 p10">
  {data.workExp[1]?.company}
</div>
