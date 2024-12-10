<script lang="ts">
    import Header from "components/models/Header.svelte";
    import Gallery from "components/models/Gallery.svelte";

    let { data } = $props();

    let categories = data.categories;
    let currentCategory: string | null = $state(null);

    let images = $derived.by(() => {
        if (currentCategory === null)
            return categories.flatMap((category) => category.images);
        return (
            categories.find((category) => category.name === currentCategory)
                ?.images ?? []
        );
    });
</script>

<svelte:head>
    <title>Gallery | Arthur's Crafts</title>
</svelte:head>

<Header>
    <h1>Gallery</h1>
</Header>

<main>
    <nav class="categorySelect">
        <button
            onclick={() => (currentCategory = null)}
            class:active={currentCategory === null}
        >
            All
        </button>
        {#each categories as category}
            <button
                onclick={() => (currentCategory = category.name)}
                class:active={currentCategory === category.name}
            >
                {category.name}
            </button>
        {/each}
    </nav>
    <div class="content">
        {#if images.length === 0}
            <p>No images found.</p>
        {:else}
            <Gallery {images} sizeMultiplier={1} />
        {/if}
    </div>
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

    .categorySelect {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin-bottom: 1rem;

        & .active {
            color: var(--theme-accent);
            border-bottom: 2px solid currentColor;
        }

        button {
            padding-inline: 1rem;
            padding-block: 0.8rem 0.2rem;
            border: none;
            border-radius: 0;
            background-color: var(--color-primary);
            cursor: pointer;
            transition: background-color 0.2s;

            text-transform: capitalize;

            &:hover {
                background-color: var(--color-primary-dark);
            }
        }
    }

    .content {
        min-height: 60dvh;
    }
</style>
