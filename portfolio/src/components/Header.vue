<script setup>
import contactInfo from "../consts/contactInfo";
import Annotation from "./Annotation.vue";
</script>
<template>
  <div class="flex flex-col md:flex-row md:items-start md:justify-between pb-4">
    <div class="flex flex-wrap w-full">
      <div class="text-layer pb-4">
        <h1 class="!mb-4 tracking-wider">Karlo Vrdoljak</h1>
        <h3 class="!mt-0 text-primary">Full-Stack Software Developer</h3>
      </div>
      <div
        class="flex flex-col md:flex-row md:items-center justify-between w-full"
      >
        <a
          v-for="item in contactInfo"
          :key="item.text"
          target="_blank"
          :href="item.href"
          class=""
        >
          <Annotation
            size="32"
            iconClass="text-primary"
            textClass="text-2xl cursor-pointer text-gray-700"
            :icon="item.icon"
            :text="item.text"
            :subtitle="item.subtitle"
          ></Annotation>
        </a>
      </div>
    </div>
    <!-- <div
      class="w-full md:w-1/4 flex items-center justify-center order-1 md:order-2 pb-6 md:pb-0"
    >
      <img
        src="https://place-hold.it/200x200"
        class="rounded-full shadow-md shadow-gray-400 w-56 h-56 md:w-64 md:h-64 object-cover object-top"
        alt=""
      />
    </div> -->
  </div>
</template>

<script>
export default {
  components: {
    contactInfo,
    Annotation,
  },
};
</script>

<style></style>
