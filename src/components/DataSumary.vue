<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
    <Card
      v-animateonscroll="{
        enterClass: 'animate-fadeinright',
        leaveClass: 'animate-fadeoutright',
      }"
    >
      <template #content>
        <div class="flex items-center justify-around">
          <div
            v-animateonscroll="{
              enterClass: 'animate-fadeinright',
              leaveClass: 'animate-fadeoutright',
            }"
          >
            <h2 class="text-blue-500 font-bold dark:text-blue-400">
              {{ project.total }} +
            </h2>
          </div>
          <div
            v-animateonscroll="{
              enterClass: 'animate-fadeinright',
              leaveClass: 'animate-fadeoutright',
            }"
          >
            <h2 class="font-bold text-base dark:text-white-400">
              {{ project.details.toLocaleUpperCase() }}
            </h2>
          </div>
        </div>
      </template>
    </Card>
    <Card
      v-animateonscroll="{
        enterClass: 'animate-fadeinright',
        leaveClass: 'animate-fadeoutright',
      }"
    >
      <template #content>
        <div class="flex items-center justify-around">
          <div
            v-animateonscroll="{
              enterClass: 'animate-fadeinright',
              leaveClass: 'animate-fadeoutright',
            }"
          >
            <h2 class="text-blue-500 font-bold dark:text-blue-400">
              {{ experiences.total }} +
            </h2>
          </div>
          <div
            v-animateonscroll="{
              enterClass: 'animate-fadeinright',
              leaveClass: 'animate-fadeoutright',
            }"
          >
            <h2 class="font-bold text-base dark:text-white-400">
              {{ experiences.type.toLocaleUpperCase() }}
            </h2>
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<script>
export default {
  name: "DataSummary",
  data() {
    return {
      project: {
        total: 10,
        details: "Projects",
      },
      experiences: {
        total: 8,
        type: "months",
      },
    };
  },
};
</script>

<style scoped>
@keyframes animate-fadeinright {
  0% {
    opacity: 0;
    transform: translateX(20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes animate-fadeinleft {
  0% {
    opacity: 0;
    transform: translateX(-20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-fadeinright {
  animation: animate-fadeinright 0.6s forwards;
}

.animate-fadeinleft {
  animation: animate-fadeinleft 0.6s forwards;
}

.animate-fadeoutright {
  animation: animate-fadeinright 0.6s reverse forwards;
}

.animate-fadeoutleft {
  animation: animate-fadeinleft 0.6s reverse forwards;
}
</style>
