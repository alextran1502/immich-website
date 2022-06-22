<script context="module" lang="ts">
	export const prerender = true;
</script>

<script>
	import Dedication from '$lib/ui-components/dedication.svelte';
	import Hero from '$lib/ui-components/hero.svelte';
	import NavBar from '$lib/ui-components/nav-bar.svelte';
</script>

<svelte:head>
	<title>Self-hosted media backup solution | Immich</title>
</svelte:head>

<NavBar />

<section class="sm:h-[200vh] overflow-hidden">
	<Hero />
</section>

<section>
	<Dedication />
</section>
