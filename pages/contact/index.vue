<script setup lang="ts">
import emailjs from "@emailjs/browser";
definePageMeta({
  layout: "navbar",
});

const name = ref("");
const email = ref("");
const phone = ref("");
const message = ref("");

const checkEmail = (value: string) => {
  let regEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
  if (regEmail.test(value) === true) return true;
  return alert("이메일 형식이 아닙니다. 다시 입력하세요.");
};

const sendEmail = () => {
  if (checkEmail(email.value)) {
    let params = {
      name: name.value,
      email: email.value,
      phone: phone.value,
      message: message.value,
    };

    if (
      name.value != "" &&
      email.value != "" &&
      phone.value != "" &&
      message.value != ""
    ) {
      emailjs
        .send("service_p2kirpz", "template_a8tb4ge", params)
        .then(function () {
          alert("성공적으로 메세지를 전송했습니다.");
          name.value = "";
          email.value = "";
          phone.value = "";
          message.value = "";
        });
    } else {
      alert("빈칸이 있습니다. 전부 다 입력하세요.");
    }
  }
};

onMounted(() => {
  emailjs.init({
    publicKey: "vfqvlxV8xTOV1wE3N",
  });
});
</script>
<template>
  <section class="section bg-white">
    <div class="w-full relative z-10 h-full overflow-y-scroll">
      <div class="w-5/6 m-auto flex flex-col">
        <div class="flex flex-col justify-center items-center h-2/3">
          <h1
            class="text-center text-[36px] font-semibold uppercase relative py-[20px] mb-5"
          >
            - Contact me -
          </h1>
          <form class="flex flex-col gap-10">
            <div class="grid gap-10 mb-6 md:grid-cols-3">
              <div>
                <label
                  for="first_name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >이름</label
                >
                <input
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  id="name"
                  required
                  placeholder="이름"
                  v-model="name"
                />
              </div>
              <div>
                <label
                  for="last_name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >이메일</label
                >
                <input
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="email"
                  id="email"
                  required
                  placeholder="이메일"
                  v-model="email"
                />
              </div>
              <div>
                <label
                  for="company"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >전화번호</label
                >
                <input
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  id="phone"
                  required
                  oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                  placeholder="전화번호"
                  v-model="phone"
                />
              </div>
            </div>
            <div class="mb-6">
              <label
                for="message"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >메세지</label
              >
              <textarea
                id="message"
                rows="4"
                cols="30"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none"
                required
                placeholder="전하고 싶은 메세지"
                v-model="message"
              ></textarea>
            </div>
            <button
              class="btn mb-[30px] mx-auto lg:mx-0 self-start"
              @click="sendEmail"
            >
              보내기
            </button>
          </form>
        </div>
        <section class="bg-white">
          <div
            class="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8"
          >
            <div class="flex justify-center mt-8 space-x-6">
              <a
                href="https://github.com/LEEJINYOUN"
                target="_blank"
                class="text-gray-400 hover:text-gray-500 hover:scale-125 duration-200"
              >
                <span class="sr-only">GitHub</span>
                <svg
                  class="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
            <p class="mt-8 text-base leading-6 text-center text-gray-400">
              © 2024. Lee Jin Young. All right reserved
            </p>
          </div>
        </section>
      </div>
      <!-- <div
        class="flex flex-col lg:flex-row h-full items-center justify-start pt-36 gap-x-8 text-center lg:text-left"
      >
        <div>bg</div>
        <div class="lg:flex-1 lg:pt-32 px-4">
          <h2
            class="text-center text-[36px] font-semibold uppercase relative py-[20px]"
          >
            - Contact me -
          </h2>
          <form class="flex flex-col gap-y-4">
            <div class="flex gap-x-10">
              <input
                class="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                type="text"
                id="name"
                required
                placeholder="이름"
                v-model="name"
              />
              <input
                class="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                type="email"
                id="email"
                required
                placeholder="이메일"
                v-model="email"
              />
              <input
                class="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                type="text"
                id="phone"
                required
                oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                placeholder="전화번호"
                v-model="phone"
              />
            </div>
            <textarea
              class="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879] resize-none"
              id="message"
              cols="30"
              rows="10"
              required
              placeholder="전하고 싶은 메세지"
              v-model="message"
            ></textarea>
            <button
              class="btn mb-[30px] mx-auto lg:mx-0 self-start"
              @click="sendEmail"
            >
              보내기
            </button>
          </form>
        </div>
        <LazyFooter class="lg:flex-1" />
      </div> -->
    </div>
  </section>
</template>
