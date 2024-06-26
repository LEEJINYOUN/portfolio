<script setup lang="ts">
const skillList = [
  {
    title: "HTML",
    per: 50,
  },
  {
    title: "CSS",
    per: 50,
  },
  {
    title: "JAVASCRIPT",
    per: 50,
  },
  {
    title: "TYPESCRIPT",
    per: 30,
  },
  {
    title: "REACT",
    per: 40,
  },
  {
    title: "NEXT JS",
    per: 15,
  },
  {
    title: "VUE",
    per: 40,
  },
  {
    title: "NUXT JS",
    per: 35,
  },
  {
    title: "GIT",
    per: 35,
  },
  {
    title: "GITHUB",
    per: 35,
  },
  {
    title: "LARAVEL",
    per: 10,
  },
  {
    title: "MYSQL",
    per: 10,
  },
  {
    title: "NODE JS",
    per: 10,
  },
];
</script>

<template>
  <LayoutPage class="two">
    <TextPageHeading>Skills</TextPageHeading>
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
    </div>
  </LayoutPage>
</template>
