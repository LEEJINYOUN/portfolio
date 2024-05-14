<script setup lang="ts">
import { VueFinalModal } from "vue-final-modal";
import type { PortfolioModel } from "~/model/portfolio";

const props = defineProps<{
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
    <div class="portfolio_detail_bg">
      <div class="portfolio_detail_image">
        <img
          :src="`${portfolio.url}`"
          alt="{{ portfolio.title }}"
          class="img-fluid"
        />
      </div>
      <div class="portfolio_detail_text">
        <div class="detail_text_box">
          <div class="detail_text_name">
            <div class="text_title">제목</div>
            <div class="text_title">기간</div>
            <div class="text_title">카테고리</div>
            <div class="text_title">인원</div>
            <div class="text_title">툴</div>
            <div class="text_title">스킬</div>
            <div class="text_title">배포</div>
            <div class="text_title">업무</div>
            <div class="text_title">설명</div>
          </div>
          <div class="detail_text_content">
            <p class="text_content">{{ portfolio.title }}</p>
            <p class="text_content">{{ portfolio.date }}</p>
            <p class="text_content">{{ portfolio.category }}</p>
            <p class="text_content">{{ portfolio.member }}명</p>
            <p class="text_content">{{ portfolio.tool.toUpperCase() }}</p>
            <p class="text_content">{{ portfolio.skill.toUpperCase() }}</p>
            <p class="text_content">{{ portfolio.develop.toUpperCase() }}</p>
            <p class="text_content">{{ portfolio.work }}</p>
            <p
              class="text_content"
              v-for="(item, key) in portfolio.des"
              :key="key"
            >
              {{ key + 1 }}.
              {{ item }}
            </p>
          </div>
        </div>
        <div class="detail_link_box">
          <a
            v-if="portfolio.github != '-'"
            :href="portfolio.github"
            target="_blank"
          >
            <img
              src="https://swlsdud1005.sirv.com/portfolio/icon/github_icon.svg"
              alt=""
              width="20px"
              class="link_icon"
          /></a>
          <a
            v-if="portfolio.page != '-'"
            :href="portfolio.page"
            target="_blank"
          >
            <UIcon name="i-heroicons-link" class="link_icon"
          /></a>
        </div>
        <div class="detail_close">
          <UButton color="black" variant="solid" @click="emit('cancel')"
            >닫기</UButton
          >
        </div>
      </div>
    </div>
  </VueFinalModal>
</template>
