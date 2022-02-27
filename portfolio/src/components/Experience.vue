<script setup>
import { mdiCalendar, mdiMapMarker } from "@mdi/js";
import Annotation from "./Annotation.vue";
</script>
<script>
export default {
  components: { Annotation, mdiCalendar, mdiMapMarker },
};
</script>

<template>
  <div class="flex flex-col">
    <div class="text-layer">
      <h3 class="!mb-2 tracking-wide">Experience</h3>
      <h4 class="text-primary">Lama d.o.o.</h4>
    </div>
    <div class="flex items-center justify-between">
      <Annotation
        class="py-2"
        size="24"
        iconClass="text-primary"
        textClass="text-base cursor-pointer text-gray-700"
        :icon="mdiCalendar"
        text="08/2019 - Ongoing"
      ></Annotation>
      <Annotation
        class="py-2"
        size="24"
        iconClass="text-primary"
        textClass="text-base cursor-pointer text-gray-700"
        :icon="mdiMapMarker"
        text="Split, 21000 Croatia"
      ></Annotation>
    </div>
    <div class="prose prose-sm lg:prose-lg">
      <ul class="md:text-justify">
        <li>
          The company Lama d.o.o. has been among the TOP100 Croatian IT
          companies in terms of revenue for ten years, based in Dalmatia
        </li>
        <li>
          Working as a full-stack software developer in various work projects
          such as
          <div>
            CRS (Croatian Register of Shipping) EAS (Enterprise application
            software), Blockademia dApp (document publishing and verification
            via the Cardano blockchain), Alumni (social network for ex students)
          </div>
        </li>
        <li>Implementing DB business model, API layer integration and UI/UX</li>
        <li>
          Maintaining applications of different project structures and timelines
        </li>
        <li>
          Technologies include: Node.js, AngularJs, Angular, MSSQL, MongoDB,
          PostgreSQL, ExpressJs, Google Apis, MS Apis
        </li>
      </ul>
    </div>
  </div>
</template>

<style></style>
