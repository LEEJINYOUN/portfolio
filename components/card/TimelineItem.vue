<script setup lang="ts">
defineProps<{
  title: string;
  date: string;
  des: string;
}>();
</script>

<template>
  <div
    class="w-[calc(100%-4rem)] md:w-[50%] bg-white p-4 rounded border border-slate-200 shadow"
  >
    <div class="flex items-center justify-between space-x-2 mb-1">
      <div class="font-bold text-slate-900">{{ title }}</div>
      <time class="font-caveat font-medium text-indigo-500">{{ date }}</time>
    </div>
    <div class="text-slate-500">
      {{ des }}
    </div>
  </div>
</template>
