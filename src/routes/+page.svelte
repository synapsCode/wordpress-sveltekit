<script lang="ts">
    import type { ApiResponse } from '$lib/models/api-response';
    import type { PageProps } from './$types';
    import { onMount } from 'svelte';

    let { data }: PageProps = $props();
    let posts: ApiResponse['data']['posts'] = data.posts.data.posts;
    let currentPage = 1;
    let isLoading = false;
    let hasMorePosts = true; //sprawdzamy czy są jeszcze posty ale to nie ma znaczenia
    console.log('Initial posts:', posts);
    async function loadMorePosts() {
        if (isLoading || !hasMorePosts) return;
        isLoading = true;
        console.log('Loading more posts...', isLoading);
        // https://tyskfotball.com/wp-json/custom/v1/posts?per_page=${perPage}&page=${page}
        try {
            const response = await fetch(`https://tyskfotball.com/wp-json/custom/v1/posts?per_page=5&page=${currentPage + 1}`);
            console.log('Loading more posts from page:', response);
            if (!response.ok) {
                throw new Error('Failed to load more posts');
            }

            const newData: ApiResponse = await response.json();
            if (newData.data.posts.length === 0) {
                hasMorePosts = false;
            } else {
                posts = [...posts, ...newData.data.posts];
                currentPage++;
            }
        } catch (error) {
            console.error(error);
        } finally {
            isLoading = false;
        }
        console.log('Updated posts:', isLoading);
    }

    function handleScroll() {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
        if (scrollTop + clientHeight >= scrollHeight - 100) {
            loadMorePosts();
        }
    }

    onMount(() => {
        window.addEventListener('scroll', handleScroll);
        console.log("Scroll event listener added");
        return () => window.removeEventListener('scroll', handleScroll);
    });
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

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

{#await true}
    <div class="loading">
        <p>Loading...</p>
    </div>
{:catch error}
    <div class="error">
        <p>Error: {error.message}</p>
    </div> 
{/await}
