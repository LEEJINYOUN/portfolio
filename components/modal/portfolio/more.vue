<script setup lang="ts">
import { VueFinalModal } from "vue-final-modal";
import type { PortfolioModel } from "~/model/portfolio";

defineProps<{
  portfolio: PortfolioModel;
}>();

const emit = defineEmits<{
  (e: "cancel"): void;
}>();
</script>

<template>
  <VueFinalModal
    class="confirm-modal"
    content-class="confirm-modal-content flex w-full h-full flex-col justify-center items-center"
    overlay-transition="vfm-fade"
    content-transition="vfm-slide-down"
    :esc-to-close="true"
  >
    <div
      class="bg-white rounded-lg w-[60%] h-[80%] sm:h-[70%] md:h-1/2 flex flex-col md:flex-row"
    >
      <div
        class="flex justify-center items-center w-full h-[40%] md:w-[40%] md:h-full"
      >
        <img
          :src="`${portfolio.url}`"
          alt="{{ portfolio.title }}"
          class="w-[70%] h-[90%] md:w-[90%] md:h-[70%]"
        />
      </div>
      <div
        class="flex flex-col pt-[5px] pl-[5px] w-full h-[60%] md:w-[60%] md:h-full"
      >
        <div
          class="flex flex-row mt-[0%] md:mt-[10%] w-full h-[75%] md:h-[70%] overflow-y-auto"
        >
          <div
            class="flex flex-col items-center w-[25%] h-full text-[13px] sm:text-[14px] lg:text-[13px] xl:text-[15px]"
          >
            <div class="py-[5px] font-bold">제목</div>
            <div class="py-[5px] font-bold">기간</div>
            <div class="py-[5px] font-bold">카테고리</div>
            <div class="py-[5px] font-bold">인원</div>
            <div class="py-[5px] font-bold">툴</div>
            <div class="py-[5px] font-bold">스킬</div>
            <div class="py-[5px] font-bold">배포</div>
            <div class="py-[5px] font-bold">업무</div>
            <div class="py-[5px] font-bold">설명</div>
          </div>
          <div
            class="flex flex-col w-[75%] h-full text-[13px] sm:text-[14px] lg:text-[13px] xl:text-[15px]"
          >
            <div class="py-[5px]">
              {{ portfolio.title }}
            </div>
            <div class="py-[5px]">
              {{ portfolio.date }}
            </div>
            <div class="py-[5px]">
              {{ portfolio.category }}
            </div>
            <div class="py-[5px]">{{ portfolio.member }}명</div>
            <div class="py-[5px]">{{ portfolio.tool.toUpperCase() }}</div>
            <div class="py-[5px]">{{ portfolio.skill.toUpperCase() }}</div>
            <div class="py-[5px]">{{ portfolio.develop.toUpperCase() }}</div>
            <div class="py-[5px]">{{ portfolio.work }}</div>
            <div
              v-for="(item, key) in portfolio.des"
              :key="key"
              class="py-[5px]"
            >
              {{ key + 1 }}. {{ item }}
            </div>
          </div>
        </div>
        <div
          class="flex justify-center items-center w-full h-[10%] text-[20px]"
        >
          <a
            v-if="portfolio.github != '-'"
            :href="portfolio.github"
            target="_blank"
            class="mx-[20px] flex justify-center items-center hover:scale-150 duration-500"
          >
            <IconGithub class="w-[25px]" />
          </a>
          <a
            v-if="portfolio.page != '-'"
            :href="portfolio.page"
            target="_blank"
            class="mx-[20px] w-[25px] flex justify-center items-center hover:scale-150 duration-500"
          >
            <IconLink
          /></a>
        </div>
        <div class="flex justify-center items-center w-full h-[10%]">
          <ButtonPortfolioButton @click="emit('cancel')"
            >닫기</ButtonPortfolioButton
          >
        </div>
      </div>
    </div>
  </VueFinalModal>
</template>
