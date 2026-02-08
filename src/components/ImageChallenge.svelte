<script>
    import refresh from "../assets/icon_refresh.svg";
    import audio from "../assets/icon_audio.svg";
    import info from "../assets/icon_info.svg";

    let { onverify, visible = false } = $props();
    let videoEl;

    $effect(() => {
        if (visible && videoEl) {
            videoEl.currentTime = 0.1;
            videoEl.muted = false;
            videoEl.play().catch((e) => {
                console.warn("audio is blocked u bum, just watch the video", e);
                videoEl.muted = false;
                videoEl.play();
            });
        }
    });
</script>

<div class="challenge-box" class:visible>
    <div class="header">
        <p>Select all images with a <strong>Rickroll</strong></p>
    </div>

    <div class="content-area">
        <video
            bind:this={videoEl}
            src="/rickroll.mp4"
            playsinline
            muted
            preload="auto"
            disablePictureInPicture
            controlsList="nodownload nofullscreen noremoteplayback"
            class="rickroll-video"
            oncontextmenu={(e) => e.preventDefault()}
        ></video>
    </div>

    <div class="footer">
        <div class="icons">
            <img src={refresh} alt="Refresh" />
            <img src={audio} alt="Audio" />
            <img src={info} alt="Info" />
        </div>
        <button class="verify-btn" onclick={onverify}>VERIFY</button>
    </div>
</div>

<style>
    .challenge-box {
        position: absolute;
        top: 50%;
        left: 46px;
        transform: translateY(-50%);
        width: 310px;
        background-color: white;
        box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.08);
        border: 1px solid #d6d6d6;
        border-radius: 2px;
        z-index: 1000;
        background: #fff;
        padding: 7px;
        box-sizing: border-box;
        font-family: "Roboto", sans-serif;
        display: flex;
        flex-direction: column;
        gap: 7px;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.2s ease-out;
    }

    .challenge-box.visible {
        opacity: 1;
        pointer-events: auto;
    }

    @media (max-width: 480px) {
        .challenge-box {
            position: fixed;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
            width: 100%;
            max-width: none;
            border-radius: 0;
            border-left: none;
            border-right: none;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
            z-index: 9999;
        }

        .challenge-box::before {
            display: none;
        }
    }

    .challenge-box::before {
        content: "";
        position: absolute;
        left: -6px;
        top: 50%;
        transform: translateY(-50%) rotate(45deg);
        width: 10px;
        height: 10px;
        background-color: white;
        border-left: 1px solid #d6d6d6;
        border-bottom: 1px solid #d6d6d6;
        box-shadow: -1px 1px 2px rgba(0, 0, 0, 0.05);
        z-index: 1001;
    }

    .header {
        background-color: #468ee5;
        color: white;
        padding: 24px 16px;
        font-size: 14px;
        line-height: normal;
    }

    .header p {
        margin: 0;
    }

    .header strong {
        font-weight: 900;
        font-size: 24px;
        display: block;
    }

    .content-area {
        width: 100%;
        height: 300px;
        background-color: black;
        overflow: hidden;
    }

    .rickroll-video {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }

    .rickroll-video::-webkit-media-controls-picture-in-picture-button {
        display: none;
    }

    .footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px 0 0 0;
        border-top: 1px solid #dfdfdf;
    }

    .icons {
        display: flex;
        gap: 12px;
    }

    .icons img {
        width: 24px;
        height: 24px;
        opacity: 0.55;
        cursor: pointer;
    }

    .icons img:hover {
        opacity: 0.8;
    }

    .verify-btn {
        background-color: #468ee5;
        color: white;
        border: none;
        padding: 10px 24px;
        border-radius: 2px;
        font-weight: bold;
        font-size: 14px;
        cursor: pointer;
    }

    .verify-btn:hover {
        background-color: #3a7bc0;
    }
</style>
