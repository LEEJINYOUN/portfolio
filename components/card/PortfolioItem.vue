<script setup lang="ts">
import { ModalPortfolioMore } from "#components";
import { useModal } from "vue-final-modal";
import type { PortfolioModel } from "~/model/portfolio";

const moreModal = (item: PortfolioModel) => {
  const { open, close } = useModal({
    component: ModalPortfolioMore,
    attrs: {
      portfolio: item,
      onCancel() {
        close();
      },
    },
  });
  open();
};

const portfolioList = [
  {
    title: "개인 포트폴리오",
    date: "2024.05.12 ~ 2024.05.15",
    category: "포트폴리오",
    member: 1,
    tool: "vscode",
    skill: "nuxt js, typescript",
    develop: "vercel",
    work: "기획, 디자인, 사용자 인터페이스 구성 및 개발",
    des: ["포트폴리오 용도로 제작한 사이트"],
    url: "https://swlsdud1005.sirv.com/portfolio/image/portfolio.png",
    github: "https://github.com/LEEJINYOUN/portfolio",
    page: "https://portfolio-h1ai5sg9h-leejinyouns-project.vercel.app/",
  },
  {
    title: "인스펙터",
    date: "2023.12 ~ 2024.04",
    category: "QA관리 툴",
    member: 5,
    tool: "webstorm",
    skill: "nuxt js, typescript, tailwind css, laravel, mysql",
    develop: "vercel",
    work: "API로 불러온 데이터를 활용하여 사용자 인터페이스 구성 및 개발",
    des: [
      "엑셀형태로 한눈에 테스트 실행 결과 확인",
      "다수의 테스터가 실행한 결과를 빠르게 파악",
      "QA 항목별로 진행상황을 자세히 파악",
      "슬랙, 지라, 깃허브에 연동하여 QA 항목이 실패로 될 때마다 이슈 받기",
      "아직 오픈한 지 얼마 되지 않아서 불안정함",
      "안정화될 때까지 1~2개월 소요 예상",
    ],
    url: "https://swlsdud1005.sirv.com/portfolio/image/inspecter.png",
    github: "-",
    page: "https://www.inspecter.io/",
  },
  {
    title: "초능력탐정 도은하",
    date: "2023.12 ~ ",
    category: "인터랙티브 게임",
    member: 3,
    tool: "webstorm",
    skill: "vue js, typescript, tailwind css",
    develop: "-",
    work: "사용자 인터페이스 구성 및 개발",
    des: [
      "플레이어의 선택에 따라 전개가 달라지는 추리 게임",
      "다국어 지원 예정",
      "협력회사의 내부 사정으로 인하여 무기한 진행중단",
    ],
    url: "https://swlsdud1005.sirv.com/portfolio/image/doeunha.png",
    github: "-",
    page: "-",
  },
  {
    title: "단어장 앱",
    date: "2023.07.18 ~ 2023.07.28",
    category: "단어 공부",
    member: 1,
    tool: "vscode",
    skill: "react, typescript, tailwind css, sanity.io",
    develop: "github",
    work: "기획, 디자인, 사용자 인터페이스 구성 및 개발",
    des: ["단어를 등록해서 나만의 단어장 만들기", "즐겨찾기 기능", "퀴즈 기능"],
    url: "https://swlsdud1005.sirv.com/portfolio/image/wordbook.gif",
    github: "https://github.com/LEEJINYOUN/WordBook_React-tsx-",
    page: "https://leejinyoun.github.io/WordBook_React-tsx-/",
  },
  {
    title: "날씨 사이트",
    date: "2023.02.20 ~ 2023.02.25",
    category: "날씨 검색",
    member: 1,
    tool: "vscode",
    skill: "javascript",
    develop: "github",
    work: "기획, 디자인, 사용자 인터페이스 구성 및 개발",
    des: ["검색한 지역의 현재 날씨 확인", "기온별로 옷 추천", "날씨 API 활용"],
    url: "https://swlsdud1005.sirv.com/portfolio/image/weather.gif",
    github: "https://github.com/LEEJINYOUN/WeatherApp-js-",
    page: "https://leejinyoun.github.io/WeatherApp-js-/",
  },
];
</script>

<template>
  <div
    v-for="(item, key) in portfolioList"
    :key="key"
    class="relative overflow-hidden z-10 h-[250px] rounded-lg"
  >
    <div class="portfolioWrap w-full h-full">
      <img
        :src="`${item.url}`"
        alt="{{ item.title }}"
        class="w-full h-full rounded-lg"
      />
      <div
        class="portfolioInfo absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col gap-y-4 bg-[#ffffff86] scale-[0.001] duration-500 text-[#333]"
      >
        <h4 class="text-[24px] text-[#333] font-semibold">
          {{ item.title }}
        </h4>
        <p class="font-normal">{{ item.category }}</p>
        <div v-if="item.page != '-'">
          <a :href="item.page" target="_blank">
            <IconLink />
          </a>
        </div>
        <LazyButtonBlackButton @click="moreModal(item)">
          자세히
        </LazyButtonBlackButton>
      </div>
    </div>
  </div>
</template>
