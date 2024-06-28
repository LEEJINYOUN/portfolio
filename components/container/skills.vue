<script setup lang="ts">
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
</script>

<template>
  <LayoutPage class="two">
    <!-- <TextPageHeading>Skills</TextPageHeading>
    <div class="progressBoxs grid">
      <div v-for="(item, key) in skillList" :key="key" class="progressBox">
        <div class="progress_name">
          <span>{{ item.title }}</span>
          <span>{{ item.per }}%</span>
        </div>
        <div class="progress">
          <div class="progress_bar" :style="`width:${item.per}%`" />
        </div>
      </div>
    </div> -->
  </LayoutPage>
</template>
