<script>
    import { onMount } from 'svelte';
    let {data} = $props();
    // Example data fetching logic (replace with actual API call)
    let posts = [];
    let loading = $state(true);

    // Simulate fetching posts for the given category slug
    onMount(async () => {
        try {
            // Replace with your API call
            const response = await fetch(`https://tyskfotball.com/wp-json/custom/v1/posts?per_page=5&page=1&category=${data.slug}`);
            posts = await response.json();
            console.log('Fetched posts:', posts);
        } catch (error) {
            console.error('Error fetching posts:', error);
        } finally {
            loading = false;
        }
    });
</script>

{#if loading}
    <p>Loading...</p>
{:else if posts.length === 0}
    <p>No posts found for this category.</p>
{:else}
    <div>
        <h1>Posts in category:</h1>
        <ul>
            {#each posts as post}
                <li>
                   <a>To jest wad</a>
                </li>
            {/each}
        </ul>
    </div>
{/if}

<style>
    h1 {
        font-size: 2rem;
        margin-bottom: 1rem;
    }

    ul {
        list-style: none;
        padding: 0;
    }

    li {
        margin-bottom: 0.5rem;
    }

    a {
        text-decoration: none;
        color: #0070f3;
    }

    a:hover {
        text-decoration: underline;
    }
</style>