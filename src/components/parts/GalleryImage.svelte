<script lang="ts">
    import { getImageUrl, type Image } from "lib/Image";

    interface Props {
        image: Image;
        sizeMultiplier?: number;
        onclick?: () => void;
    }

    let { image, sizeMultiplier = 1, onclick }: Props = $props();
</script>

<button
    {onclick}
    style="width:{(image.width * (sizeMultiplier * 200)) /
        image.height}px;flex-grow:{(image.width * (sizeMultiplier * 200)) /
        image.height}"
>
    <i style="padding-bottom:{(image.height / image.width) * 100}%"></i>

    <picture>
        <img src={getImageUrl(image)} alt={image.altText} />
    </picture>
</button>

<style lang="scss">
    @use "styles/parts/utils" as *;

    button {
        all: unset;
        cursor: pointer;
        margin: 4px;
        position: relative;
        overflow: hidden;
        @include boxShadow;
        border-radius: var(--border-radius);

        &:hover {
            outline: 2px solid var(--theme-accent);
        }

        :global(picture) {
            position: absolute;
            top: 0;
            width: 100%;
            vertical-align: bottom;
        }

        :global(img) {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    i {
        display: block;
    }
</style>
