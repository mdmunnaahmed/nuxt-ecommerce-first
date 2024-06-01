<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <div class="main-wrapper">
      <slot />
    </div>
    <div class="mt-auto w-full"></div>
    <Footer />
  </div>
</template>