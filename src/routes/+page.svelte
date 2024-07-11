<script>
  let quote;

  const generateQuote = async () => {
    const res = await fetch("https://api.quotable.io/random");
    return await res.json();
  };

  const onGetQuoteClicked = () => (quote = generateQuote());
</script>

<div class="main">
  <h1>Inspirational Quotes</h1>
  <p class="heading-description">
    An inspirational quote for you to make your day better.
  </p>

  {#if quote}
    {#await quote}
      <p class="quote">Loading quote...</p>
    {:then quote}
      <p class="quote">
        {quote.content} -
        <a class="hyperlink" href={"/author/" + quote.authorSlug}
          >{quote.author}</a
        >
      </p>
    {/await}
  {/if}

  <button class="button" on:click={onGetQuoteClicked}>Get Quote</button>
</div>
