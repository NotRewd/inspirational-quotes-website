<script>
  import Icon from "@iconify/svelte";
</script>

<div class="loading">
  <div class="loading-icon">
    <Icon icon="line-md:loading-loop" />
  </div>
  <slot />
</div>

<style>
  .loading {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: lightcoral;
    font-weight: bold;
  }

  .loading-icon {
    margin-top: 4px;
  }
</style>
