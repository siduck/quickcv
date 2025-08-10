<script lang="ts">
  import { ui } from "$lib/state/index.svelte";
</script>

<div class="brd frow p2 rounded">
  <i class='i-iconamoon:zoom-in'></i>
  <input
    type="range"
    min="1"
    max="100"
    bind:value={ui.viewScale}
    class="progress"
  />
  <span style="width: 4ch;">{ui.viewScale}%</span>
</div>
