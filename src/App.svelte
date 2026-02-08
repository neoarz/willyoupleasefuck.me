<script>
  import Captcha from "./components/Captcha.svelte";
  import Success from "./components/Success.svelte";

  let verified = $state(false);
  let hash = $state(window.location.hash);

  $effect(() => {
    const handleHashChange = () => {
      hash = window.location.hash;
      if (hash === "#success" && !verified) {
        window.location.hash = "";
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  });

  function handleVerify() {
    verified = true;
    setTimeout(() => {
      window.location.hash = "#success";
    }, 1000);
  }
</script>

<main>
  {#if hash === "#success" && verified}
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
