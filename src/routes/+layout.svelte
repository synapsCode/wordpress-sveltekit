<script lang="ts">
    import '$lib/styles.scss';
    import logo from '$lib/images/logo.jpg';
    let {children} = $props();
</script>

<div class="pt-5 pb-5 has-background-black has-text-primary">
    <header class="container is-mobile warning has-background-black">
        <div><a class="logo" href="/" ><img src={logo} alt="Sporten logo" width="120" height="120" /></a></div>
        <nav class="menu">
            <!-- TODO: jak zrobic aby menu byla elementem statycznym a nie dynamicznym ? -->
            <ul class="menu-list is-flex is-desktop is-size-6">
                <li class=""><a href="/category/bayern-munchen" class="has-text-primary">Bayern München</a></li>
                <li class=""><a href="/category/borussia-dortmund" class="has-text-primary">Borussia Dortmund</a></li>
                <li class=""><a href="/category/bayer-leverkusen" class="has-text-primary">Bayer Leverkusen</a></li>
                <li class=""><a href="/category/schalke-04" class="has-text-primary">Schalke 04</a></li>
                <li class=""><a href="/category/rb-leipzig" class="has-text-primary">RB Leipzig</a></li>
                <li class=""><a href="/category/hertha-berlin" class="has-text-primary">Hertha Berlin</a></li>
                <li class=""><a href="/category/wolfsburg" class="has-text-primary">Wolfsburg</a></li>
                <li class=""><a href="/category/eintracht-frankfurt" class="has-text-primary">Eintracht Frankfurt</a></li>
            </ul>
        </nav>
    </header>
</div>


<main class="container pt-6">      
    {@render children()}
</main>

<style lang="scss">
    .logo{
        display: block;
        padding-bottom: 20px;
    }
    .menu-list li{
        flex-wrap: wrap;
        padding-right: calc(var(--bulma-size-normal)/2);
        margin-right: calc(var(--bulma-size-normal)/2);
        // border-right: 1px solid yellow;
    }
</style>