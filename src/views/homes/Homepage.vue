<template>
  <div class="flex lg:flex-row flex-col gap-4 bg-surface-0 dark:bg-surface-900">
    <div class="flex-1 flex items-center justify-center">
      <div class="p-6 pt-12 lg:p-12">
        <h1
          class="text-4xl lg:text-6xl font-bold text-surface-900 dark:text-surface-0 mb-4 lg:leading-normal text-center lg:text-left"
        >
          HELLO, MY NAME IS<br /><span class="text-blue-500 dark:text-blue-400"
            >RATH SAMRITH</span
          >
        </h1>
        <p
          class="text-surface-700 dark:text-surface-200 leading-normal mb-8 text-center lg:text-left"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div class="flex items-center justify-center lg:justify-start gap-6">
          <Button label="Learn More" type="button" @click="goToAbout"></Button>
          <Button label="Live Demo" type="button" outlined></Button>
        </div>
      </div>
    </div>
    <div class="flex-1 overflow-hidden">
      <img
        src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/hero/hero-1.png"
        alt="hero-1"
        class="h-full w-full object-cover lg:[clip-path:polygon(12%_0,100%_0%,100%_100%,0_100%)]"
      />
    </div>
  </div>
  <div>
    <h1
      class="text-3xl lg:text-4xl font-bold text-surface-900 dark:text-surface-0 mb-4 lg:leading-normal text-center"
    >
      Technology
    </h1>
    <Technology />
  </div>
  <div>
    <h1
      class="text-3xl lg:text-4xl font-bold text-surface-900 dark:text-surface-0 mb-4 lg:leading-normal text-center"
    >
      MY JOURNEY
    </h1>
    <TimeLineComp />
  </div>
</template>

<script>
import TimeLineComp from "../../components/TimeLine.vue";
import Technology from "../../components/Technology.vue";
import Card from "primevue/card";
export default {
  name: "HomePage",
  data() {
    return {
      events: ["2020", "2021", "2022", "2023"],
    };
  },
  components: {
    TimeLineComp,
    Card,
    Technology,
  },
  methods: {
    async goToAbout() {
      await this.$router.push("/about");
    },
  },
};
</script>

<style>
@media screen and (max-width: 960px) {
  .customized-timeline .p-timeline-event-opposite {
    flex: 0 !important;
  }
  .customized-timeline .p-timeline-event:nth-child(even) {
    flex-direction: row !important;
  }
  .customized-timeline
    .p-timeline-event:nth-child(even)
    .p-timeline-event-content {
    text-align: left !important;
  }
}
</style>
