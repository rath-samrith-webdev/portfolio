<template>
  <div class="w-100 flex flex-row gap-1 p-2">
    <Card
      class="w-1/4 h-100 flex bg-slate-700 p-2"
      style="height: 90dvh; overflow-y: scroll"
    >
      <template #header>
        <Card>
          <template #content>
            <div class="flex justify-center items-center p-2">
              <Avatar label="P" size="xlarge" />
            </div>
            <div class="flex flex-col justify-center items-center">
              <h2>RATH SAMRITH</h2>
              <p>Web Developer Intern</p>
            </div>
          </template>
        </Card>
      </template>
      <template #content>
        <div class="flex flex-col justify-even">
          <div class="flex justify-between items-center">
            <h2>Resident:</h2>
            <h2>Cambodia</h2>
          </div>
          <div class="flex justify-between items-center">
            <h2>Resident:</h2>
            <h2>64</h2>
          </div>
          <div class="flex justify-between items-center">
            <h2>Age:</h2>
            <h2>12</h2>
          </div>
        </div>
        <Divider type="solid" />
        <div class="flex flex-row justify-center items-center">
          <div class="flex flex-col justify-center items-center">
            <h2>English</h2>
            <Knob
              v-model="value"
              :strokeWidth="5"
              valueTemplate="{value}%"
              readonly
              :size="70"
            />
          </div>
        </div>
        <Divider type="solid" />
        <div class="flex flex-col justify-center items-center">
          <div class="flex w-full flex-col items-center gap-3">
            <div class="flex w-full justify-between items-center">
              <h2>Tech-Skills</h2>
              <h2>{{ value }}%</h2>
            </div>
            <Slider v-model="value" class="w-full" disabled />
          </div>
        </div>
      </template>
    </Card>
    <Card
      class="w-3/4 bg-slate-400 p-2 overflow-y-scroll"
      style="height: 90dvh; overflow-y: scroll"
    >
      <template #header>
        <Card class="p-2">
          <template #content>
            <img src="../../assets/background.png" alt="back-ground-img" />
          </template>
        </Card>
      </template>
      <template #content>
        <div class="w-4/4 flex gap-2">
          <div class="w-1/4 bg-slate-400">
            <h1 class="text-center font-mono font-semibold text-white">
              Educations
            </h1>
          </div>
          <div class="w-3/4 bg-slate-400">
            <h1 class="text-center font-mono font-semibold text-white">
              Experiences
            </h1>
          </div>
        </div>
        <Divider type="solid" />
        <div class="w-4/4 flex gap-2">
          <Card class="w-1/4 bg-slate-400">
            <template #content> Education </template>
          </Card>
          <Card class="w-3/4">
            <template #content>
              <Timeline
                :value="events"
                align="left"
                class="customized-timeline"
              >
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
                  <Card
                    v-animateonscroll="findIndex(slotProps.item)"
                    class="mt-4"
                  >
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
                      <div
                        v-if="slotProps.item.skills.length"
                        class="grid grid-cols-3"
                      >
                        <Chip />
                      </div>
                      <p>
                        {{ slotProps.item.details }}
                      </p>
                    </template>
                  </Card>
                </template>
              </Timeline>
            </template>
          </Card>
        </div>
      </template>
    </Card>
  </div>
</template>

<script>
import Avatar from "primevue/avatar";
import Knob from "primevue/knob";
import Divider from "primevue/divider";
import Slider from "primevue/slider";
import Timeline from "primevue/timeline";
export default {
  name: "AboutPage",
  components: {
    Avatar,
    Knob,
    Divider,
    Slider,
    Timeline,
  },
  data() {
    return {
      value: 50,
      events: [
        {
          status: "Graduate High School",
          start: "2019",
          end: "2022",
          icon: "pi pi-graduation-cap",
          color: "#9C27B0",
          image: "",
          education: "General Ed",
          skills: [],
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
::v-deep(.customized-timeline) .p-timeline-event-opposite {
  flex: 0 !important;
}
</style>
