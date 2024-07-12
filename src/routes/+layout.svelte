<script>
  import "../app.css";
  import backgroundImage from "$lib/assets/background-image.png";
</script>

<img src={backgroundImage} id="background-image" alt="background" />

<div class="main">
  <slot />
</div>

<div class="footer">
  <p>API provided by the <a href="https://api.quotable.io/">Quotable API</a></p>
  <p>
    Source code of this website is available on <a
      href="https://github.com/NotRewd/inspirational-quotes-website">GitHub</a
    >
  </p>
</div>
