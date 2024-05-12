<script setup lang="ts">
definePageMeta({
  layout: "navbar",
});
</script>

<template>
  <section class="relative" id="home">
    <div
      class="home_container bg-[url('./images/home-bg.jpg')] bg-no-repeat bg-cover bg-bottom relative z-10 h-screen"
    >
      <div
        class="home_content absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] m-auto px-10 py-5 max-w-[1000px] w-5/6 justify-start"
      >
        <h1 class="">안녕하세요, <span></span></h1>
        <h1>신입 프론트엔드 개발자 <span></span></h1>
        <h1>이진영입니다. <span></span></h1>
        <a href="#resume" class="btn"> 더 알아보기 <span></span></a>
      </div>
    </div>
  </section>
</template>
