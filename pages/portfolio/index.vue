<script setup lang="ts">
definePageMeta({
  layout: "navbar",
});
</script>
<template>
  <LazyLayoutSectionLayout>
    <LazyLayoutContainerLayout>
      <LazyTextSectionTitle>- portfolio -</LazyTextSectionTitle>
      <div
        class="w-5/6 sm:w-4/6 md:w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
      >
        <LazyCardPortfolioItem />
      </div>
    </LazyLayoutContainerLayout>
  </LazyLayoutSectionLayout>
</template>
