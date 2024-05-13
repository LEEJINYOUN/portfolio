<script setup lang="ts">
import emailjs from "@emailjs/browser";
definePageMeta({
  layout: "navbar",
});

const name = ref("");
const email = ref("");
const phone = ref("");
const message = ref("");

const sendEmail = () => {
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
};

onMounted(() => {
  emailjs.init({
    publicKey: "vfqvlxV8xTOV1wE3N",
  });
});
</script>
<template>
  <section class="contact section">
    <h2 class="section_title">- Contact me -</h2>
    <div class="contact_container container">
      <div class="contact_content">
        <div class="inputs">
          <input
            type="text"
            id="name"
            required
            placeholder="이름"
            v-model="name"
          />
          <input
            type="email"
            id="email"
            required
            placeholder="이메일"
            v-model="email"
          />
        </div>
        <input
          type="text"
          id="phone"
          required
          placeholder="전화번호"
          v-model="phone"
        />
        <textarea
          id="message"
          cols="30"
          rows="10"
          required
          placeholder="전하고 싶은 메세지"
          v-model="message"
        ></textarea>
        <button class="btn" @click="sendEmail">보내기</button>
      </div>
    </div>
  </section>
  <LazyFooter />
</template>
