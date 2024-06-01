<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <main class="w-full">
      <slot />
    </main>
    <div class="mt-auto w-full"></div>
    <Footer />
  </div>
</template>