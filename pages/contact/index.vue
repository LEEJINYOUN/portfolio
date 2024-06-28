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
  <LazyLayoutSectionLayout>
    <LazyLayoutContainerLayout>
      <LazyTextSectionTitle>- contact-</LazyTextSectionTitle>
      <form class="flex flex-col gap-10 w-3/4 lg:w-4/5 xl:w-2/3 m-auto">
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
    </LazyLayoutContainerLayout>
    <LazyUiFooter
  /></LazyLayoutSectionLayout>
</template>
