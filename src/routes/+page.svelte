<script lang="ts">
    import type { PageProps } from './$types';
    let {data}: PageProps = $props();
    console.log(data.posts.data.posts);
</script>
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>


{#each data.posts.data.posts as item}
    <div>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <article>
            <img src={item.featured_image} alt={item.title} />
            <p>{@html item.content}</p>
    </div>
{/each}
