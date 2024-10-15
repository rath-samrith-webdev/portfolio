import { createApp } from "vue";
import "./style.css";
import "primeicons/primeicons.css";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
import router from "./routers";
import Button from "primevue/button";
import Message from "primevue/message";
import AnimateOnScroll from "primevue/animateonscroll";
import Tooltip from "primevue/tooltip";
import Chip from "primevue/chip";
import Tag from "primevue/tag";
import Card from "primevue/card";
import OverlayBadge from "primevue/overlaybadge";
import Badge from "primevue/badge";

const app = createApp(App);
app.use(router);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});
app.component("Button", Button);
app.component("Message", Message);
app.component("Chip", Chip);
app.component("Tag", Tag);
app.component("Card", Card);
app.component("OverlayBadge", OverlayBadge);
app.component("Badge", Badge);
app.directive("animateonscroll", AnimateOnScroll);
app.directive("tooltip", Tooltip);
app.mount("#app");
