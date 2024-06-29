<script setup lang="ts">
const tabs = ref(0);

const fontSkillList = [
  {
    title: "html",
    url: "https://swlsdud1005.sirv.com/portfolio/svg/front/html.svg",
  },
  {
    title: "css",
    url: "https://swlsdud1005.sirv.com/portfolio/svg/front/css.svg",
  },
  {
    title: "javascript",
    url: "https://swlsdud1005.sirv.com/portfolio/svg/front/javascript.svg",
  },
  {
    title: "typescript",
    url: "https://swlsdud1005.sirv.com/portfolio/svg/front/typescript.svg",
  },
  {
    title: "react js",
    url: "https://swlsdud1005.sirv.com/portfolio/svg/front/react.svg",
  },
  {
    title: "next js",
    url: "https://swlsdud1005.sirv.com/portfolio/svg/front/next.svg",
  },
  {
    title: "vue js",
    url: "https://swlsdud1005.sirv.com/portfolio/svg/front/vue.svg",
  },
  {
    title: "nuxt js",
    url: "https://swlsdud1005.sirv.com/portfolio/svg/front/nuxt.svg",
  },
];

const backSkillList = [
  {
    title: "laravel",
    url: "https://swlsdud1005.sirv.com/portfolio/svg/back/laravel.svg",
  },
  {
    title: "mysql",
    url: "https://swlsdud1005.sirv.com/portfolio/svg/back/mysql.svg",
  },
  {
    title: "node js",
    url: "https://swlsdud1005.sirv.com/portfolio/svg/back/node.svg",
  },
];
const etcSkillList = [
  {
    title: "git",
    url: "https://swlsdud1005.sirv.com/portfolio/svg/etc/git.svg",
  },
  {
    title: "github",
    url: "https://swlsdud1005.sirv.com/portfolio/svg/etc/github.svg",
  },
];

const tabList = [
  {
    title: "front",
  },
  {
    title: "back",
  },
  {
    title: "etc",
  },
];
const changeTab = (tabNum: number) => {
  if (tabNum == 0) return (tabs.value = 0);
  else if (tabNum == 1) return (tabs.value = 1);
  else if (tabNum == 2) return (tabs.value = 2);
};
</script>

<template>
  <div class="w-full max-w-3xl mx-auto">
    <div
      class="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent"
    >
      <div class="relative right-0">
        <ul
          class="relative flex flex-wrap p-1 list-none rounded-xl bg-gray-200/50"
          data-tabs="tabs"
          role="list"
        >
          <LazyTabsItem
            v-for="(tab, key) in tabList"
            :key="key"
            :title="tab.title"
            :class="tabs == key ? 'bg-white' : ''"
            @click="changeTab(key)"
          >
            <a
              class="z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit"
            >
              <span class="ml-1">{{ tab.title }}</span>
            </a>
          </LazyTabsItem>
        </ul>
        <div class="p-5">
          <LazyCardSkillsItem v-if="tabs == 0" :list="fontSkillList" />
          <LazyCardSkillsItem v-if="tabs == 1" :list="backSkillList" />
          <LazyCardSkillsItem v-if="tabs == 2" :list="etcSkillList" />
        </div>
      </div>
    </div>
  </div>
</template>
