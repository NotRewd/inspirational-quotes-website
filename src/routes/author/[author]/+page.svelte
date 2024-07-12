<script>
  import LoadingState from "$lib/components/LoadingState.svelte";
  import ErrorState from "$lib/components/ErrorState.svelte";

  export let data;

  const getData = async () => {
    const res = await fetch(
      `https://api.quotable.io/authors/slug/${data.author}`
    );
    return await res.json();
  };
</script>

{#await getData()}
  <div class="state">
    <LoadingState>Loading author...</LoadingState>
  </div>
{:then data}
  <h1>{data.name}</h1>
  <h2>{data.description}</h2>
  <p class="bio">{data.bio}</p>
{:catch error}
  <div class="state">
    <ErrorState>API is unavailable at the moment</ErrorState>
  </div>
{/await}
<a href="/" class="button">Back</a>

<style>
  .bio {
    margin: 10px 25px 25px 25px;
  }

  .state {
    margin-bottom: 50px;
  }
</style>
