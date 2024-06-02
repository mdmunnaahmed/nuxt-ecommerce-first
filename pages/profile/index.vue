<template>
  <div class="text-center pt-5">
    <div
      class="p-5 shadow-lg rounded-xl border border-gray-400 max-w-[520px] mx-auto mb-5"
    >
      <p>{{ 'asdf' }}</p>
    </div>
    <button @click="logout" class="btn bg-gray-700 hover:bg-gray-900 text-white px-5 py-2">
      logout
    </button>
  </div>
</template>

<script setup>

definePageMeta({
  middleware: "auth",
});

</script>