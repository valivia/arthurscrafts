<script lang="ts">
    import Footer from "components/layout/Footer.svelte";
    import Nav from "components/layout/Nav.svelte";

    let { children } = $props();
</script>

<Nav />
{@render children()}
<Footer />

<svelte:head>
    <meta name="theme-color" content="#bf8d50" />
</svelte:head>

<style lang="scss" global>
    @use "styles/global.scss" as *;
</style>
