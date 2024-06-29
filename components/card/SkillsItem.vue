<script setup lang="ts">
import type { SkillModel } from "~/model/resume";
defineProps<{
  list: SkillModel[];
}>();
</script>

<template>
  <div class="opacity-100 flex justify-center items-center text-center">
    <div
      class="w-3/4 md:w-4/5 lg:w-full h-auto grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center text-center"
    >
      <div
        v-for="(skill, key) in list"
        :key="key"
        class="border border-gray-300 shadow-lg rounded-xl m-auto w-full px-4 py-4 flex flex-col gap-2 justify-center items-center"
      >
        <img :src="`${skill.url}`" :alt="skill.title" class="w-10 h-10" />
        <span class="uppercase text-lg font-semibold">{{ skill.title }}</span>
      </div>
    </div>
  </div>
</template>
