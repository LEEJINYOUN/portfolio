<script setup lang="ts">
const route = useRoute();

const menuList = [
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
  <div class="header">
    <LayoutContainer>
      <NuxtLink to="/" class="logo"> jin young </NuxtLink>
      <ul class="menu" :class="isToggle == true ? 'active' : ''">
        <li class="menu_item" v-for="(menu, key) in menuList" :key="key">
          <NuxtLink
            :to="`${menu.link}`"
            class="menu_link"
            :class="route.path == `${menu.link}` ? 'active-link' : ''"
            @click="closeToggle"
          >
            {{ menu.title }}
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
    </LayoutContainer>
  </div>
  <slot />
</template>
