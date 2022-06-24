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
	<meta
		name="description"
		content="open source, high performance self-hosted backup solution for videos and photos on your mobile phone, Immich, google photos, alternative to google photos, images, media"
	/>
	<meta
		name="robots"
		content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
	/>
</svelte:head>

<NavBar />

<section class="sm:h-[200vh] overflow-hidden">
	<Hero />
</section>

<section>
	<Dedication />
</section>
