<script setup>
import SvgIcon from "@jamescoyle/vue-icon";
</script>
<template>
  <div>
    <div class="flex flex-row items-center">
      <div :class="iconClass + ' pr-4'">
        <SvgIcon :size="size" type="mdi" :path="icon"></SvgIcon>
      </div>
      <div :class="textClass">
        <div class="text-layer">
          {{ text }}
        </div>
      </div>
    </div>
    <div class="text-sm">
      {{ subtitle }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    size: String,
    icon: String,
    iconClass: String,
    textClass: String,
    text: String,
    subtitle: String,
  },

  components: { SvgIcon },
};
</script>

<style></style>
