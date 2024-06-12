<template>
  <!-- Categories area S t a r t -->
  <section class="category-area section-padding2">
    <div class="container">
      <SectionHeader
        title="Choose The Categories That You Want"
        link="/shop"
        buttonLabel="See All Categories"
      ></SectionHeader>
      <div class="row g-4 mb-24">
        <div
          class="col-xl-6"
          v-for="(cate, index) in categories.slice(0, 1)"
          :key="index"
        >
          <CategoryItem
            class="category-card h-calc gallery-two wow fadeInUp"
            :title="cate[0]"
            :count="cate[1].count"
            :thumb="cate[1].thumbs[0]"
          ></CategoryItem>
        </div>
        <div class="col-xl-6">
          <div class="row g-4">
            <div
              class="col-xl-12 col-lg-6"
              v-for="(cate, index) in categories.slice(1, 3)"
              :key="index"
            >
              <CategoryItem
                class="category-card h-calc gallery-two wow fadeInUp"
                :title="cate[0]"
                :count="cate[1].count"
                :thumb="cate[1].thumbs[0]"
              ></CategoryItem>
            </div>
          </div>
        </div>
      </div>
      <div class="row g-4">
        <div
          class="col-xl-4 col-md-6"
          v-for="(cate, index) in categories.slice(4, 7)"
          :key="index"
        >
          <CategoryItem
            class="category-card h-calc gallery-three py-12 wow fadeInUp"
            :title="cate[0]"
            :count="cate[1].count"
            :thumb="cate[1].thumbs[0]"
          ></CategoryItem>
        </div>
      </div>
    </div>
  </section>
  <!-- End-of categories-->
</template>

<script>
import { useFrontStore } from "../stores/frontStore";
export default {
  setup() {
    const frontStore = useFrontStore();
    const categories = computed(() => {
      return Object.entries(frontStore.allCategories);
    });
    return {
      categories,
    };
  },
};
</script>
