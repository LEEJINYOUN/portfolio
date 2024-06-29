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

const openToggle = () => {
  isToggle.value = true;
};

const closeToggle = () => {
  isToggle.value = false;
};
</script>

<template>
  <header
    class="fixed w-full px-[30px] lg:px-[100px] z-30 h-[80px] lg:h-[120px] flex items-center"
  >
    <div
      class="flex flex-col lg:flex-row lg:items-center w-full justify-between"
    >
      <NuxtLink
        to="/"
        class="max-w-[200px] uppercase tracking-widest font-black text-3xl"
      >
        jin young
      </NuxtLink>
      <nav
        class="hidden xl:flex gap-x-12 font-semibold text-xl whitespace-nowrap"
      >
        <NuxtLink
          v-for="(menu, key) in menuList"
          :key="key"
          :to="`${menu.link}`"
          class="text-[#8e9699] hover:text-sky-500 transition duration-200"
          :class="route.path == `${menu.link}` ? 'text-sky-500' : ''"
          @click="closeToggle"
        >
          {{ menu.title }}
        </NuxtLink>
      </nav>
    </div>
    <nav class="xl:hidden whitespace-nowrap">
      <div class="text-3xl cursor-pointer hover:text-red-500 duration-150">
        <UIcon name="i-heroicons-bars-3" @click="openToggle" />
      </div>
      <div
        class="bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20"
        :class="!isToggle ? 'hidden' : ''"
      >
        <div
          class="text-4xl absolute z-30 left-4 top-14 cursor-pointer hover:text-red-500 duration-150"
        >
          <UIcon name="i-heroicons-x-mark" @click="closeToggle" />
        </div>
        <ul
          class="h-full flex flex-col justify-center items-center gap-y-8 text-primary font-primary font-bold text-3xl"
        >
          <li v-for="(menu, key) in menuList" :key="key">
            <NuxtLink
              :to="`${menu.link}`"
              class="text-[#8e9699] hover:text-sky-500 transition duration-200"
              :class="route.path == `${menu.link}` ? 'text-sky-500' : ''"
              @click="closeToggle"
            >
              {{ menu.title }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  <slot />
</template>
