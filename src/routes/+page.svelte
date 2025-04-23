<script lang="ts">
    import type { ApiResponse } from '$lib/models/api-response';
    import {loadMorePosts} from '$lib/';
    import type { PageProps } from './$types';
    import { onMount } from 'svelte';

    let { data }: PageProps = $props();
    let posts: ApiResponse['data']['posts'] = $state(data.posts.data.posts);
    let currentPage = $state(data.page);
    let postPerPage = $state(data.perPage);
    let isLoading = $state(false);
    let hasMorePosts = true; //sprawdzamy czy są jeszcze posty ale to nie ma znaczenia
    console.log('Initial posts:', data.page, data.page);
    

</script>

<div class="fixed-grid has-3-cols">
    <div class="grid is-gap-4 is-gap-1">
        {#each posts as item}
            <div class="cell">
                <img src={item.featured_image} alt={item.title} class="skeleton-block"/>
                <h2>{item.title}</h2>
                <p>{item.excerpt}</p>
                <p>{@html item.excerpt}</p>
            </div>
        {/each}
    </div>  
</div>

<h2>wad</h2>
<button onclick={() => loadMorePosts()} disabled={isLoading}>
    {#if isLoading}
        Loading...
    {:else}
        Load more posts
    {/if}
</button>
