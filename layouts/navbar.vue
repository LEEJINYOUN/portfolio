<script setup lang="ts">
const route = useRoute();

const menu = [
  {
    link: "/resume",
    title: "Resume",
  },
  {
    link: "/portfolio",
    title: "Portfolio",
  },
  {
    link: "/contact",
    title: "Contact",
  },
];

const isToggle = ref(false);

const iconToggle = () => {
  isToggle.value = isToggle.value == false;
};
const closeToggle = () => {
  isToggle.value = false;
};
</script>

<template>
  <div id="header" class="header">
    <div class="container">
      <NuxtLink to="/" class="logo"> jin young </NuxtLink>
      <ul class="menu" :class="isToggle == true ? 'active' : ''">
        <li class="menu_item" v-for="(item, key) in menu" :key="key">
          <NuxtLink
            :to="`${item.link}`"
            class="menu_link"
            :class="route.path == `${item.link}` ? 'active-link' : ''"
            @click="closeToggle"
          >
            {{ item.title }}
          </NuxtLink>
        </li>
        <UIcon
          name="i-heroicons-x-mark"
          class="close_icon"
          @click="closeToggle"
        />
      </ul>
      <UIcon
        name="i-heroicons-bars-3"
        class="toggle_icon"
        @click="iconToggle"
      />
    </div>
  </div>
  <slot />
</template>
