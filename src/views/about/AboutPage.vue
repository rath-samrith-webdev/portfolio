<template>
  <Fluid class="flex">
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
            <ProgressBar
              :value="value"
              class="w-full"
              style="height: 6px"
            ></ProgressBar>
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
          <div class="w-4/12 bg-slate-400">
            <h1 class="text-center font-mono font-semibold text-white">
              Educations
            </h1>
          </div>
          <div class="w-8/12 bg-slate-400">
            <h1 class="text-center font-mono font-semibold text-white">
              Experiences
            </h1>
          </div>
        </div>
        <Divider type="solid" />
        <div class="w-4/4 flex gap-2">
          <Card class="w-5/12 bg-slate-400">
            <template #content>
              <Card class="font-mono​ p-0">
                <template #title>
                  <div class="flex gap-2 items-center">
                    <h1 class="text-base">Passerelles Numeriques Cambodia</h1>
                    <Badge
                      :value="
                        getFormatedStringFromDays(
                          getDaysDifferents('2024', '2022')
                        )
                      "
                      size="small"
                    ></Badge>
                  </div>
                </template>
                <template #subtitle>
                  <div class="flex justify-between">
                    <Tag
                      value="Major"
                      v-tooltip.left="'Major'"
                      icon="pi pi-graduation-cap"
                      class="mr-2 text-sm"
                    />
                  </div>
                </template>
                <template #content>
                  <div class="flex gap-2">
                    <Badge
                      :value="2024"
                      severity="info"
                      v-tooltip.left="'Start Date'"
                      icon="pi pi-calendar"
                      size="small"
                    />
                    <Badge
                      :value="2024"
                      severity="info"
                      v-tooltip.right="'End Date'"
                      icon="pi pi-calendar"
                      size="small"
                    />
                  </div>
                </template>
              </Card>
            </template>
          </Card>
          <Card class="w-7/12">
            <template #content>
              <Timeline
                :value="events"
                align="left"
                class="customized-timeline font-sans text-sm"
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
                      <div class="flex gap-2 items-center">
                        <h1 class="text-base">{{ slotProps.item.status }}</h1>
                        <Badge
                          :value="
                            getFormatedStringFromDays(
                              getDaysDifferents(
                                slotProps.item.end,
                                slotProps.item.start
                              )
                            )
                          "
                          size="small"
                        ></Badge>
                      </div>
                    </template>
                    <template #subtitle>
                      <div class="flex gap-2">
                        <Badge
                          v-if="slotProps.item.start"
                          :value="slotProps.item.start"
                          severity="info"
                          v-tooltip.left="'Start Date'"
                          icon="pi pi-calendar"
                          size="small"
                        ></Badge>
                        <Badge
                          v-if="slotProps.item.end"
                          :value="slotProps.item.end"
                          :severity="
                            slotProps.item.end == 'Present' ? 'success' : 'info'
                          "
                          v-tooltip.right="'End Date'"
                          icon="pi pi-calendar"
                          size="small"
                        >
                        </Badge>
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
  </Fluid>
</template>

<script>
import Avatar from "primevue/avatar";
import Knob from "primevue/knob";
import Divider from "primevue/divider";
import Slider from "primevue/slider";
import Timeline from "primevue/timeline";
import ProgressBar from "primevue/progressbar";
export default {
  name: "AboutPage",
  components: {
    Avatar,
    Knob,
    Divider,
    Slider,
    Timeline,
    ProgressBar,
  },
  data() {
    return {
      value: 50,
      events: [
        {
          status: "Graduate High School",
          start: "01-08-2019",
          end: "10-11-2022",
          icon: "pi pi-graduation-cap",
          color: "#9C27B0",
          image: "",
          education: "General Ed",
          skills: [],
          details: "I graduated from Tepranam high in 2022",
        },
        {
          status: "Associate Degree",
          start: "01/01/2023",
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
          start: "01-08-2024",
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
    getFormatedStringFromDays(numberOfDays) {
      const years = Math.floor(numberOfDays / 365);
      const months = Math.floor((numberOfDays % 365) / 30);
      const days = Math.floor(numberOfDays % 30);

      const format = (value, singular, plural) =>
        value > 0 ? `${value} ${value === 1 ? singular : plural}` : "";

      return [
        format(years, "year", "years"),
        format(months, "month", "months"),
        format(days, "day", "days"),
      ]
        .filter(Boolean)
        .join(", ");
    },
    getDaysDifferents(end, start) {
      if (end === "Present")
        return (
          (new Date().getTime() - new Date(start).getTime()) /
          (1000 * 3600 * 24)
        );
      return (
        (new Date("10/11/2022").getTime() - new Date(start).getTime()) /
        (1000 * 3600 * 24)
      );
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
