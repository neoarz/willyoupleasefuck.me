<script>
    import { fade, scale } from "svelte/transition";
    import logo from "../assets/captcha_logo.svg";
    import spinner from "../assets/captcha_spinner.svg";
    import success from "../assets/captcha_success.svg";
    import ImageChallenge from "./ImageChallenge.svelte";

    let { onverify } = $props();
    let status = $state("idle"); // 'idle' , 'loading' , 'challenge' , 'verified'
    let showChallenge = $state(false);

    function handleClick() {
        if (status !== "idle") return;

        status = "loading";
        showChallenge = true;

        setTimeout(() => {
            status = "challenge";
        }, 1500);
    }

    function handleChallengeVerify() {
        showChallenge = false;
        status = "verified";
        setTimeout(() => {
            onverify?.();
        }, 500);
    }
</script>

<div class="captcha-box">
    <div
        class="checkbox-container"
        onclick={handleClick}
        onkeydown={(e) => {
            if (e.key === "Enter" || e.key === " ") handleClick();
        }}
        role="button"
        tabindex="0"
    >
        <div class="checkbox-wrapper">
            {#if status === "idle"}
                <div class="checkbox" transition:fade={{ duration: 100 }}></div>
            {:else if status === "loading" || status === "challenge"}
                <img
                    src={spinner}
                    alt="loading"
                    class="spinner"
                    transition:fade={{ duration: 100 }}
                />
            {:else if status === "verified"}
                <img
                    src={success}
                    alt="verified"
                    class="icon"
                    in:scale={{ duration: 200, start: 0.5 }}
                />
            {/if}
        </div>
        <p class="label">I'm not a robot</p>
    </div>

    <div class="logo-container">
        <img src={logo} alt="reCAPTCHA" class="logo" />
        <p class="terms">Privacy - Terms</p>
    </div>

    {#if showChallenge}
        <ImageChallenge
            onverify={handleChallengeVerify}
            visible={status === "challenge"}
        />
    {/if}
</div>

<style>
    .captcha-box {
        position: relative;
        background-color: #fafafa;
        border: 1px solid #d6d6d6;
        border-radius: 2px;
        box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.1);
        width: 300px;
        height: 74px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 12px;
        box-sizing: border-box;
        font-family: "Roboto", sans-serif;
        user-select: none;
        transform: scale(1.25);
        transform-origin: center;
    }

    .checkbox-container {
        display: flex;
        align-items: center;
        gap: 12px;
        cursor: pointer;
    }

    .checkbox-wrapper {
        width: 24px;
        height: 24px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .checkbox {
        width: 24px;
        height: 24px;
        background-color: white;
        border: 2px solid #c1c1c1;
        border-radius: 1px;
        box-sizing: border-box;
    }

    .checkbox:hover {
        border-color: #b2b2b2;
    }

    .spinner {
        width: 100%;
        height: 100%;
        object-fit: contain;
        animation: spin 1s linear infinite;
    }

    .icon {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    .label {
        font-size: 14px;
        font-weight: 500;
        color: #000;
        margin: 0;
    }

    .logo-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2px;
        margin-right: -2px;
        padding-top: 6px;
    }

    .logo {
        width: 48px;
        height: 48px;
        opacity: 0.7;
    }

    .terms {
        font-size: 8px;
        color: #a6a6a6;
        margin: 0;
        text-align: center;
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>
