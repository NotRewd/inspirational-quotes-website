<script>
  let quote = "Loading a quote...";

  const generateQuote = async () => {
    const res = await fetch("https://favqs.com/api/qotd");
    const data = await res.json();
    quote = `"${data.quote.body.text}" - ${data.quote.author}`;
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
    Get your inspirational quote to make your day better.
  </p>

  <p class="quote">{quote}</p>

  <button class="button" on:click={generateQuote}>Get Quote</button>
</div>
