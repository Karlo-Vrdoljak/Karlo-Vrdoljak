<script setup>
import Background from "../components/Background.vue";
import Header from "../components/Header.vue";
import Experience from "../components/Experience.vue";
import Bio from "../components/Bio.vue";
import { mdiFilePdfBox } from "@mdi/js";
import SvgIcon from "@jamescoyle/vue-icon";
import html2pdf from "html2pdf.js";
</script>

<template>
  <div class="flex flex-col justify-between min-h-screen pb-16" ref="vapp">
    <main class="container max-w-[1440px] mx-auto sm:pt-8 p-4 lg:p-6">
      <Header class="pb-8"></Header>
      <div class="grid md:grid-cols-2 gap-4 md:gap-16 auto-rows-fr w-full">
        <Experience></Experience>
        <Bio></Bio>
      </div>
    </main>
    <!-- <Background></Background> -->

    <button
      data-html2canvas-ignore="true"
      @click="printPdf"
      class="p-0 w-12 h-12 fixed bottom-4 right-4 bg-primary-600 flex items-center justify-center rounded-full hover:bg-primary-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none"
    >
      <SvgIcon
        class="text-white"
        size="24"
        type="mdi"
        :path="mdiFilePdfBox"
      ></SvgIcon>
    </button>
  </div>
</template>

<script>
export default {
  components: {
    Background,
    Header,
    mdiFilePdfBox,
  },
  methods: {
    printPdf() {
      const element = this.$refs.vapp;
      return html2pdf()
        .from(element)
        .set({
          filename: "Karlo_Vrdoljak_CV.pdf",
          jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
        })
        .save();
    },
  },
};
</script>
