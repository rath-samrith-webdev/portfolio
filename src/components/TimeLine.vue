<template>
  <div class="card">
    <Timeline :value="events" align="alternate" class="customized-timeline">
      <template #marker="slotProps">
        <span
          v-animateonscroll="findIndex(slotProps.item)"
          class="flex w-8 h-8 items-center justify-center text-white rounded-full z-10 shadow-sm"
          :style="{ backgroundColor: slotProps.item.color }"
        >
          <i
            v-animateonscroll="findIndex(slotProps.item)"
            :class="slotProps.item.icon"
          ></i>
        </span>
      </template>
      <template #content="slotProps">
        <Card v-animateonscroll="findIndex(slotProps.item)" class="mt-4">
          <template #title>
            {{ slotProps.item.status }}
          </template>
          <template #subtitle>
            <div class="gap-2">
              <Tag
                v-if="slotProps.item.start"
                :value="slotProps.item.start"
                severity="info"
                v-tooltip.left="'Start Date'"
                icon="pi pi-calendar"
                size="small"
                class="mr-2"
              />
              <Tag
                v-if="slotProps.item.end"
                :value="slotProps.item.end"
                severity="info"
                v-tooltip.right="'End Date'"
                icon="pi pi-calendar"
                size="small"
                class="mr-2"
              />
            </div>
          </template>
          <template #content>
            <img
              v-if="slotProps.item.image"
              :src="slotProps.item.image"
              :alt="slotProps.item.name"
              width="200"
              class="shadow-sm"
            />
            <div v-if="slotProps.item.skills.length" class="grid grid-cols-3">
              <Chip />
            </div>
            <p>
              {{ slotProps.item.details }}
            </p>
          </template>
        </Card>
      </template>
    </Timeline>
  </div>
</template>

<script>
import Timeline from "primevue/timeline";
import Card from "primevue/card";
export default {
  name: "TimeLineComp",
  data() {
    return {
      events: [
        {
          status: "Graduate High School",
          start: "2019",
          end: "2022",
          icon: "pi pi-graduation-cap",
          color: "#9C27B0",
          image: "",
          education: "General Ed",
          skills: [
            {
              title: "",
              icon: "",
            },
          ],
          details: "I graduated from Tepranam high in 2022",
        },
        {
          status: "Associate Degree",
          start: "2022",
          end: "Present",
          icon: "pi pi-spin pi-cog",
          color: "#673AB7",
          education: "General Ed",
          skills: [],
          details:
            "I am currently majoring computer science under Passerelles Numeriques Cambodia Scholarship.",
        },
        {
          status: "Web development Intern",
          start: "01/Aug/2024",
          end: "Present",
          icon: "pi pi-briefcase",
          color: "#FF9800",
          education: "General Ed",
          skills: [],
          details:
            "I am currently working as Intern in Sourceamax Asia as this also included as part of asociation degree.",
        },
      ],
    };
  },
  components: {
    Timeline,
    Card,
  },
  methods: {
    findIndex(item) {
      if ((this.events.indexOf(item) + 1) % 2 === 0) {
        return {
          enterClass: "animate-fadeinright",
          leaveClass: "animate-fadeoutright",
        };
      } else {
        return {
          enterClass: "animate-fadeinleft",
          leaveClass: "animate-fadeoutleft",
        };
      }
    },
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
