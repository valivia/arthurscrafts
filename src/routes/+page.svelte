<script>
    import Chevron from "components/icons/Chevron.svelte";
</script>

<svelte:head>
    <title>Arthur's Crafts</title>
    <meta
        name="description"
        content="Somerset based craftsman and traditional skills enthusiast working predominantly with hand tools to produce hand crafted, historically inspired pieces from many different materials, ranging from wood, steel, copper alloys and silver, to leather, horn and bone."
    />
</svelte:head>

<header>
    <h1>Arthur's Crafts</h1>
    <p>Inspired by history</p>

    <Chevron direction="down" size="1em" />
</header>

<main>
    <h2>About</h2>
    <p>
        Somerset based craftsman and traditional skills enthusiast working
        predominantly with hand tools to produce hand crafted, historically
        inspired pieces from many different materials, ranging from wood, steel,
        copper alloys and silver, to leather, horn and bone.
    </p>

    <p>
        I also offer Workshops on a variety of traditional skills. (coming soon)
        Take a look at my gallery to see some of my past pieces, and my
        workshops page to see my upcoming courses. I do accept commissions via
        my email: And I have an etsy store where you can browse items I have in
        stock: (coming soon)
    </p>
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

        background: linear-gradient(0deg, $color, $color),
            url("/assets/header.jpg");
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
        width: min(100%, 80ch);
        margin-inline: auto;
        padding: 1rem;
        margin-block: 2rem;

        h2 {
            font-size: 2rem;
            margin-bottom: 1rem;
        }

        p {
            font-size: 1.3rem;
            line-height: 1.5;
            margin-bottom: 1rem;
        }
    }
</style>
