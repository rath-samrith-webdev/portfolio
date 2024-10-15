<script setup>
import Menubar from "primevue/menubar";
import routes from "./routers/routers";
import SpeedDial from "primevue/speeddial";
</script>

<template>
  <Menubar :model="routes">
    <template #item="{ item, props }">
      <router-link v-slot="{ href, navigate }" :to="item.path" custom>
        <a v-ripple :href="href" v-bind="props.action" @click="navigate">
          <span :class="item.icon"></span>
          <span class="ml-2">{{ item.label }}</span>
        </a>
      </router-link>
    </template>
  </Menubar>
  <router-view />
</template>

<style>
* {
  scroll-behavior: smooth;
}
::-webkit-scrollbar {
  width: 10px;
}
</style>
