<script>
  let quote = "";

  const generateQuote = async () => {
    const res = await fetch("https://api.quotable.io/random");
    const data = await res.json();
    quote = `"${data.content}" - ${data.author}`;
  };
</script>

<img
  src="./public/background-image.png"
  id="background-image"
  alt="background"
/>

<div class="main">
  <h1>Inspirational Quotes</h1>
  <p class="heading-description">
    An inspirational quote for you to make your day better.
  </p>

  {#if quote}
    <p class="quote">{quote}</p>
  {/if}

  <button class="button" on:click={generateQuote}>Get Quote</button>
</div>
