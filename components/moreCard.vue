<script setup lang="ts">
import { VueFinalModal } from "vue-final-modal";
import type { PortfolioModel } from "~/model/portfolio";

const props = defineProps<{
  portfolio: PortfolioModel;
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
    <div class="bg-white dark:bg-gray-900 rounded-2xl w-4/12 flex flex-col">
      <div>{{ portfolio.title }}</div>
    </div>
  </VueFinalModal>
</template>
