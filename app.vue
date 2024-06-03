<template>
  <div class="loading-page" id="preloader-active">
    <div class="counter">
      <img src="/images/logo/logo.png" alt="img" />
      <span class="number">0%</span>
      <span class="line"></span>
      <span class="line"></span>
    </div>
  </div>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { onBeforeMount } from "vue";
import { useAuthStore } from "~/stores/authStore";

const authStore = useAuthStore();

onBeforeMount(async () => {
  await authStore.checkAuthentication();
});

useHead({
  link: [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600&amp;display=swap",
    },
  ],
});
</script>
