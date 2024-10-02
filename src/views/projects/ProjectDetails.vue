<template>
  <div>{{ this.$router.id }}</div>
</template>

<script>
export default {
  name: "ProjectDetails",
  computed: {
    projectID() {
      return this.$route.params.id - 1;
    },
  },
};
</script>

<style></style>
