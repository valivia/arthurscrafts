<script lang="ts">
    import Logo from "./Logo.svelte";
    import { page } from "$app/stores";
</script>

{#snippet Link(name: string, url: string)}
    <li class="button">
        <a
            href={url}
            aria-current={$page.url.pathname === url}
            data-sveltekit-keepfocus>{name}</a
        >
    </li>
{/snippet}

<nav class="main">
    <ul class="list">
        {@render Link("Workshops", "/workshops")}

        <li class="logo">
            <a
                href={"/"}
                aria-label="Home"
                aria-current={$page.url.pathname === "/"}
                data-sveltekit-keepfocus
            >
                <Logo />
            </a>
        </li>

        {@render Link("Gallery", "/gallery")}
    </ul>
</nav>

<style lang="scss">
    @use "styles/parts/utils" as *;

    $height: 4rem;
    $padding: 1rem;

    .main {
        @include noselect;
        padding-top: $padding;
        height: calc($height + $padding);
        margin-bottom: calc(-1 * $height - $padding);
        padding-inline: 1.2em;

        view-transition-name: nav;

        position: sticky;
        z-index: var(--z-nav);
        top: 0;

        background: linear-gradient(
            to bottom,
            rgba(black, 1) 0%,
            rgba(black, 1) 1%,
            rgba(black, 0) 100%
        );
    }

    .list {
        display: flex;
        justify-content: center;
        align-items: center;

        & * {
            display: block;
        }
    }

    .button,
    .logo {
        width: 16ch;

        // Alignment
        display: flex;
        justify-content: center;
        align-items: center;

        // Font
        font-size: Clamp(0.85rem, 2vw, 1.3rem);

        font-weight: 300;
        text-align: center;
        text-transform: uppercase;
    }

    .button {
        display: flex;
        position: relative;

        a {
            width: min-content;
        }

        a:after {
            background: none repeat scroll 0 0 transparent;
            bottom: -4px;
            content: "";
            display: block;
            height: 2px;
            left: 50%;
            position: absolute;
            background: currentColor;
            transition:
                width 0.3s ease 0s,
                left 0.3s ease 0s;
            width: 0;
        }
        a:hover:after {
            width: 100%;
            left: 0;
        }

        a[aria-current="true"] {
            pointer-events: none;
            cursor: default;
            color: var(--theme-accent);
        }
    }

    a:hover {
        color: var(--theme-accent);
    }

    .logo {
        :global(svg) {
            height: Clamp(0.6 * $height, 8vw, $height) !important;
        }
    }
</style>
