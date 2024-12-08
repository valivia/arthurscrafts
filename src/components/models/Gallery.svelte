<script lang="ts">
    import GalleryImage from "components/parts/GalleryImage.svelte";
    import type { Image } from "lib/Image";

    interface Props {
        images: Image[];
        sizeMultiplier?: number;
    }

    let { images, sizeMultiplier }: Props = $props();
</script>

<section>
    {#each images as image}
        <GalleryImage {image} {sizeMultiplier} />
    {/each}
</section>

<style lang="scss">
    section {
        display: flex;
        flex-wrap: wrap;

        &::after {
            content: "";
            flex-grow: 999999999;
        }
    }
</style>
