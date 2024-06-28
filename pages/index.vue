<script setup lang="ts">
definePageMeta({
  layout: "navbar",
});
</script>

<template>
  <section class="section">
    <div
      class="bg-home bg-no-repeat bg-cover bg-bottom w-full relative z-10 h-full"
    >
      <div class="container mx-auto h-full flex justify-center items-center">
        <div
          class="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 m-auto px-[50px] py-[20px] max-w-[1000px] w-[90%] sm:justify-items-start sm:order-2 text-center sm:text-start"
        >
          <h1 class="homeText text-[32px] md:text-[40px]">
            안녕하세요, <span></span>
          </h1>
          <h1 class="homeText text-[32px] md:text-[40px]">
            신입 개발자 <span></span>
          </h1>
          <h1 class="homeText text-[32px] md:text-[40px]">
            이진영입니다. <span></span>
          </h1>
          <NuxtLink
            to="/resume"
            class="btn mt-[30px] inline-block items-center w-auto text-[20px]"
          >
            더 알아보기 <span></span
          ></NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
