<script setup>
import Annotation from "./Annotation.vue";
import { mdiCalendar, mdiMapMarker } from "@mdi/js";
import Pill from "./Pill.vue";
</script>

<script>
export default {
  data() {
    return {
      skills: [
        "Javascript",
        "Node.js",
        "SQL",
        "NoSql",
        "Angular",
        "AngularJs",
        "React",
        "ExpressJs",
        "NextJs",
        "NestJs",
        "HTML & CSS",
        "Data structures",
        "Algorithms",
        "REST API",
        "SOAP",
        "Microservices",
      ],
    };
  },
  components: {
    Annotation,
    mdiCalendar,
    mdiMapMarker,
    Pill,
  },
};
</script>
<template>
  <div class="flex flex-col">
    <div class="text-layer">
      <h3 class="!mb-2 pt-2 tracking-wide">Profile</h3>
    </div>
    <div class="prose prose-sm lg:prose-lg text-justify">
      I'm a software developer that specializes in creating Full-Stack web
      applications. My passion is learning new technologies and improving my
      skills in already acquired ones. I embrace the need of constant
      self-improving of one's knowledge and skills.
    </div>
    <!-- <div class="text-layer pt-4 pb-2">
      <h3 class="!mb-0 tracking-wide">Education</h3>
      <h4 class="text-primary">Bsc in Computer Science</h4>
    </div>
    <Annotation
      size="24"
      iconClass="text-primary"
      textClass="text-base cursor-pointer text-gray-700"
      :icon="mdiCalendar"
      text="09/2016 - 07/2020"
    ></Annotation>
    <div class="prose prose-sm lg:prose-lg text-justify font-semibold pb-4">
      University of Split - University Department of Professional Studies
    </div> -->
    <div class="text-layer pt-4 pb-2">
      <h4 class="text-primary">Master's degree in Computer Science</h4>
    </div>
    <Annotation
      size="24"
      iconClass="text-primary"
      textClass="text-base cursor-pointer text-gray-700"
      :icon="mdiCalendar"
      text="09/2020 - 07/2022"
    ></Annotation>
    <div class="prose prose-sm lg:prose-lg text-justify font-semibold pb-4">
      University of Split - University Department of Professional Studies
    </div>
    <div class="text-layer pb-4">
      <h3 class="!mb-0 tracking-wide">Technical skills</h3>
    </div>
    <div class="grid grid-cols-3 md:grid-cols-5 gap-3">
      <Pill v-for="item in skills" :key="item" :value="item"></Pill>
    </div>
  </div>
</template>

<style></style>
