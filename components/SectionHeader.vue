<template>
  <div v-if="link" class="row">
    <div class="col-lg-12">
      <div class="section-with-button wow fadeInLeft" data-wow-delay="0.0s">
        <div class="section-title position-relative">
          <h4 class="title">{{ title }}</h4>
          <div class="shape routedOne">
            <img src="/images/icon/title-shape.png" alt="img" />
          </div>
        </div>
        <div class="text-center d-block">
          <a :href="link" class="outline-pill-btn flex">
            {{ buttonLabel }}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="78"
              height="19"
              viewBox="0 0 78 19"
              fill="none"
            >
              <path
                d="M66.918 10.9147C66.8987 10.9909 66.8754 11.0659 66.8482 11.1394C66.3343 12.5191 65.8568 13.9149 65.3832 15.3094C65.2835 15.6007 65.0431 15.8908 65.3278 16.3278C68.9295 13.4161 73.0932 11.4878 77.3487 9.65131C72.9717 7.73141 68.8104 5.59576 65.0804 2.61703C64.8556 3.06744 65.0978 3.36045 65.2072 3.6577C65.7259 5.06223 66.2433 6.47061 66.7965 7.85894C67.1854 8.84516 67.2283 9.92384 66.918 10.9147Z"
                fill="currentColor"
              />
              <rect
                y="8.90649"
                width="68"
                height="1"
                rx="0.5"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>

  <div v-else class="row">
    <div class="col-lg-12">
      <div class="section-title">
        <h4 class="title">{{ title }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "link", "buttonLabel"],
};
</script>