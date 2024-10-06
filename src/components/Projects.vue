<template>
  <div class="grid grid-cols-2 sm:grid-cols-3 gap-5">
    <!-- TODO: For now show static cards -->
    <Card>
      <template #header>
        <img alt="user header" src="../assets/vue.svg" />
      </template>
      <template #title>Advanced Card</template>
      <template #subtitle>
        <Chip label="HTMl" />
      </template>
    </Card>
    <Card>
      <template #header>
        <img alt="user header" src="../assets/vue.svg" />
      </template>
      <template #title>Advanced Card</template>
      <template #subtitle>
        <Chip label="HTMl" />
      </template>
    </Card>
    <Card>
      <template #header>
        <img alt="user header" src="../assets/vue.svg" />
      </template>
      <template #title>Advanced Card</template>
      <template #subtitle>
        <Chip label="HTMl" />
      </template>
    </Card>
  </div>
</template>

<script>
import Card from "primevue/card";
export default {
  name: "ProjectList",
  data() {
    return {
      projectData: [],
    };
  },
  components: {
    Card,
  },
};
</script>

<style></style>
