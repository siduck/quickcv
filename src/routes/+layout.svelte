<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
  import "virtual:uno.css"
  import "@unocss/reset/tailwind.css";
  import "$lib/css/style.css"

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()}
