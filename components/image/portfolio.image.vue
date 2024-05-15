<script setup lang="ts">
const props = defineProps<{
  title: string;
  url: string;
}>();
</script>

<template>
  <img :src="`${props.url}`" alt="{{ props.title }}" class="img-fluid" />
</template>
