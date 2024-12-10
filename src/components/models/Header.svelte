<script lang="ts">
    import type { Snippet } from "svelte";

    interface Props {
        children?: Snippet;
    }

    let { children }: Props = $props();
</script>

<header>
    {#if children}
        {@render children()}
    {/if}
</header>

<style lang="scss">
    header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        height: 30vh;
        height: 30dvh;
        padding-top: 10vh;

        font-size: 2rem;

        text-align: center;

        font-size: clamp(2.5rem, 5vw, 3.5rem);

        :global(h1) {
            font-weight: 100;
            font-size: 1em;
        }

        :global(p) {
            font-size: 0.5em;
            opacity: 0.8;
        }
    }
</style>
