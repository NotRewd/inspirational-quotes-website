<script>
  import LoadingState from "$lib/components/LoadingState.svelte";
  import ErrorState from "$lib/components/ErrorState.svelte";

  let quote;

  const generateQuote = async () => {
    const res = await fetch("https://api.quotable.io/random");
    return await res.json();
  };

  const onGetQuoteClicked = () => (quote = generateQuote());
</script>

<h1>Inspirational Quotes</h1>
<p class="heading-description">
  An inspirational quote for you to make your day better.
</p>

{#if quote}
  {#await quote}
    <div class="state">
      <LoadingState>Loading...</LoadingState>
    </div>
  {:then quote}
    <p class="quote">
      {quote.content} -
      <a class="hyperlink" href={"/author/" + quote.authorSlug}
        >{quote.author}</a
      >
    </p>
  {:catch error}
    <div class="state">
      <ErrorState>API is unavailable at the moment</ErrorState>
    </div>
  {/await}
{/if}

<button class="button" on:click={onGetQuoteClicked}>Get Quote</button>

<style>
  .state {
    font-size: large;
    margin: 0px 20px 50px 20px;
  }
</style>
