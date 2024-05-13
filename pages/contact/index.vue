<script setup lang="ts">
definePageMeta({
  layout: "navbar",
});
</script>
<template>
  <section class="contact section" id="contact">
    <h2 class="section_title">- Contact me -</h2>
    <div class="contact_container container">
      <div class="contact_content">
        <div class="inputs">
          <input type="text" id="name" required placeholder="이름" />
          <input type="email" id="email" required placeholder="이메일" />
        </div>
        <input type="text" id="phone" required placeholder="전화번호" />
        <textarea
          id="message"
          cols="30"
          rows="10"
          required
          placeholder="메세지"
        ></textarea>
        <button class="btn">보내기</button>
      </div>
    </div>
  </section>
  <LazyFooter />
</template>
