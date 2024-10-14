<template>
  <div class="grid grid-cols-3 sm:grid-cols-12 gap-5">
    <Card
      class="flex items-center justify-center"
      v-for="(item, index) in technologies"
      :key="index"
      v-animateonscroll="{
        enterClass: 'animate-fadeinright',
        leaveClass: 'animate-fadeoutright',
      }"
      v-tooltip.top="item.toolTip"
    >
      <template #content>
        <Avatar :image="item.image" size="xlarge" />
      </template>
    </Card>
  </div>
</template>

<script>
import Card from "primevue/card";
import Avatar from "primevue/avatar";
export default {
  name: "Technology",
  data() {
    return {
      technologies: [
        {
          toolTip: "TypeScript",
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg",
        },
        {
          toolTip: "HTML",
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg",
        },
        {
          toolTip: "CSS",
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
        },
        {
          toolTip: "JS",
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
        },
        {
          toolTip: "Node JS",
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          toolTip: "SASS",
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
        },
        {
          toolTip: "PHP",
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
        },
        {
          toolTip: "Laravel",
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
        },
        {
          toolTip: "Python",
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain.svg",
        },
        {
          toolTip: "Git",
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        },
        {
          toolTip: "GitHub",
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
      ],
    };
  },
  components: {
    Card,
    Avatar,
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
