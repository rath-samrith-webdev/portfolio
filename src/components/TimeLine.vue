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
            {{ slotProps.item.date }}
          </template>
          <template #content>
            <img
              v-if="slotProps.item.image"
              :src="`https://primefaces.org/cdn/primevue/images/product/${slotProps.item.image}`"
              :alt="slotProps.item.name"
              width="200"
              class="shadow-sm"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore sed consequuntur error repudiandae numquam deserunt
              quisquam repellat libero asperiores earum nam nobis, culpa ratione
              quam perferendis esse, cupiditate neque quas!
            </p>
            <Button label="Read more" text></Button>
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
          status: "Ordered",
          date: "15/10/2020 10:30",
          icon: "pi pi-shopping-cart",
          color: "#9C27B0",
          image: "game-controller.jpg",
        },
        {
          status: "Processing",
          date: "15/10/2020 14:00",
          icon: "pi pi-cog",
          color: "#673AB7",
        },
        {
          status: "Shipped",
          date: "15/10/2020 16:15",
          icon: "pi pi-shopping-cart",
          color: "#FF9800",
        },
        {
          status: "Delivered",
          date: "16/10/2020 10:00",
          icon: "pi pi-check",
          color: "#607D8B",
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
