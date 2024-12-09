<script lang="ts">
    import { PUBLIC_EMAIL, PUBLIC_INSTAGRAM } from "$env/static/public";
    import EmailIcon from "virtual:icons/carbon/email";
</script>

<footer>
    <section>
        <h4>Contact</h4>

        {#if PUBLIC_EMAIL}
            <span>
                Email:
                <a
                    href="mailto:  {PUBLIC_EMAIL}?subject =F contact"
                    target="_blank"
                >
                    {PUBLIC_EMAIL}
                </a>
            </span>
        {/if}

        {#if PUBLIC_INSTAGRAM}
            <span>
                Instagram:
                <a
                    href="https://www.instagram.com/{PUBLIC_INSTAGRAM}"
                    target="_blank"
                >
                    @{PUBLIC_INSTAGRAM}
                </a>
            </span>
        {/if}
    </section>
    <div class="detail">
        <p>
            © Arthur Blight 2023 - {new Date().getFullYear()} All rights reserved.
        </p>
    </div>
</footer>

<style lang="scss">
    footer {
        position: relative;
        background-color: var(--theme-tertiary);
        display: flex;
        justify-content: center;
        gap: 2rem;
        text-align: center;

        padding-inline: 2rem;
        padding-block: 1.5rem 4rem;
        box-shadow: 0 0 10px 3px rgba(black, 0.8);

        section {
            display: flex;
            flex-direction: column;
            gap: 0.5em;

            span {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 0.5rem;

                opacity: 0.8;
                font-size: 0.9em;
            }
        }
    }

    a {
        &:hover {
            color: var(--theme-accent);
        }
    }

    .detail {
        position: absolute;
        bottom: 1rem;
        font-size: 0.8rem;
        opacity: 0.8;
    }
</style>
