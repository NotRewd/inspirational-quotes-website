<script>
  import { page } from "$app/stores";
</script>

<h1>{$page.status}</h1>
<p class="heading-description">{$page.error.message}</p>
<a class="button" href="/">Back to Homepage</a>
