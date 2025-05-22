<script lang="ts">
    import {
        PUBLIC_EMAIL,
        PUBLIC_INSTAGRAM,
    } from "$env/static/public";
    import LogoInstagram from "virtual:icons/carbon/logoInstagram";
    import EmailIcon from "virtual:icons/carbon/email";
</script>

<section>
    <a
        target="_blank"
        href="https://www.instagram.com/{PUBLIC_INSTAGRAM}"
        aria-label="Instagram profile"
    >
        <LogoInstagram />
    </a>
    <a target="_blank" href="mailto: {PUBLIC_EMAIL}" aria-label="Email">
        <EmailIcon />
    </a>
</section>

<style lang="scss">
    section {
        font-size: 1.5rem;
        padding-block: 1rem;
        a:hover {
            color: var(--theme-accent);
        }
    }
</style>
