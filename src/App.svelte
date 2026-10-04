<script>
  import Captcha from "./components/Captcha.svelte";
  import Success from "./components/Success.svelte";

  import NotFound from "./components/NotFound.svelte";

  let verified = $state(false);
  let hash = $state(window.location.hash);
  let pathname = $state(window.location.pathname);

  let isNotFound = $derived.by(() => {
    const validPaths = ["/", "/index.html"];
    if (!validPaths.includes(pathname)) return true;

    const validHashes = ["", "#", "#success"];
    return !validHashes.includes(hash);
  });

  function syncLocation() {
    hash = window.location.hash;
    pathname = window.location.pathname;

    if (hash === "#success" && !verified) {
      window.location.hash = "";
    }
  }

  syncLocation();

  function handleVerify() {
    verified = true;
    setTimeout(() => {
      window.location.hash = "#success";
    }, 1000);
  }
</script>

<svelte:window onhashchange={syncLocation} onpopstate={syncLocation} />

<main>
  {#if isNotFound}
    <NotFound onhome={() => (window.location.href = "/")} />
  {:else if hash === "#success" && verified}
    <Success />
  {:else}
    <div class="center-container">
      <Captcha onverify={handleVerify} />
    </div>
  {/if}
</main>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    font-family: "Roboto", sans-serif;
    background-color: #f9f9f9;
  }

  main {
    width: 100vw;
    height: 100vh;
    height: 100dvh;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
  }

  @media (max-width: 480px) {
    main {
      padding-bottom: 0vh;
    }
  }

  .center-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
