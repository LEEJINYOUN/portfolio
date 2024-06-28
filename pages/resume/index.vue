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
</script>
<template>
  <section class="section">
    <div class="w-full relative z-10 h-full overflow-y-scroll">
      <div class="relative font-inter antialiased">
        <main
          class="relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden"
        >
          <div class="w-full max-w-6xl mx-auto px-4 md:px-6 py-14">
            <h1
              class="text-center text-[36px] font-semibold uppercase relative py-[20px]"
            >
              timeline
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
              class="text-center text-[36px] font-semibold uppercase relative py-[20px]"
            >
              skills
            </h1>

            <div class="w-2/3">
              <div class="relative right-0">
                <ul
                  class="relative flex flex-wrap p-1 list-none rounded-xl bg-blue-gray-50/60"
                  data-tabs="tabs"
                  role="list"
                >
                  <li class="z-30 flex-auto text-center" @click="changeTab(0)">
                    <a
                      class="z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit"
                      data-tab-target=""
                      active=""
                      role="tab"
                      aria-selected="true"
                      aria-controls="app"
                    >
                      <span class="ml-1">App</span>
                    </a>
                  </li>
                  <li class="z-30 flex-auto text-center" @click="changeTab(1)">
                    <a
                      class="z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit"
                      data-tab-target=""
                      role="tab"
                      aria-selected="false"
                      aria-controls="message"
                    >
                      <span class="ml-1">Messages</span>
                    </a>
                  </li>
                  <li class="z-30 flex-auto text-center" @click="changeTab(2)">
                    <a
                      class="z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit"
                      data-tab-target=""
                      role="tab"
                      aria-selected="false"
                      aria-controls="settings"
                    >
                      <span class="ml-1">Settings</span>
                    </a>
                  </li>
                </ul>
                <div data-tab-content="" class="p-5">
                  <div
                    v-if="tabs == 0"
                    class="block opacity-100"
                    id="app"
                    role="tabpanel"
                  >
                    <p
                      class="block font-sans text-base antialiased font-light leading-relaxed text-inherit text-blue-gray-500"
                    >
                      Because it's about motivating the doers. Because I'm here
                      to follow my dreams and inspire other people to follow
                      their dreams, too.
                    </p>
                  </div>
                  <div
                    v-if="tabs == 1"
                    class="block opacity-100"
                    id="message"
                    role="tabpanel"
                  >
                    <p
                      class="block font-sans text-base antialiased font-light leading-relaxed text-inherit text-blue-gray-500"
                    >
                      The reading of all good books is like a conversation with
                      the finest minds of past centuries.
                    </p>
                  </div>
                  <div
                    v-if="tabs == 2"
                    class="block opacity-100"
                    id="settings"
                    role="tabpanel"
                  >
                    <p
                      class="block font-sans text-base antialiased font-light leading-relaxed text-inherit text-blue-gray-500"
                    >
                      Comparing yourself to others is the thief of joy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </section>
  <!-- <LayoutSection class="resume">
    <TextSectionTitle>- Resume -</TextSectionTitle>
    <LayoutContainer class="resume_container grid">
      <div class="resume_tabs"></div>
      <div class="resume_content">
        <ContainerTimeLine />
        <ContainerSkills />
      </div>
    </LayoutContainer>
  </LayoutSection> -->
</template>
