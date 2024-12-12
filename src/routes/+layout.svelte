<script lang="ts">
    import Footer from "components/layout/Footer.svelte";
    import Nav from "components/layout/Nav.svelte";

    let { children } = $props();
</script>

<svelte:head>
    <title>Arthur's Crafts</title>
    <meta name="theme-color" content="#cc5447" />
    <meta
        name="description"
        content="Somerset based craftsman and traditional skills enthusiast working
            in a small workshop to produce historically inspired pieces from
            many different materials, ranging from wood, steel, copper alloys
            and silver, to leather, horn and bone."
    />
</svelte:head>

<Nav />
{@render children()}
<Footer />

<style lang="scss" global>
    @use "styles/global.scss" as *;
</style>
