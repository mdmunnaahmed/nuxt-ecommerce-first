<template>
  <div class="flex flex-col min-h-screen">
    <UIHeader />
    <main class="w-full">
      <slot />
    </main>
    <div class="mt-auto w-full"></div>
    <UIFooter />
  </div>
</template>