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
            categories.find((category) => category.title === currentCategory)
                ?.images ?? []
        );
    });
</script>

<svelte:head>
    <title>Gallery | Arthur's Crafts</title>
</svelte:head>

<Header>
    <h1>Gallery</h1>
    <p>A collection of past work</p>
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
                onclick={() => (currentCategory = category.title)}
                class:active={currentCategory === category.title}
            >
                {category.title}
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
        margin-bottom: 2rem;

        & .active {
            color: var(--theme-accent);
            border-bottom: 2px solid currentColor;
        }

        button {
            padding-inline: 1rem;
            padding-block: 0.8rem 0.2rem;
            border: none;
            border-radius: 0;
            font-size: clamp(1rem, 5vw, 1.2rem);

            &:hover {
                background-color: var(--color-primary-dark);
            }
        }
    }

    .content {
        min-height: 60dvh;
    }
</style>
