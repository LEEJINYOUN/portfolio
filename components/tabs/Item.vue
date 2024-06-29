<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<template>
  <div class="z-30 flex-auto text-center font-semibold uppercase rounded-xl">
    <a
      class="z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit"
    >
      <span class="ml-1">{{ title }}</span>
    </a>
  </div>
</template>
