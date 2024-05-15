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
    <div class="portfolio_detail_bg">
      <div class="portfolio_detail_image">
        <ImagePortfolioImage :title="portfolio.title" :url="portfolio.url" />
      </div>
      <div class="portfolio_detail_text">
        <div class="detail_text_box">
          <div class="detail_text_name">
            <TextPortfolioTitle>제목</TextPortfolioTitle>
            <TextPortfolioTitle>기간</TextPortfolioTitle>
            <TextPortfolioTitle>카테고리</TextPortfolioTitle>
            <TextPortfolioTitle>인원</TextPortfolioTitle>
            <TextPortfolioTitle>툴</TextPortfolioTitle>
            <TextPortfolioTitle>스킬</TextPortfolioTitle>
            <TextPortfolioTitle>배포</TextPortfolioTitle>
            <TextPortfolioTitle>업무</TextPortfolioTitle>
            <TextPortfolioTitle>설명</TextPortfolioTitle>
          </div>
          <div class="detail_text_content">
            <TextPortfolioContent>{{ portfolio.title }}</TextPortfolioContent>
            <TextPortfolioContent>{{ portfolio.date }}</TextPortfolioContent>
            <TextPortfolioContent>{{
              portfolio.category
            }}</TextPortfolioContent>
            <TextPortfolioContent
              >{{ portfolio.member }}명</TextPortfolioContent
            >
            <TextPortfolioContent>{{
              portfolio.tool.toUpperCase()
            }}</TextPortfolioContent>
            <TextPortfolioContent>{{
              portfolio.skill.toUpperCase()
            }}</TextPortfolioContent>
            <TextPortfolioContent>{{
              portfolio.develop.toUpperCase()
            }}</TextPortfolioContent>
            <TextPortfolioContent>{{ portfolio.work }}</TextPortfolioContent>
            <TextPortfolioContent
              v-for="(item, key) in portfolio.des"
              :key="key"
            >
              {{ key + 1 }}. {{ item }}</TextPortfolioContent
            >
          </div>
        </div>
        <div class="detail_link_box">
          <a
            v-if="portfolio.github != '-'"
            :href="portfolio.github"
            target="_blank"
          >
            <IconGithub width="20px" class="link_icon" />
          </a>
          <a
            v-if="portfolio.page != '-'"
            :href="portfolio.page"
            target="_blank"
          >
            <IconLink
          /></a>
        </div>
        <div class="detail_close">
          <ButtonPortfolioButton @click="emit('cancel')"
            >닫기</ButtonPortfolioButton
          >
        </div>
      </div>
    </div>
  </VueFinalModal>
</template>
