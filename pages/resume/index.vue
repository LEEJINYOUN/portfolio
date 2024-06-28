<script setup lang="ts">
definePageMeta({
  layout: "navbar",
});

const tabs = ref(0);
const changeTab = (id: number) => {
  if (id == 0) return (tabs.value = 0);
  else if (id == 1) return (tabs.value = 1);
  else if (id == 2) return (tabs.value = 2);
};

const fontSkillList = [
  {
    title: "html",
    url: "https://swlsdud1005.sirv.com/portfolio/svg/front/html.svg",
  },
  {
    title: "css",
    url: "https://swlsdud1005.sirv.com/portfolio/svg/front/css.svg",
  },
  {
    title: "javascript",
    url: "https://swlsdud1005.sirv.com/portfolio/svg/front/javascript.svg",
  },
  {
    title: "typescript",
    url: "https://swlsdud1005.sirv.com/portfolio/svg/front/typescript.svg",
  },
  {
    title: "react js",
    url: "https://swlsdud1005.sirv.com/portfolio/svg/front/react.svg",
  },
  {
    title: "next js",
    url: "https://swlsdud1005.sirv.com/portfolio/svg/front/next.svg",
  },
  {
    title: "vue js",
    url: "https://swlsdud1005.sirv.com/portfolio/svg/front/vue.svg",
  },
  {
    title: "nuxt js",
    url: "https://swlsdud1005.sirv.com/portfolio/svg/front/nuxt.svg",
  },
];

const backSkillList = [
  {
    title: "laravel",
    url: "https://swlsdud1005.sirv.com/portfolio/svg/back/laravel.svg",
  },
  {
    title: "mysql",
    url: "https://swlsdud1005.sirv.com/portfolio/svg/back/mysql.svg",
  },
  {
    title: "node js",
    url: "https://swlsdud1005.sirv.com/portfolio/svg/back/node.svg",
  },
];
const etcSkillList = [
  {
    title: "git",
    url: "https://swlsdud1005.sirv.com/portfolio/svg/etc/git.svg",
  },
  {
    title: "github",
    url: "https://swlsdud1005.sirv.com/portfolio/svg/etc/github.svg",
  },
];
</script>
<template>
  <section class="section">
    <div class="w-full relative z-10 h-full overflow-y-scroll">
      <div class="w-full max-w-6xl mx-auto px-4 md:px-6 py-14">
        <h1
          class="text-center text-[36px] font-semibold uppercase relative py-[20px] mb-5"
        >
          - timeline -
        </h1>

        <div class="w-full max-w-3xl mx-auto">
          <div
            class="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent"
          >
            <ContainerTimeLine />
          </div>
        </div>
      </div>
      <div class="w-full max-w-6xl mx-auto px-4 md:px-6 py-14">
        <h1
          class="text-center text-[36px] font-semibold uppercase relative py-[20px] mb-5"
        >
          skills -
        </h1>
        <div class="w-full max-w-3xl mx-auto">
          <div
            class="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent"
          >
            <div class="relative right-0">
              <ul
                class="relative flex flex-wrap p-1 list-none rounded-xl bg-gray-200/50"
                data-tabs="tabs"
                role="list"
              >
                <li
                  class="z-30 flex-auto text-center font-semibold uppercase rounded-xl"
                  :class="tabs == 0 ? 'bg-white' : ''"
                  @click="changeTab(0)"
                >
                  <a
                    class="z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit"
                  >
                    <span class="ml-1">front</span>
                  </a>
                </li>
                <li
                  class="z-30 flex-auto text-center font-semibold uppercase rounded-xl"
                  :class="tabs == 1 ? 'bg-white' : ''"
                  @click="changeTab(1)"
                >
                  <a
                    class="z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit"
                  >
                    <span class="ml-1">back</span>
                  </a>
                </li>
                <li
                  class="z-30 flex-auto text-center font-semibold uppercase rounded-xl"
                  :class="tabs == 2 ? 'bg-white' : ''"
                  @click="changeTab(2)"
                >
                  <a
                    class="z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit"
                  >
                    <span class="ml-1">etc</span>
                  </a>
                </li>
              </ul>
              <div class="p-5">
                <div
                  v-if="tabs == 0"
                  class="opacity-100 flex justify-center items-center text-center"
                >
                  <div
                    class="w-3/4 md:w-4/5 lg:w-full h-auto grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center text-center"
                  >
                    <div
                      v-for="(skill, key) in fontSkillList"
                      :key="key"
                      class="border border-gray-300 shadow-lg rounded-xl m-auto w-full px-4 py-4 flex flex-col gap-2 justify-center items-center"
                    >
                      <img
                        :src="`${skill.url}`"
                        :alt="skill.title"
                        class="w-10 h-10"
                      />
                      <span class="uppercase text-lg font-semibold">{{
                        skill.title
                      }}</span>
                    </div>
                  </div>
                </div>
                <div
                  v-if="tabs == 1"
                  class="opacity-100 flex justify-center items-center text-center"
                >
                  <div
                    class="w-3/4 md:w-4/5 lg:w-full h-auto grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center text-center"
                  >
                    <div
                      v-for="(skill, key) in backSkillList"
                      :key="key"
                      class="border border-gray-300 shadow-lg rounded-xl m-auto w-full px-4 py-4 flex flex-col gap-2 justify-center items-center"
                    >
                      <img
                        :src="`${skill.url}`"
                        :alt="skill.title"
                        class="w-10 h-10"
                      />
                      <span class="uppercase text-lg font-semibold">{{
                        skill.title
                      }}</span>
                    </div>
                  </div>
                </div>
                <div
                  v-if="tabs == 2"
                  class="opacity-100 flex justify-center items-center text-center"
                >
                  <div
                    class="w-3/4 md:w-4/5 lg:w-full h-auto grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center text-center"
                  >
                    <div
                      v-for="(skill, key) in etcSkillList"
                      :key="key"
                      class="border border-gray-300 shadow-lg rounded-xl m-auto w-full px-4 py-4 flex flex-col gap-2 justify-center items-center"
                    >
                      <img
                        :src="`${skill.url}`"
                        :alt="skill.title"
                        class="w-10 h-10"
                      />
                      <span class="uppercase text-lg font-semibold">{{
                        skill.title
                      }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-2/3"></div>
      </div>
    </div>
  </section>
</template>
