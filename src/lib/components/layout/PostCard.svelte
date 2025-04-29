<script lang="ts">
    const {post} = $props();
</script>


<div class="cell">
    <img src={post.featured_image} alt={post.title} class="skeleton-block"/>
    <h2 class="is-size-4">{post.title}</h2>
</div>