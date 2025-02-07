<script lang="ts">
    import type { Image } from "lib/Image";

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
        <img src={image.path} alt={image.name} />
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

    .meta {
        opacity: 0;
        transition: opacity 0.4s;
        position: absolute;
        inset: 0;
        background-color: rgba(0, 0, 0, 0.5);
        padding: 0.5rem;
        font-size: 1.5rem;
        font-weight: 300;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2;

        h2 {
            font-size: 1.5rem;
            font-weight: bold;
        }
    }

    .hasProject {
        position: relative;
        &::after {
            z-index: 3;
            content: "";
            position: absolute;
            right: 0.4rem;
            bottom: 0.4rem;
            background-color: var(--theme-accent);
            border-radius: 50%;
            width: 4px;
            height: 4px;
            @include boxShadow;
        }
    }
</style>
