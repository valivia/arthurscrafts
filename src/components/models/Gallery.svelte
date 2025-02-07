<script lang="ts">
    import GalleryImage from "components/parts/GalleryImage.svelte";
    import { IChevronLeft, IChevronRight } from "lib/icons";
    import type { Image } from "lib/Image";
    import { fly } from "svelte/transition";

    interface Props {
        images: Image[];
        sizeMultiplier?: number;
    }

    let { images, sizeMultiplier }: Props = $props();

    let imageIndex: number | null = $state(null);
    let direction = $state(1);
    let currentImage = $derived.by(() =>
        imageIndex === null ? null : images[imageIndex],
    );

    function changeIndex(change: number) {
        if (imageIndex === null) return;
        imageIndex += change;
        direction = change;
        if (imageIndex < 0) imageIndex = images.length - 1;
        if (imageIndex >= images.length) imageIndex = 0;
    }
</script>

<section>
    <div class="preview" class:showModal={currentImage !== null}>
        <button
            class="navigation"
            onclick={() => changeIndex(-1)}
            class:hidden={images.length == 1}
        >
            <IChevronLeft width="2em" height="2em" />
        </button>

        <button class="image" onclick={() => (imageIndex = null)}>
            {#if currentImage !== null}
                <picture>
                    <img
                        class="image shadow"
                        src={currentImage.path}
                        alt={currentImage.name}
                        in:fly={{
                            x: direction > 0 ? 200 : -200,
                            duration: 200,
                            opacity: 0.5,
                        }}
                    />
                </picture>
            {/if}
        </button>

        <button
            class="navigation"
            onclick={() => changeIndex(1)}
            class:hidden={images.length == 1}
        >
            <IChevronRight width="2em" height="2em" />
        </button>
    </div>

    {#each images as image, index}
        <GalleryImage
            {image}
            {sizeMultiplier}
            onclick={() => (imageIndex = index)}
        />
    {/each}
</section>

<style lang="scss">
    @use "styles/parts/breakpoint" as *;

    section {
        display: flex;
        flex-wrap: wrap;

        &::after {
            content: "";
            flex-grow: 999999999;
        }
    }

    .preview {
        display: none;
        grid-template-columns: auto 1fr auto;
        grid-template-rows: 1fr;
        grid-template-areas: "previous preview next";

        align-items: center;

        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        background-color: rgba(0, 0, 0, 0.8);
        z-index: var(--z-modal);
        padding: 0.5em;

        &.showModal {
            display: grid;
        }

        .navigation {
            flex: 10;
            z-index: 2;
            padding-inline: 2rem;

            &:first-child {
                grid-area: previous;
            }

            &:last-child {
                grid-area: next;
            }

            &.hidden {
                display: none;
            }
        }

        button {
            border: none;
            background: none;
            padding: 0;
            margin: 0;
            height: 100%;

            &:focus-visible {
                outline: none;
                outline: 2px solid var(--theme-accent);
                color: var(--theme-accent);
            }
        }

        .image {
            grid-column: 1 / 4;
            grid-row: 1 / 2;
            display: grid;
            place-items: center;
            width: 100%;
            overflow: hidden;
            height: 100%;
            grid-template-columns: 1fr auto 1fr;

            @include medium() {
                grid-column: 2 / 3;
            }

            & picture {
                display: contents;
            }

            & img {
                grid-area: 1 / 1 / 2 / 4;
                max-width: 100%;
                max-height: 100%;

                object-fit: contain;

                border-radius: var(--border-radius);
            }
        }
    }
</style>
