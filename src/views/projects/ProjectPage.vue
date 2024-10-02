<template>
  <Fluid class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-4">
    <Card>
      <template #title>Simple Card</template>
      <template #content>
        <p class="m-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
          sed consequuntur error repudiandae numquam deserunt quisquam repellat
          libero asperiores earum nam nobis, culpa ratione quam perferendis
          esse, cupiditate neque quas!
        </p>
      </template>
    </Card>
  </Fluid>
</template>

<script>
import Card from "primevue/card";
import Fluid from "primevue/fluid";
import InputText from "primevue/inputtext";
export default {
  name: "ProjectPage",
  components: {
    Card,
    Fluid,
    InputText,
  },
};
</script>

<style></style>
