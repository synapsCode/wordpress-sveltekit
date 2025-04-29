<script lang="ts">
    import { get } from  'svelte/store';
    import { loadMorePosts, posts, isLoading, currentPage } from '$lib'; // Alias for /src/lib/index.js in SvelteKit
    import type { PageProps } from './$types';
	import PostCard from '$lib/components/layout/PostCard.svelte';

    let { data }: PageProps = $props();
</script>

<svelte:head>
  <title>Moja Strona Główna</title>
  <meta property="og:title" content="Moja Strona Główna" />
  <meta property="og:description" content="Witaj na mojej stronie! Znajdziesz tu wiele ciekawych postów." />
  <!-- <meta property="og:image" content="https://mojastrona.pl/og-image.jpg" /> -->
  <meta property="og:url" content="https://mojastrona.pl/" />
  <meta property="og:type" content="website" />
</svelte:head>

<main class="fixed-grid has-3-cols has-1-cols-mobile has-2-cols-tablet has-2-cols-desktop has-3-cols-widescreen">
    <div class="grid is-gap-4 is-gap-1 	">

        
        {#if data.error}
            <div class="cell">
                <p>Error loading posts: {data.error}</p>
            </div>
        {:else}
            {#each data.posts.data.posts as post}
                 <PostCard  post={post}/>
            {/each}
        {/if}
        {#if $posts.length === 0 && $currentPage !== 1  }
            <p>No posts found.</p>
        {:else}
            {#each $posts as post}
                <PostCard  post={post}/>
            {/each} 
        {/if}                   
    </div>  
    {#if $isLoading}
        <div class="cell">
            <img src="/images/placeholder.png" alt="Loading..." class="skeleton-block"/>
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

