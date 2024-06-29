<script setup lang="ts">
import emailjs from "@emailjs/browser";
definePageMeta({
  layout: "navbar",
});

const emailSendService = useRuntimeConfig().public.emailSendService as string;
const emailSendTemplate = useRuntimeConfig().public.emailSendTemplate as string;
const emailSendPublicKey = useRuntimeConfig().public
  .emailSendPublicKey as string;

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
        .send(emailSendService, emailSendTemplate, params)
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
    publicKey: emailSendPublicKey,
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
            <LazyTextInputLabel for="name" title="이름" />
            <LazyFormInputItem
              type="text"
              id="name"
              :value="name"
              @update:inputValue="($event) => (name = $event.target.value)"
            />
          </div>
          <div>
            <LazyTextInputLabel for="email" title="이메일" />
            <LazyFormInputItem
              type="email"
              id="email"
              :value="email"
              @update:inputValue="($event) => (email = $event.target.value)"
            />
          </div>
          <div>
            <LazyTextInputLabel for="phone" title="전화번호" />
            <LazyFormInputItem
              type="text"
              id="phone"
              :value="phone"
              oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
              @update:inputValue="($event) => (phone = $event.target.value)"
            />
          </div>
        </div>
        <div class="mb-6">
          <LazyTextInputLabel for="message" title="메세지" />
          <LazyFormTextareaItem
            id="message"
            :value="message"
            @update:textareaValue="($event) => (message = $event.target.value)"
          />
        </div>
        <LazyButtonBlueButton @click="sendEmail">보내기</LazyButtonBlueButton>
      </form>
    </LazyLayoutContainerLayout>
    <LazyUiFooter
  /></LazyLayoutSectionLayout>
</template>
