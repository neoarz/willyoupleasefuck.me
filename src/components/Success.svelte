<svelte:options runes={true} />

<div class="success-container">
    <div class="content">
        <h1>Wow you made it congrats!</h1>
        <p>dm <strong>neoarz</strong> on discord for a cookie</p>
        <p>send this website to your friends to rickroll them as well!!</p>

        <div class="links">
            <a
                href="https://github.com/neoarz"
                target="_blank"
                rel="noopener noreferrer">GitHub</a
            >
            <span class="separator">|</span>
            <a
                href="https://github.com/neoarz/willyoupleasefuck.me"
                target="_blank"
                rel="noopener noreferrer">Source</a
            >
        </div>
    </div>
</div>

<style>
    .success-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #f9f9f9;
        z-index: 1000;
        font-family: "Roboto", sans-serif;
    }

    .content {
        text-align: center;
        padding: 2rem;
    }

    @media (max-width: 480px) {
        .content {
            margin-bottom: 8vh;
        }
    }

    h1 {
        font-size: 2.5rem;
        color: #333;
        margin-bottom: 1rem;
        font-weight: 800;
        letter-spacing: -0.02em;
    }

    p {
        font-size: 1.25rem;
        color: #666;
    }

    .links {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 3rem;
        gap: 1.5rem;
        font-size: 1.1rem;
        color: #888;
    }

    a {
        color: #5865f2;
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }

    .separator {
        color: #888;
    }
</style>
