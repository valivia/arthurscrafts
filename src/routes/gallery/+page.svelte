<script>
    import Header from "components/models/Header.svelte";
    import Gallery from "components/models/Gallery.svelte";

    let { data } = $props();
</script>

<svelte:head>
    <title>Gallery | Arthur's Crafts</title>
</svelte:head>

<Header>
    <h1>Gallery</h1>
</Header>

<main>
    {#each data.categories as category}
        <h2>{category.name}</h2>
        <Gallery images={category.images} sizeMultiplier={1} />
    {:else}
        <p>No images yet</p>
    {/each}
</main>

<style lang="scss">
    main {
        width: min(100%, 120ch);
        margin-inline: auto;
        margin-bottom: 4rem;

        p {
            text-align: center;
        }
    }
</style>
