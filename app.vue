<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from "vue";
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
