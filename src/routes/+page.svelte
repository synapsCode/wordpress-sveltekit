<script lang="ts">
    import type { ApiResponse } from '$lib/models/api-response';
    import type { PageProps } from './$types';
    let { data }: PageProps = $props();
    let posts = data.posts as ApiResponse;
</script>
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>


<div class="fixed-grid  has-3-cols">
    <div class="grid is-gap-4 is-gap-1">
    {#each posts.data.posts as item}
        <div class="cell">
            <img src={item.featured_image} alt={item.title} class="skeleton-block"/>
            <h2>{item.title}</h2>
            <p>{item.excerpt }</p>
            <p>{@html item.excerpt}</p>
        </div>
        {/each}
    </div>  
</div>
