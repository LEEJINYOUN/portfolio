<script setup lang="ts">
definePageMeta({
  layout: "navbar",
});

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

const skillList = [
  {
    title: "HTML",
    per: 50,
  },
  {
    title: "CSS",
    per: 50,
  },
  {
    title: "JAVASCRIPT",
    per: 50,
  },
  {
    title: "TYPESCRIPT",
    per: 30,
  },
  {
    title: "REACT",
    per: 40,
  },
  {
    title: "NEXT JS",
    per: 15,
  },
  {
    title: "VUE",
    per: 40,
  },
  {
    title: "NUXT JS",
    per: 35,
  },
  {
    title: "GIT",
    per: 35,
  },
  {
    title: "GITHUB",
    per: 35,
  },
];
</script>
<template>
  <section class="resume section">
    <h2 class="section_title">- resume -</h2>
    <div class="resume_container container grid">
      <div class="resume_tabs"></div>
      <div class="resume_content">
        <div class="page one">
          <div class="page_heading">TimeLine</div>
          <div
            v-for="(item, key) in timeLineList"
            :key="key"
            class="resume_wrap"
          >
            <div class="resume_wrap-content">
              <span class="date">{{ item.date }}</span>
              <h4>{{ item.title }}</h4>
              <p>{{ item.des }}</p>
            </div>
          </div>
        </div>
        <div class="page two">
          <div class="page_heading">Skills</div>
          <div class="progressBoxs grid">
            <div
              v-for="(item, key) in skillList"
              :key="key"
              class="progressBox"
            >
              <div class="progress_name">
                <span>{{ item.title }}</span>
                <span>{{ item.per }}%</span>
              </div>
              <div class="progress">
                <div class="progress_bar" :style="`width:${item.per}%`" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
