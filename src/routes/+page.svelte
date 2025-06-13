<script>
    import { PUBLIC_EMAIL } from "$env/static/public";
    import Socials from "components/models/Socials.svelte";
</script>

<header>
    <h1>Arthur's Crafts</h1>
    <p>Inspired by history</p>

    <Socials />
</header>

<main>
    <section>
        <h2>About me<span>.</span></h2>
        <p>
            Somerset based craftsman and traditional skills enthusiast working
            in a small workshop to produce historically inspired pieces from
            many different materials, ranging from wood, steel, copper alloys
            and silver, to leather, horn and bone.
        </p>

        <p>
            I also offer <a href="/workshops"> Workshops </a> on a variety of traditional
            skills and crafts.
        </p>

        <p>
            Take a look at my <a href="/gallery"> gallery </a>  to see some of my past pieces, and my
            workshops page to see my upcoming courses. I do accept commissions
            via my
            <a
                href="mailto: {PUBLIC_EMAIL}?subject =F contact"
                target="_blank"
                aria-label="Email"
            >
                email.
            </a>
        </p>
    </section>
</main>

<style lang="scss">
    @use "styles/parts/utils" as *;
    $color: rgba(0, 0, 0, 0.6);

    header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        height: 70vh;
        height: 70dvh;

        font-size: 2rem;

        margin-bottom: -1px;
        background: linear-gradient(
                0deg,
                var(--theme-primary),
                $color 10%,
                $color
            ),
            url("/assets/header.webp");
        background-size: cover;
        background-position: center;

        text-align: center;

        font-size: clamp(2.5rem, 5vw, 4rem);

        h1 {
            font-weight: 100;
            font-size: 1em;
        }

        p {
            font-size: 0.5em;
        }
    }

    main {
        padding-block: 5rem;
    }

    section {
        width: min(100%, 80ch);
        margin-inline: auto;
        padding: 1rem;
        margin-block: 2rem;

        h2 {
            font-size: 2.5rem;
            font-weight: 100;
            margin-bottom: 1rem;

            span {
                color: var(--theme-accent);
            }
        }

        p {
            font-size: 1.3rem;
            line-height: 1.5;
            margin-bottom: 1rem;
        }
    }
</style>
