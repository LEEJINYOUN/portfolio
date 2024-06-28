<script setup lang="ts">
const timeLineList = [
  {
    date: "2013.03",
    title: "영진전문대 입학",
    des: "전자 정보통신학과",
  },
  {
    date: "2013.10 ~ 2015.07",
    title: "군 입대",
    des: "육군병장 만기전역",
  },
  {
    date: "2018.02",
    title: "영진전문대 졸업",
    des: "",
  },
  {
    date: "2018.03 ~ 2020.09",
    title: "리쿠르트 R&D 스태핑",
    des: "일본 IT 기업 리쿠르트 R&D 스태핑 정사원 (기술직 파견사원)",
  },
  {
    date: "2022.04 ~ ",
    title: "웹 개발 공부",
    des: "",
  },
  {
    date: "2024.01 ~ 2024.05",
    title: "민트소프트",
    des: "프론트엔드 개발자 정사원",
  },
];
</script>

<template>
  <div class="w-full max-w-3xl mx-auto">
    <div
      class="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent"
    >
      <div class="flex flex-col gap-12">
        <div
          v-for="(item, key) in timeLineList"
          :key="key"
          class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
        >
          <div
            class="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"
          >
            <LazyIconGreenCheck />
          </div>
          <LazyCardTimelineItem
            :title="item.title"
            :date="item.date"
            :des="item.des"
          />
        </div>
      </div>
    </div>
  </div>
</template>
