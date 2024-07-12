<script>
  import Icon from "@iconify/svelte";
</script>

<div class="error">
  <div class="error-icon">
    <Icon icon="mdi:alert-circle" />
  </div>
  <slot />
</div>

<style>
  .error {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: lightcoral;
    font-weight: bold;
  }

  .error-icon {
    margin-top: 5px;
  }
</style>
