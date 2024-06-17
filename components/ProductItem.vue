<template>
  <div class="product-card feature-card h-calc">
    <div class="top-card">
      <div class="price-section">
        <h4 class="price discounted">${{ price }}</h4>
        <h4 class="price text-color-primary">${{ discountPrice }}</h4>
      </div>
    </div>
    <div class="product-img-card feature-img-card">
      <a :href="'/products/' + slug" class="zoomImg">
        <img :src="thumb" alt="img" />
      </a>
      <div class="discount-badge">
        <span class="percentage">- {{ discount.toFixed(0) }}%</span>
      </div>
      <div class="special-icon"></div>
    </div>
    <a :href="'/products/' + slug">
      <h4 class="product-title line-clamp-1">{{ title }}</h4>
    </a>
    <div class="product-review">
      <div class="product-ratting">
        <i class="ri-star-s-fill"></i>
        <i class="ri-star-s-fill"></i>
        <i class="ri-star-s-fill"></i>
        <i class="ri-star-s-fill"></i>
        <i class="ri-star-s-fill"></i>
      </div>
      <p class="count-ratting">(52)</p>
    </div>
    <div class="cart-card feature-cart-card d-none d-md-block">
      <a :href="'/products/' + slug">
        <h4 class="product-title line-clamp-1">{{ title }}</h4>
      </a>
      <div class="product-review">
        <div class="product-ratting">
          <i class="ri-star-s-fill"></i>
          <i class="ri-star-s-fill"></i>
          <i class="ri-star-s-fill"></i>
          <i class="ri-star-s-fill"></i>
          <i class="ri-star-s-fill"></i>
        </div>
        <p class="count-ratting">(31)</p>
      </div>
      <div class="button-section">
        <button
          class="cart-btn"
          @click="addToCart(sku, username)"
          :disabled="isInCart(sku)"
          :style="isInCart(sku) ? 'background-color: gray' : ''"
        >
          {{ isInCart(sku, user) ? "Already in cart" : "Add to cart" }}
        </button>
        <div class="fill-pill-btn qty-btn">
          <div class="qty-container featury-qty-container">
            <div class="qty-btn-minus qty-btn mr-1" @click="dec">
              <i class="ri-subtract-fill"></i>
            </div>
            <input
              type="tel"
              class="input-qty input-rounded"
              v-model="qty"
              disabled
            />
            <div class="qty-btn-plus qty-btn ml-1" @click="inc">
              <i class="ri-add-fill"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="button-section d-block d-md-none">
      <button class="cart-btn" @click="addToCart(sku, username)">
        {{ isInCart(sku, user) ? "Already in cart" : "Add to cart" }}
      </button>
    </div>
  </div>
</template>

<script>
import useSlug from "~/composables/useSlug";
import { useFrontStore } from "../../stores/frontStore";
import { useAuthStore } from "~/stores/authStore";
export default {
  props: ["thumb", "title", "price", "discountPrice", "sku"],
  setup(props) {
    const frontStore = useFrontStore();
    const authStore = useAuthStore();
    const user = authStore.authUser.username;
    const { slug } = useSlug(props.title);
    const discount = ((props.price - props.discountPrice) * 100) / props.price;
    const sku = props.sku;
    const qty = ref(1);
    const inc = () => {
      if (qty.value < 10) {
        qty.value += 1;
      }
    };
    const dec = () => {
      if (qty.value > 1) {
        qty.value -= 1;
      }
    };
    const addToCart = (sku) => {
      frontStore.addProductToCart({
        username: authStore.authUser.username,
        sku: sku,
        qty: qty.value,
      });
    };
    return {
      discount,
      slug,
      inc,
      qty,
      dec,
      sku,
      addToCart,
      frontStore,
      isInCart: frontStore.isInCart,
      user,
    };
  },
};
</script>