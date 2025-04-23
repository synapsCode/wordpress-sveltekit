<script lang="ts">
    import '$lib/styles.scss';
    let {children} = $props();
</script>

<div class="pt-5 pb-5 has-background-black has-text-primary">
    <header class="container level is-mobile warning has-background-black">
        <h1 class="level-item level-left">Tyskfo tball</h1>
        <nav class="menu">
            <!-- TODO: jak zrobic aby menu byla elementem statycznym a nie dynamicznym S -->
            <ul class="menu-list columns">
                <li><a href="/category/bayern-munchen" class="has-text-primary">Bayern München</a></li>
                <li><a href="/category/borussia-dortmund" class="has-text-primary">Borussia Dortmund</a></li>
                <li><a href="/category/bayer-leverkusen" class="has-text-primary">Bayer Leverkusen</a></li>
                <li><a href="/category/schalke-04" class="has-text-primary">Schalke 04</a></li>
                <li><a href="/category/rb-leipzig" class="has-text-primary">RB Leipzig</a></li>
                <li><a href="/category/hertha-berlin" class="has-text-primary">Hertha Berlin</a></li>
                <li><a href="/category/wolfsburg" class="has-text-primary">Wolfsburg</a></li>
                <li><a href="/category/eintracht-frankfurt" class="has-text-primary">Eintracht Frankfurt</a></li>
            </ul>
        </nav>
    </header>
</div>


<main class="container pt-6">      
    {@render children()}
</main>

<style lang="scss">
    .menu-list li{
        padding-left: var(--bulma-size-normal);
    }
</style>