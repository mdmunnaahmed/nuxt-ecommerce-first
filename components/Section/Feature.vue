<template>
  <!-- Feature area S t a r t -->
  <section class="feature-area feature-bg position-relative">
    <div class="container">
      <SectionHeader title="Feature Products"></SectionHeader>
      <div class="row">
        <div class="col-lg-12">
          <div class="swiper featureSwiper-active">
            <div class="swiper-wrapper">
              <div
                class="swiper-slide"
                v-for="(product, index) in products"
                :key="index"
              >
                <ProductItem
                  :thumb="product.thumb[0]"
                  :title="product.title"
                  :price="product.price"
                  :discountPrice="product.discountPrice"
                ></ProductItem>
              </div>
            </div>
            <div class="swiper-button-next swiper-common-btn" v-if="products.length > 4">
              <i class="ri-arrow-right-s-line"></i>
            </div>
            <div class="swiper-button-prev swiper-common-btn" v-if="products.length > 4">
              <i class="ri-arrow-left-s-line"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End-of feature-->
</template>


<script>
import { useFrontStore } from "../../stores/frontStore";
export default {
  setup() {
    const frontStore = useFrontStore();
    const products = frontStore.products;
    console.log(products);
    return {
      products,
    };
  },
};
</script>
