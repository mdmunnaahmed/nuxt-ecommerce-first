<template>
  <!-- Goal area S t a r t -->
  <section class="goal-area position-relative">
    <div class="container">
      <div class="row g-4">
        <div class="col-xxl-3 col-md-4 col-sm-6" v-for="(goal, index) in goals" :key="index">
          <div class="goal-card wow fadeInUp" data-wow-delay="0.0s">
            <div class="circle-icon">
              <img :src="goal.thumb" alt="img" />
            </div>
            <a href="javascript:void(0)">
              <h4 class="title line-clamp-1 text-color-primary">
                {{ goal.title }}
              </h4>
              <p class="pera text-color-tertiary line-clamp-2">
                {{ goal.pera }}
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="shape routedOne">
      <img src="/images/goal/shape.png" alt="img" />
    </div>
  </section>
  <!-- End-of goal-->
</template>

<script>
import { useFrontStore } from "../../stores/frontStore";
export default {
  setup() {
    const frontStore = useFrontStore();
    const goals = frontStore.goals;
    return {
      goals,
    };
  },
};
</script>