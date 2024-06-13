<template>
  <section class="breadcrumb-section breadcrumb-bg">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="breadcrumb-text">
            <h1 class="title wow fadeInUp" data-wow-delay="0.1s">
              {{ title }}
            </h1>
            <nav
              aria-label="breadcrumb"
              class="breadcrumb-nav wow fadeInUp"
              data-wow-delay="0.0s"
            >
              <ul class="breadcrumb listing">
                <li class="breadcrumb-item single-list">
                  <a href="/" class="single">Home</a>
                </li>
                <li class="breadcrumb-item single-list" aria-current="page">
                  <span class="single active"
                    >{{ slug }}</span
                  >
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  props: ['title', 'slug']
}
</script>