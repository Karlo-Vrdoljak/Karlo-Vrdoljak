<script>
export default {
  props: {
    value: String,
  },
};
</script>

<template>
  <div
    class="p-1 bg-primary text-xs text-center rounded-xl shadow-md shadow-primary-500/50"
  >
    {{ value }}
  </div>
</template>

<style></style>
