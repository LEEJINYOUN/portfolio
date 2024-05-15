<script setup lang="ts">
definePageMeta({
  layout: "navbar",
});
</script>

<template>
  <section class="home">
    <div class="home_container">
      <div class="home_content">
        <h1>안녕하세요, <span></span></h1>
        <h1>신입 프론트엔드 개발자 <span></span></h1>
        <h1>이진영입니다. <span></span></h1>
        <NuxtLink to="/resume" class="btn"> 더 알아보기 <span></span></NuxtLink>
      </div>
    </div>
  </section>
</template>
