<script>
  export let data;

  const getData = async () => {
    const res = await fetch(
      `https://api.quotable.io/authors/slug/${data.author}`
    );
    return await res.json();
  };
</script>

<div class="main">
  {#await getData()}
    <p>Loading author...</p>
  {:then data}
    <h1>{data.name}</h1>
    <h2>{data.description}</h2>
    <p class="bio">{data.bio}</p>
    <a href="/" class="button">Back</a>
  {/await}
</div>

<style>
  .bio {
    margin: 10px 25px 25px 25px;
  }
</style>
