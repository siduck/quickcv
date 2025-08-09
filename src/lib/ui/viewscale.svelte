<script lang="ts">
  import { ui } from "$lib/state/index.svelte";
</script>

<input type="range" min="1" max="100" bind:value={ui.viewScale} />
