<template>
  <div class="news-card">
    <a :href="slug">
      <div class="news-img zoomImg">
        <img :src="thumb" alt="img" />
        <div class="news-badge">
          <span class="date"> {{ date }} </span>
        </div>
      </div>
    </a>
    <div class="author-info">
      <div class="icon-with-title">
        <i class="ri-user-line"></i>
        <p class="pera">By {{ author }}</p>
      </div>
      <div class="icon-with-title">
        <i class="ri-message-2-line"></i>
        <p class="pera">{{ comments }} Comments</p>
      </div>
    </div>
    <div class="news-content">
      <a :href="slug">
        <h4 class="news-title line-clamp-2">
          {{ title }}
        </h4>
      </a>
    </div>
    <a :href="slug" class="read-more-text flex"
      >Read More
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="10"
        viewBox="0 0 15 10"
        fill="none"
      >
        <path
          d="M12.6227 4.38164C12.5587 4.38164 12.4989 4.38164 12.4349 4.38164C8.56302 4.38164 4.69114 4.38164 0.819254 4.38164C0.7168 4.38164 0.614347 4.37773 0.516163 4.40117C0.195996 4.46758 -0.0302552 4.76447 0.00389589 5.05746C0.0423159 5.37779 0.302718 5.60827 0.644229 5.6278C0.712532 5.63171 0.780834 5.63171 0.853405 5.63171C4.71248 5.63171 8.57583 5.63171 12.4349 5.63171C12.4989 5.63171 12.5587 5.63171 12.6654 5.63171C12.5971 5.69812 12.5587 5.73719 12.516 5.77625C11.3805 6.81928 10.2407 7.86231 9.10517 8.90534C8.82342 9.16317 8.79354 9.51866 9.0326 9.77648C9.27166 10.0382 9.68574 10.0773 9.98029 9.86633C10.0272 9.83508 10.0657 9.79602 10.1084 9.75695C11.6494 8.34671 13.1905 6.93257 14.7273 5.51842C15.0987 5.17856 15.0987 4.8387 14.7273 4.49883C13.1777 3.07687 11.6238 1.65491 10.0742 0.229051C9.8693 0.0415392 9.63878 -0.0483093 9.35276 0.0259132C8.88319 0.147015 8.70389 0.670483 9.00698 1.01425C9.0454 1.06113 9.09236 1.10019 9.13932 1.14317C10.2663 2.17448 11.389 3.20969 12.5203 4.241C12.563 4.28007 12.6185 4.2996 12.6654 4.33085C12.6483 4.34257 12.6355 4.3621 12.6227 4.38164Z"
          fill="#696969"
        />
      </svg>
    </a>
  </div>
</template>

<script>
import useSlug from "../composables/useSlug";
export default {
  props: ["thumb", "title", "date", "author", "comments"],
  setup(props) {
    const { slug } = useSlug(props.title);
    return {
      slug,
    };
  },
};
</script>
