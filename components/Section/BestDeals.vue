<template>
  <!-- Best product area S t a r t -->
  <section class="best-product-area">
    <div class="container">
      <SectionHeader
        title="Best Deals"
      ></SectionHeader>
      <div class="row g-4">
        <div
          class="col-xxl-3 col-xl-4 col-sm-6"
          v-for="(product, index) in products"
          :key="index"
        >
          <ProductItem
            class="best-product-card"
            :sku="product.sku"
            :thumb="product.thumb[0]"
            :title="product.title"
            :price="product.price"
            :discountPrice="product.discountPrice"
          ></ProductItem>
        </div>
      </div>
    </div>
  </section>
  <!-- End-of best product-->
</template>


<script>
import { useFrontStore } from "../../stores/frontStore";
export default {
  setup() {
    const frontStore = useFrontStore();
    const products = frontStore.products;

    return {
      products,
    };
  },
};
</script>