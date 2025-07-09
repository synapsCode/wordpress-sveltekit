<!--
Sugestie:
1. Rozważ wydzielenie logiki pobierania postów do osobnego store lub composable, aby uniknąć duplikacji kodu między stronami.
2. Użyj komponentu do wyświetlania listy postów, aby kod był bardziej reużywalny.
3. Dodaj obsługę paginacji lub przycisk "Załaduj więcej", jeśli chcesz ładować kolejne posty bez przeładowania strony.
4. Rozważ obsługę błędów i wyświetlanie komunikatów użytkownikowi w przypadku problemów z API.
5. Jeśli korzystasz z TypeScript, dodaj typowanie dla pobieranych danych (np. interfejs Post).
-->

<script>
	import { get } from 'svelte/store';
	import { loadMorePosts, posts, isLoading, currentPage } from '$lib'; // Alias for /src/lib/index.js in SvelteKit
	import PostCard from '$lib/components/layout/PostCard.svelte';
	let { data } = $props();
	// Example data fetching logic (replace with actual API call)
	//TODO: czym się różńi $state od writable
	console.log(data);
</script>

<svelte:head>
	<title>Moja Strona Główna</title>
	<meta property="og:title" content="Moja Strona Kategori" />
	<meta
		property="og:description"
		content="Witaj na mojej stronie! Znajdziesz tu wiele ciekawych postów."
	/>
	<meta property="og:image" content="https://mojastrona.pl/og-image.jpg" />
	<meta property="og:url" content="https://mojastrona.pl/" />
	<meta property="og:type" content="website" />
</svelte:head>

<main
	class="fixed-grid has-3-cols has-1-cols-mobile has-2-cols-tablet has-2-cols-desktop has-3-cols-widescreen"
>
	<div class="grid is-gap-4 is-gap-1">
		{#if data.error}
			<div class="cell">
				<p>Error loading posts: {data.error}</p>
			</div>
		{:else}
			{#each data.posts.data.posts as post}
				<PostCard {post} />
			{/each}
		{/if}
		{#if $posts.length === 0 && $currentPage !== 1}
			<p>No posts found.</p>
		{:else}
			{#each $posts as post}
				<PostCard {post} />
			{/each}
		{/if}
	</div>
	{#if $isLoading}
		<div class="cell">
			<img src="/images/placeholder.png" alt="Loading..." class="skeleton-block" />
			<h2>Loading...</h2>
		</div>
	{/if}
	<button onclick={() => loadMorePosts()} class="button">
		{#if $isLoading}
			Loading...
		{:else}
			Load more posts
		{/if}
	</button>
</main>
