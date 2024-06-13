<template>
  <!-- News area S t a r t -->
  <section class="news-area bottom-padding1">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title">
            <h4 class="title">Latest Blog & News</h4>
          </div>
          <div class="swiper newsSwiper-active">
            <div class="swiper-wrapper">
              <div
                class="swiper-slide"
                v-for="(post, index) in posts"
                :key="index"
              >
                <BlogItem
                  :thumb="post.thumb"
                  :title="post.title"
                  :author="post.author"
                  :date="post.date"
                  :comments="post.comments"
                ></BlogItem>
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
  <!-- End-of best news-->
</template>

<script>
import { useFrontStore } from "../stores/frontStore";

export default {
  setup() {
    const frontStore = useFrontStore();

    const posts = frontStore.posts;
    return {
      posts,
    };
  },
};
</script>