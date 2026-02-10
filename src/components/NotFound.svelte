<script>
    let { onhome } = $props();
    let showRickroll = $state(false);
    let videoEl = $state();

    function handleGoHome() {
        showRickroll = true;
        setTimeout(() => {
            if (videoEl) {
                videoEl.muted = false;
                videoEl.play().catch((e) => {
                    console.warn(
                        "audio is blocked u bum, just watch the video",
                        e,
                    );
                    videoEl.muted = true;
                    videoEl.play();
                });
            }
        }, 0);
    }
</script>

{#if showRickroll}
    <div class="rickroll-container">
        <!-- svelte-ignore a11y_media_has_caption -->
        <video
            bind:this={videoEl}
            src="/rickroll.mp4"
            autoplay
            playsinline
            class="rickroll-video"
        ></video>
    </div>
{:else}
    <div class="not-found-container">
        <div class="content">
            <h1>404</h1>
            <p>where do you think you're going nerd</p>
            <button class="home-btn" onclick={handleGoHome}>Go Home</button>
        </div>
    </div>
{/if}

<style>
    .not-found-container {
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

    .rickroll-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 2000;
        background: black;
    }

    .rickroll-video {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .content {
        text-align: center;
        padding: 2rem;
        margin-bottom: 6vh;
    }

    @media (max-width: 480px) {
        .content {
            margin-bottom: 10vh;
        }
    }

    h1 {
        font-size: 6rem;
        color: #333;
        margin-bottom: 1rem;
        font-weight: 800;
        letter-spacing: -0.02em;
        line-height: normal;
    }

    p {
        font-size: 1.25rem;
        margin: 0 0 2rem;
        color: #666;
    }

    .home-btn {
        padding: 12px 24px;
        font-size: 1rem;
        cursor: pointer;
    }

    .home-btn:hover {
        opacity: 0.8;
    }
</style>
