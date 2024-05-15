<script setup lang="ts">
const props = defineProps<{
  width?: string;
  class?: string;
}>();
</script>

<template>
  <img
    src="https://swlsdud1005.sirv.com/portfolio/icon/github_icon.svg"
    alt=""
    :width="props.width"
    :class="props.class"
  />
</template>
