<script setup lang="ts">
definePageMeta({
  layout: "navbar",
});
</script>
<template>
  <LayoutSection class="resume">
    <TextSectionTitle>- Resume -</TextSectionTitle>
    <LayoutContainer class="resume_container grid">
      <div class="resume_tabs"></div>
      <div class="resume_content">
        <ContainerTimeLine />
        <ContainerSkills />
      </div>
    </LayoutContainer>
  </LayoutSection>
</template>
