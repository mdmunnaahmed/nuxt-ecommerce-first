<template>
  <!-- Brand S t a r t -->
  <section class="brand-area">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title">
            <h4 class="title">Brands</h4>
          </div>
          <div class="swiper brandSwiper-active">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(b, index) in brands" :key="index">
                <img :src="b.brand" alt="img" />
              </div>
            </div>
            <div class="swiper-button-next swiper-common-btn">
              <i class="ri-arrow-right-s-line"></i>
            </div>
            <div class="swiper-button-prev swiper-common-btn">
              <i class="ri-arrow-left-s-line"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End of Brand -->
</template>

<script>
import { useFrontStore } from "../../stores/frontStore";
export default {
  setup() {
    const frontStore = useFrontStore();
    const brands = frontStore.brands;
    return {
      brands,
    };
  },
};
</script>