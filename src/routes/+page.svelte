<script lang="ts">
    import { get } from  'svelte/store';
    import { loadMorePosts, posts, currentPage, isLoading } from '$lib'; // Alias for /src/lib/index.js in SvelteKit
    import type { PageProps } from './$types';
	import { onMount } from 'svelte';


    console.log('Page props:', get(posts));

    let { data }: PageProps = $props();

</script>

<svelte:head>
  <title>Moja Strona Główna</title>
  <meta property="og:title" content="Moja Strona Główna" />
  <meta property="og:description" content="Witaj na mojej stronie! Znajdziesz tu wiele ciekawych postów." />
  <meta property="og:image" content="https://mojastrona.pl/og-image.jpg" />
  <meta property="og:url" content="https://mojastrona.pl/" />
  <meta property="og:type" content="website" />
</svelte:head>

<main class="fixed-grid has-3-cols has-1-cols-mobile has-2-cols-tablet has-2-cols-desktop has-3-cols-widescreen">
    <div class="grid is-gap-4 is-gap-1 	">
        {#if data.posts.isLoading}
            <div class="cell">
                <img src="/images/placeholder.png" alt="Loading..." class="skeleton-block"/>
                <h2>Loading...</h2>
                <p>Loading...</p>
            </div>
        {/if}
        
        {#if data.posts.error}
            <div class="cell">
                <p>Error loading posts: {data.posts.error}</p>
            </div>
        {/if}
        {#each data.posts.data.posts as item}
            <div class="cell">
                <img src={item.featured_image} alt={item.title} class="skeleton-block"/>
                <h2>{item.title}</h2>
                <!-- <p>{@html item.excerpt}</p> -->
            </div>
        {/each}
            {#if get(posts).length === 0}
                <p>No posts found.</p>
            {:else}
                {#each $posts as post}
                <div class="cell">
                    <img src={post.featured_image} alt={post.title} class="skeleton-block"/>
                    <h2>{post.title}</h2>
                    <p>{post.excerpt}</p>
                    <p>{@html post.excerpt}</p>
                </div>
            {/each} 
            {/if}                   
    </div>  
</main>

<button onclick={() => loadMorePosts()}>
    {#if $isLoading}
        Loading...
    {:else}
        Load more posts
    {/if}
</button>
