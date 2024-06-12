<template>
  <div
    class=""
    data-wow-delay="0.0s"
  >
    <a href="" class="zoomImg block h-full w-full text-center">
      <img :src="thumb" alt="img" class="max-w-fit mx-auto" />
    </a>
    <div class="collection-card lg">
      <a href="" class="block h-full w-full">
        <h4 class="title text-color-primary line-clamp-1 text-capitalize">{{ title }}</h4>
        <p class="pera text-color-tertiary">{{ count }} {{ count <= 1 ? 'Category' : 'Categories' }}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["thumb", "title", "count"],
};
</script>