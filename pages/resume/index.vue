<script setup lang="ts">
definePageMeta({
  layout: "navbar",
});
</script>
<template>
  <LazyLayoutSectionLayout>
    <LazyLayoutContainerLayout>
      <LazyTextSectionTitle>- timeline -</LazyTextSectionTitle>
      <LazyContainerTimeline />
    </LazyLayoutContainerLayout>
    <LazyLayoutContainerLayout>
      <LazyTextSectionTitle>- skills -</LazyTextSectionTitle>
      <LazyContainerSkills />
    </LazyLayoutContainerLayout>
  </LazyLayoutSectionLayout>
</template>
