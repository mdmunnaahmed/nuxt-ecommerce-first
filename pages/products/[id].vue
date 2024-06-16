<template>
  <div>
    <SectionInnerBanner
      title="Shop Details"
      slug="shop details"
    ></SectionInnerBanner>

    <!-- product area S t a r t -->
    <section class="product-details-area top-padding">
      <div class="container">
        <div class="row g-4">
          <div class="col-xxl-6 col-lg-6">
            <div class="product-image-container">
              <div class="xzoom-box">
                <img
                  class="xzoom"
                  :src="singleItem.thumb[0]"
                  :xoriginal="singleItem.thumb[0]"
                  data-fancybox="gallery"
                  alt="img"
                />
                <div class="shape-01">
                  <img src="/images/product/preview-shape-01.png" alt="img" />
                </div>
                <div class="shape-02">
                  <img src="/images/product/preview-shape-02.png" alt="img" />
                </div>
              </div>

              <div class="xzoom-thumbs">
                <div class="xzoom-gallery-box" v-for="(img, index) in singleItem.thumb" :key="index">
                  <a :href="img">
                    <img
                      class="xzoom-gallery"
                      width="80"
                      :src="img"
                      :xpreview="img"
                      data-fancybox="gallery"
                      alt="img"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xxl-6 col-lg-6">
            <div class="product-details-content">
              <div class="first-section">
                <div class="category-name">
                  <p class="pera">
                    <span class="highlight">Category: </span>
                    <span
                      v-for="(cate, index) in singleItem.category"
                      :key="index"
                    >
                      {{ cate + ', ' }}
                    </span>
                  </p>
                </div>
                <h4 class="product-name">{{ singleItem.title }}</h4>
                <div class="product-price-section">
                  <div class="price-section">
                    <h4 class="price discounted">$ {{ singleItem.discountPrice }}</h4>
                    <h4 class="price">$ {{ singleItem.price }}</h4>
                  </div>
                  <div class="ratting-section">
                    <div class="all-ratting flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <path
                          d="M14 5.39116V5.70526C13.9143 5.90196 13.7892 6.07722 13.6332 6.21924C12.687 7.07588 11.7485 7.94194 10.8032 8.80001C10.7159 8.87939 10.6937 8.94735 10.7189 9.06471C11.0086 10.3759 11.2933 11.6883 11.5789 13.0004C11.6132 13.139 11.6138 13.2843 11.5808 13.4233C11.4492 13.9298 10.9112 14.1514 10.4678 13.8761C9.3554 13.1846 8.2441 12.4897 7.1339 11.7917C7.03433 11.7291 6.9643 11.7311 6.86583 11.7917C5.75982 12.4865 4.65208 13.1783 3.5426 13.867C3.25238 14.0475 2.96079 14.0509 2.68807 13.8365C2.41945 13.6252 2.34806 13.3339 2.42082 12.9981C2.70776 11.6792 2.99416 10.3571 3.28493 9.03729C3.30736 8.93593 3.28493 8.88281 3.21655 8.82056C2.43751 8.1107 1.65382 7.40569 0.885446 6.6844C0.566226 6.38458 0.170415 6.15328 0 5.70526V5.36261L0.0202418 5.33405H0V5.27694C0.00481165 5.28329 0.0100202 5.2893 0.0155917 5.29493C0.0265333 5.28722 0.0410307 5.27951 0.0454074 5.26809C0.187921 4.87918 0.489361 4.76125 0.854809 4.73469C1.30861 4.70157 1.76159 4.65645 2.21457 4.61391C2.99826 4.54024 3.78168 4.46257 4.56564 4.39232C4.67314 4.3829 4.73277 4.34806 4.77681 4.23927C5.27739 3.00514 5.78371 1.77387 6.28702 0.540886C6.34173 0.408107 6.40628 0.283895 6.51242 0.189951C6.90741 -0.164411 7.49907 -0.00850327 7.71599 0.537174C8.20836 1.77473 8.72179 3.00286 9.22237 4.2367C9.26586 4.3435 9.32221 4.38433 9.4319 4.39261C9.88543 4.42688 10.3387 4.46971 10.7917 4.51225C11.5758 4.58592 12.3594 4.66074 13.1425 4.73669C13.314 4.75354 13.4857 4.76782 13.6406 4.86405C13.8364 4.9854 13.9275 5.18043 14 5.39116Z"
                          fill="#FCC013"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <path
                          d="M14 5.39116V5.70526C13.9143 5.90196 13.7892 6.07722 13.6332 6.21924C12.687 7.07588 11.7485 7.94194 10.8032 8.80001C10.7159 8.87939 10.6937 8.94735 10.7189 9.06471C11.0086 10.3759 11.2933 11.6883 11.5789 13.0004C11.6132 13.139 11.6138 13.2843 11.5808 13.4233C11.4492 13.9298 10.9112 14.1514 10.4678 13.8761C9.3554 13.1846 8.2441 12.4897 7.1339 11.7917C7.03433 11.7291 6.9643 11.7311 6.86583 11.7917C5.75982 12.4865 4.65208 13.1783 3.5426 13.867C3.25238 14.0475 2.96079 14.0509 2.68807 13.8365C2.41945 13.6252 2.34806 13.3339 2.42082 12.9981C2.70776 11.6792 2.99416 10.3571 3.28493 9.03729C3.30736 8.93593 3.28493 8.88281 3.21655 8.82056C2.43751 8.1107 1.65382 7.40569 0.885446 6.6844C0.566226 6.38458 0.170415 6.15328 0 5.70526V5.36261L0.0202418 5.33405H0V5.27694C0.00481165 5.28329 0.0100202 5.2893 0.0155917 5.29493C0.0265333 5.28722 0.0410307 5.27951 0.0454074 5.26809C0.187921 4.87918 0.489361 4.76125 0.854809 4.73469C1.30861 4.70157 1.76159 4.65645 2.21457 4.61391C2.99826 4.54024 3.78168 4.46257 4.56564 4.39232C4.67314 4.3829 4.73277 4.34806 4.77681 4.23927C5.27739 3.00514 5.78371 1.77387 6.28702 0.540886C6.34173 0.408107 6.40628 0.283895 6.51242 0.189951C6.90741 -0.164411 7.49907 -0.00850327 7.71599 0.537174C8.20836 1.77473 8.72179 3.00286 9.22237 4.2367C9.26586 4.3435 9.32221 4.38433 9.4319 4.39261C9.88543 4.42688 10.3387 4.46971 10.7917 4.51225C11.5758 4.58592 12.3594 4.66074 13.1425 4.73669C13.314 4.75354 13.4857 4.76782 13.6406 4.86405C13.8364 4.9854 13.9275 5.18043 14 5.39116Z"
                          fill="#FCC013"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <path
                          d="M14 5.39116V5.70526C13.9143 5.90196 13.7892 6.07722 13.6332 6.21924C12.687 7.07588 11.7485 7.94194 10.8032 8.80001C10.7159 8.87939 10.6937 8.94735 10.7189 9.06471C11.0086 10.3759 11.2933 11.6883 11.5789 13.0004C11.6132 13.139 11.6138 13.2843 11.5808 13.4233C11.4492 13.9298 10.9112 14.1514 10.4678 13.8761C9.3554 13.1846 8.2441 12.4897 7.1339 11.7917C7.03433 11.7291 6.9643 11.7311 6.86583 11.7917C5.75982 12.4865 4.65208 13.1783 3.5426 13.867C3.25238 14.0475 2.96079 14.0509 2.68807 13.8365C2.41945 13.6252 2.34806 13.3339 2.42082 12.9981C2.70776 11.6792 2.99416 10.3571 3.28493 9.03729C3.30736 8.93593 3.28493 8.88281 3.21655 8.82056C2.43751 8.1107 1.65382 7.40569 0.885446 6.6844C0.566226 6.38458 0.170415 6.15328 0 5.70526V5.36261L0.0202418 5.33405H0V5.27694C0.00481165 5.28329 0.0100202 5.2893 0.0155917 5.29493C0.0265333 5.28722 0.0410307 5.27951 0.0454074 5.26809C0.187921 4.87918 0.489361 4.76125 0.854809 4.73469C1.30861 4.70157 1.76159 4.65645 2.21457 4.61391C2.99826 4.54024 3.78168 4.46257 4.56564 4.39232C4.67314 4.3829 4.73277 4.34806 4.77681 4.23927C5.27739 3.00514 5.78371 1.77387 6.28702 0.540886C6.34173 0.408107 6.40628 0.283895 6.51242 0.189951C6.90741 -0.164411 7.49907 -0.00850327 7.71599 0.537174C8.20836 1.77473 8.72179 3.00286 9.22237 4.2367C9.26586 4.3435 9.32221 4.38433 9.4319 4.39261C9.88543 4.42688 10.3387 4.46971 10.7917 4.51225C11.5758 4.58592 12.3594 4.66074 13.1425 4.73669C13.314 4.75354 13.4857 4.76782 13.6406 4.86405C13.8364 4.9854 13.9275 5.18043 14 5.39116Z"
                          fill="#FCC013"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <path
                          d="M14 5.39116V5.70526C13.9143 5.90196 13.7892 6.07722 13.6332 6.21924C12.687 7.07588 11.7485 7.94194 10.8032 8.80001C10.7159 8.87939 10.6937 8.94735 10.7189 9.06471C11.0086 10.3759 11.2933 11.6883 11.5789 13.0004C11.6132 13.139 11.6138 13.2843 11.5808 13.4233C11.4492 13.9298 10.9112 14.1514 10.4678 13.8761C9.3554 13.1846 8.2441 12.4897 7.1339 11.7917C7.03433 11.7291 6.9643 11.7311 6.86583 11.7917C5.75982 12.4865 4.65208 13.1783 3.5426 13.867C3.25238 14.0475 2.96079 14.0509 2.68807 13.8365C2.41945 13.6252 2.34806 13.3339 2.42082 12.9981C2.70776 11.6792 2.99416 10.3571 3.28493 9.03729C3.30736 8.93593 3.28493 8.88281 3.21655 8.82056C2.43751 8.1107 1.65382 7.40569 0.885446 6.6844C0.566226 6.38458 0.170415 6.15328 0 5.70526V5.36261L0.0202418 5.33405H0V5.27694C0.00481165 5.28329 0.0100202 5.2893 0.0155917 5.29493C0.0265333 5.28722 0.0410307 5.27951 0.0454074 5.26809C0.187921 4.87918 0.489361 4.76125 0.854809 4.73469C1.30861 4.70157 1.76159 4.65645 2.21457 4.61391C2.99826 4.54024 3.78168 4.46257 4.56564 4.39232C4.67314 4.3829 4.73277 4.34806 4.77681 4.23927C5.27739 3.00514 5.78371 1.77387 6.28702 0.540886C6.34173 0.408107 6.40628 0.283895 6.51242 0.189951C6.90741 -0.164411 7.49907 -0.00850327 7.71599 0.537174C8.20836 1.77473 8.72179 3.00286 9.22237 4.2367C9.26586 4.3435 9.32221 4.38433 9.4319 4.39261C9.88543 4.42688 10.3387 4.46971 10.7917 4.51225C11.5758 4.58592 12.3594 4.66074 13.1425 4.73669C13.314 4.75354 13.4857 4.76782 13.6406 4.86405C13.8364 4.9854 13.9275 5.18043 14 5.39116Z"
                          fill="#FCC013"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <path
                          d="M14 5.39116V5.70526C13.9143 5.90196 13.7892 6.07722 13.6332 6.21924C12.687 7.07588 11.7485 7.94194 10.8032 8.80001C10.7159 8.87939 10.6937 8.94735 10.7189 9.06471C11.0086 10.3759 11.2933 11.6883 11.5789 13.0004C11.6132 13.139 11.6138 13.2843 11.5808 13.4233C11.4492 13.9298 10.9112 14.1514 10.4678 13.8761C9.3554 13.1846 8.2441 12.4897 7.1339 11.7917C7.03433 11.7291 6.9643 11.7311 6.86583 11.7917C5.75982 12.4865 4.65208 13.1783 3.5426 13.867C3.25238 14.0475 2.96079 14.0509 2.68807 13.8365C2.41945 13.6252 2.34806 13.3339 2.42082 12.9981C2.70776 11.6792 2.99416 10.3571 3.28493 9.03729C3.30736 8.93593 3.28493 8.88281 3.21655 8.82056C2.43751 8.1107 1.65382 7.40569 0.885446 6.6844C0.566226 6.38458 0.170415 6.15328 0 5.70526V5.36261L0.0202418 5.33405H0V5.27694C0.00481165 5.28329 0.0100202 5.2893 0.0155917 5.29493C0.0265333 5.28722 0.0410307 5.27951 0.0454074 5.26809C0.187921 4.87918 0.489361 4.76125 0.854809 4.73469C1.30861 4.70157 1.76159 4.65645 2.21457 4.61391C2.99826 4.54024 3.78168 4.46257 4.56564 4.39232C4.67314 4.3829 4.73277 4.34806 4.77681 4.23927C5.27739 3.00514 5.78371 1.77387 6.28702 0.540886C6.34173 0.408107 6.40628 0.283895 6.51242 0.189951C6.90741 -0.164411 7.49907 -0.00850327 7.71599 0.537174C8.20836 1.77473 8.72179 3.00286 9.22237 4.2367C9.26586 4.3435 9.32221 4.38433 9.4319 4.39261C9.88543 4.42688 10.3387 4.46971 10.7917 4.51225C11.5758 4.58592 12.3594 4.66074 13.1425 4.73669C13.314 4.75354 13.4857 4.76782 13.6406 4.86405C13.8364 4.9854 13.9275 5.18043 14 5.39116Z"
                          fill="#FCC013"
                        />
                      </svg>
                    </div>
                    <div class="ratting-count">
                      <p class="pera">6 Reviews</p>
                    </div>
                  </div>
                </div>
                <div class="stock-section">
                  <p class="stock-count highlight">{{ singleItem.qty }} In stock</p>
                </div>
                <div class="divider"></div>
              </div>
              <div class="second-section">
                <div class="product-desc">
                  <p class="desc">
                    {{ singleItem.pera }}
                  </p>
                  <div class="color-palatte">
                    <h4 class="title">Color:</h4>
                    <div class="color-section">
                      <div class="color-checkbox">
                        <input
                          class="check-color"
                          type="checkbox"
                          id="checkbox1"
                        />
                        <div></div>
                      </div>
                      <div class="color-checkbox">
                        <input
                          class="check-color"
                          type="checkbox"
                          id="checkbox2"
                        />
                        <div></div>
                      </div>
                      <div class="color-checkbox">
                        <input
                          class="check-color"
                          type="checkbox"
                          id="checkbox3"
                        />
                        <div></div>
                      </div>
                      <div class="color-checkbox">
                        <input
                          class="check-color"
                          type="checkbox"
                          id="checkbox4"
                        />
                        <div></div>
                      </div>
                    </div>
                  </div>
                  
                </div>
                <div class="divider"></div>
              </div>
              <div class="third-section">
                <div class="row g-4">
                  <div class="col-md-3">
                    <h4 class="label">Quantity</h4>
                  </div>
                  <div class="col-md-9">
                    <div class="quantity-section">
                      <div class="quantity-btn position-relative">
                        <input
                          type="text"
                          name="qty"
                          value="01"
                          class="num-count"
                        />
                      </div>
                      <a href="javascript:void(0)" class="cart-btn"
                        >Add to Cart</a
                      >
                    </div>
                  </div>
                  <div class="col-md-3">
                    <h4 class="label">Size</h4>
                  </div>
                  <div class="col-md-9">
                    <div class="size-dropdown">
                      <select name="size" class="select2">
                        <option value="1">30 Fit by 12 Fit</option>
                        <option value="2">20 Fit by 10 Fit</option>
                        <option value="3">10 Fit by 08 Fit</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <h4 class="label">SKU</h4>
                  </div>
                  <div class="col-md-9">
                    <p class="info">{{ singleItem.sku }}</p>
                  </div>
                  <div class="col-md-3">
                    <h4 class="label">Tags</h4>
                  </div>
                  <div class="col-md-9">
                    <span class="info mb-19" v-for="(tag, index) in singleItem.tag" :key="index">{{ tag + ', ' }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End-of product area-->

    <!-- More details area S t a r t -->
    <div class="more-details-area">
      <div class="container">
        <div class="more-details-section">
          <div class="row g-4">
            <div class="col-xl-5">
              <div class="all-outline-btn">
                <ul class="nav all-outline-btn" id="pills-tab" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link outline-pill-btn active"
                      id="pills-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-home"
                      type="button"
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected="true"
                    >
                      Description
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
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link outline-pill-btn"
                      id="pills-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-profile"
                      type="button"
                      role="tab"
                      aria-controls="pills-profile"
                      aria-selected="false"
                    >
                      Additional information
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
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link outline-pill-btn"
                      id="pills-contact-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-contact"
                      type="button"
                      role="tab"
                      aria-controls="pills-contact"
                      aria-selected="false"
                    >
                      Reviews 03
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
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-xl-7">
              <div class="tab-content" id="pills-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                >
                  <!-- Tab Content -->
                  <div class="addition-desc">
                    <p class="pera">
                      Curabitur egestas malesuada volutpat. Nunc vel vestibulum
                      odio, ac pellentesque lacus. Pellentesque dapibus nunc nec
                      est as erdiet, a malesuada sem rutrum. Sed quam odio,
                      porta a finibus quis, sagittis aliquet leo. Nunc ornare
                      asmetus urna, eu luctusi velit placerat ut. Cras at
                      porttitor lectus. Ut dapibus aliquam nibh, in imperdiet
                      libero tincidunt sit amet. Morbi sodales fermeni nibh nec
                      facilisis. Morbi pharetra varius velit, eget varius libero
                      finibus quis. ut ornare.
                    </p>
                    <ul class="listings">
                      <li class="list">
                        <p class="points">Aenean auctor sem ac ex efficitur</p>
                      </li>
                      <li class="list">
                        <p class="points">Non mattis odio bibendum</p>
                      </li>
                      <li class="list">
                        <p class="points">Sed vitae enim at tortor finibus</p>
                      </li>
                      <li class="list">
                        <p class="points">
                          Integer facilisis eleifend vehicula
                        </p>
                      </li>
                      <li class="list">
                        <p class="points">In hac habitasse platea dictumst</p>
                      </li>
                    </ul>
                    <p class="pera">
                      Sed molestie orci sem, at semper est molestie ac.
                      Suspendisse cursus feugiat erat, eu posuere massa. Nullam
                      posuere nibh as endisse at dui euismod, rhoncus eros non,
                      imperdiet ipsum.
                    </p>
                  </div>
                  <!-- End Tab contents -->
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-profile"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab"
                >
                  <!-- Tab Content -->
                  <div class="addition-desc">
                    <div class="table-responsive mb-20">
                      <table class="table custom-table table-striped">
                        <tbody>
                          <tr>
                            <th class="thead">HEIGHT</th>
                            <td class="tdata">Inches (34.6)</td>
                            <td class="tdata">CM (88)</td>
                          </tr>
                          <tr>
                            <th class="thead">WIDTH</th>
                            <td class="tdata">Inches (71.7 X 89.4)</td>
                            <td class="tdata">CM (182 X 227)</td>
                          </tr>
                          <tr>
                            <th class="thead">DEPTH</th>
                            <td class="tdata">Inches (35.8)</td>
                            <td class="tdata">CM (91)</td>
                          </tr>
                          <tr>
                            <th class="thead">INTERNAL</th>
                            <td class="tdata">Inches (57.1 X 68.1)</td>
                            <td class="tdata">CM (145 X 173)</td>
                          </tr>
                          <tr>
                            <th class="thead">COLOR</th>
                            <td colspan="2">
                              <div class="color-section">
                                <div class="color-checkbox">
                                  <input
                                    class="check-color"
                                    type="checkbox"
                                    id="checkbox1"
                                  />
                                  <div></div>
                                </div>
                                <div class="color-checkbox">
                                  <input
                                    class="check-color"
                                    type="checkbox"
                                    id="checkbox2"
                                  />
                                  <div></div>
                                </div>
                                <div class="color-checkbox">
                                  <input
                                    class="check-color"
                                    type="checkbox"
                                    id="checkbox3"
                                  />
                                  <div></div>
                                </div>
                                <div class="color-checkbox">
                                  <input
                                    class="check-color"
                                    type="checkbox"
                                    id="checkbox4"
                                  />
                                  <div></div>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p class="pera">
                      Curabitur egestas malesuada volutpat. Nunc vel vestibulum
                      odio, ac pellentesque lacus. Pellentesque dapibus nunc nec
                      est as erdiet, a malesuada sem rutrum. Sed quam odio,
                      porta a finibus quis, sagittis aliquet leo. Nunc ornare
                      asmetus urna, eu luctusi velit placerat ut. Cras at
                      porttitor lectus. Ut dapibus aliquam nibh, in imperdiet
                      libero tincidunt sit amet. Morbi sodales fermeni nibh nec
                      facilisis. Morbi pharetra varius velit, eget varius libero
                      finibus quis. ut ornare.
                    </p>
                    <ul class="listings">
                      <li class="list">
                        <p class="points">Aenean auctor sem ac ex efficitur</p>
                      </li>
                      <li class="list">
                        <p class="points">Non mattis odio bibendum</p>
                      </li>
                      <li class="list">
                        <p class="points">Sed vitae enim at tortor finibus</p>
                      </li>
                      <li class="list">
                        <p class="points">
                          Integer facilisis eleifend vehicula
                        </p>
                      </li>
                      <li class="list">
                        <p class="points">In hac habitasse platea dictumst</p>
                      </li>
                    </ul>
                    <p class="pera">
                      Sed molestie orci sem, at semper est molestie ac.
                      Suspendisse cursus feugiat erat, eu posuere massa. Nullam
                      posuere nibh as endisse at dui euismod, rhoncus eros non,
                      imperdiet ipsum.
                    </p>
                  </div>
                  <!-- End Tab contents -->
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-contact"
                  role="tabpanel"
                  aria-labelledby="pills-contact-tab"
                >
                  .

                  <!-- Tab Content -->
                  <div class="review-list">
                    <div class="review-card">
                      <div class="wrap-user">
                        <div class="user-img">
                          <img src="/images/product/user-1.png" alt="img" />
                        </div>
                        <div class="wrap-info">
                          <div class="user-info">
                            <div class="name-ratting">
                              <div class="name-wrapper">
                                <h4 class="name">Abubokkor Siddik</h4>
                                <div class="ratting">
                                  <div class="all-ratting">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="14"
                                      height="14"
                                      viewBox="0 0 14 14"
                                      fill="none"
                                    >
                                      <path
                                        d="M14 5.39116V5.70526C13.9143 5.90196 13.7892 6.07722 13.6332 6.21924C12.687 7.07588 11.7485 7.94194 10.8032 8.80001C10.7159 8.87939 10.6937 8.94735 10.7189 9.06471C11.0086 10.3759 11.2933 11.6883 11.5789 13.0004C11.6132 13.139 11.6138 13.2843 11.5808 13.4233C11.4492 13.9298 10.9112 14.1514 10.4678 13.8761C9.3554 13.1846 8.2441 12.4897 7.1339 11.7917C7.03433 11.7291 6.9643 11.7311 6.86583 11.7917C5.75982 12.4865 4.65208 13.1783 3.5426 13.867C3.25238 14.0475 2.96079 14.0509 2.68807 13.8365C2.41945 13.6252 2.34806 13.3339 2.42082 12.9981C2.70776 11.6792 2.99416 10.3571 3.28493 9.03729C3.30736 8.93593 3.28493 8.88281 3.21655 8.82056C2.43751 8.1107 1.65382 7.40569 0.885446 6.6844C0.566226 6.38458 0.170415 6.15328 0 5.70526V5.36261L0.0202418 5.33405H0V5.27694C0.00481165 5.28329 0.0100202 5.2893 0.0155917 5.29493C0.0265333 5.28722 0.0410307 5.27951 0.0454074 5.26809C0.187921 4.87918 0.489361 4.76125 0.854809 4.73469C1.30861 4.70157 1.76159 4.65645 2.21457 4.61391C2.99826 4.54024 3.78168 4.46257 4.56564 4.39232C4.67314 4.3829 4.73277 4.34806 4.77681 4.23927C5.27739 3.00514 5.78371 1.77387 6.28702 0.540886C6.34173 0.408107 6.40628 0.283895 6.51242 0.189951C6.90741 -0.164411 7.49907 -0.00850327 7.71599 0.537174C8.20836 1.77473 8.72179 3.00286 9.22237 4.2367C9.26586 4.3435 9.32221 4.38433 9.4319 4.39261C9.88543 4.42688 10.3387 4.46971 10.7917 4.51225C11.5758 4.58592 12.3594 4.66074 13.1425 4.73669C13.314 4.75354 13.4857 4.76782 13.6406 4.86405C13.8364 4.9854 13.9275 5.18043 14 5.39116Z"
                                        fill="#FCC013"
                                      />
                                    </svg>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="14"
                                      height="14"
                                      viewBox="0 0 14 14"
                                      fill="none"
                                    >
                                      <path
                                        d="M14 5.39116V5.70526C13.9143 5.90196 13.7892 6.07722 13.6332 6.21924C12.687 7.07588 11.7485 7.94194 10.8032 8.80001C10.7159 8.87939 10.6937 8.94735 10.7189 9.06471C11.0086 10.3759 11.2933 11.6883 11.5789 13.0004C11.6132 13.139 11.6138 13.2843 11.5808 13.4233C11.4492 13.9298 10.9112 14.1514 10.4678 13.8761C9.3554 13.1846 8.2441 12.4897 7.1339 11.7917C7.03433 11.7291 6.9643 11.7311 6.86583 11.7917C5.75982 12.4865 4.65208 13.1783 3.5426 13.867C3.25238 14.0475 2.96079 14.0509 2.68807 13.8365C2.41945 13.6252 2.34806 13.3339 2.42082 12.9981C2.70776 11.6792 2.99416 10.3571 3.28493 9.03729C3.30736 8.93593 3.28493 8.88281 3.21655 8.82056C2.43751 8.1107 1.65382 7.40569 0.885446 6.6844C0.566226 6.38458 0.170415 6.15328 0 5.70526V5.36261L0.0202418 5.33405H0V5.27694C0.00481165 5.28329 0.0100202 5.2893 0.0155917 5.29493C0.0265333 5.28722 0.0410307 5.27951 0.0454074 5.26809C0.187921 4.87918 0.489361 4.76125 0.854809 4.73469C1.30861 4.70157 1.76159 4.65645 2.21457 4.61391C2.99826 4.54024 3.78168 4.46257 4.56564 4.39232C4.67314 4.3829 4.73277 4.34806 4.77681 4.23927C5.27739 3.00514 5.78371 1.77387 6.28702 0.540886C6.34173 0.408107 6.40628 0.283895 6.51242 0.189951C6.90741 -0.164411 7.49907 -0.00850327 7.71599 0.537174C8.20836 1.77473 8.72179 3.00286 9.22237 4.2367C9.26586 4.3435 9.32221 4.38433 9.4319 4.39261C9.88543 4.42688 10.3387 4.46971 10.7917 4.51225C11.5758 4.58592 12.3594 4.66074 13.1425 4.73669C13.314 4.75354 13.4857 4.76782 13.6406 4.86405C13.8364 4.9854 13.9275 5.18043 14 5.39116Z"
                                        fill="#FCC013"
                                      />
                                    </svg>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="14"
                                      height="14"
                                      viewBox="0 0 14 14"
                                      fill="none"
                                    >
                                      <path
                                        d="M14 5.39116V5.70526C13.9143 5.90196 13.7892 6.07722 13.6332 6.21924C12.687 7.07588 11.7485 7.94194 10.8032 8.80001C10.7159 8.87939 10.6937 8.94735 10.7189 9.06471C11.0086 10.3759 11.2933 11.6883 11.5789 13.0004C11.6132 13.139 11.6138 13.2843 11.5808 13.4233C11.4492 13.9298 10.9112 14.1514 10.4678 13.8761C9.3554 13.1846 8.2441 12.4897 7.1339 11.7917C7.03433 11.7291 6.9643 11.7311 6.86583 11.7917C5.75982 12.4865 4.65208 13.1783 3.5426 13.867C3.25238 14.0475 2.96079 14.0509 2.68807 13.8365C2.41945 13.6252 2.34806 13.3339 2.42082 12.9981C2.70776 11.6792 2.99416 10.3571 3.28493 9.03729C3.30736 8.93593 3.28493 8.88281 3.21655 8.82056C2.43751 8.1107 1.65382 7.40569 0.885446 6.6844C0.566226 6.38458 0.170415 6.15328 0 5.70526V5.36261L0.0202418 5.33405H0V5.27694C0.00481165 5.28329 0.0100202 5.2893 0.0155917 5.29493C0.0265333 5.28722 0.0410307 5.27951 0.0454074 5.26809C0.187921 4.87918 0.489361 4.76125 0.854809 4.73469C1.30861 4.70157 1.76159 4.65645 2.21457 4.61391C2.99826 4.54024 3.78168 4.46257 4.56564 4.39232C4.67314 4.3829 4.73277 4.34806 4.77681 4.23927C5.27739 3.00514 5.78371 1.77387 6.28702 0.540886C6.34173 0.408107 6.40628 0.283895 6.51242 0.189951C6.90741 -0.164411 7.49907 -0.00850327 7.71599 0.537174C8.20836 1.77473 8.72179 3.00286 9.22237 4.2367C9.26586 4.3435 9.32221 4.38433 9.4319 4.39261C9.88543 4.42688 10.3387 4.46971 10.7917 4.51225C11.5758 4.58592 12.3594 4.66074 13.1425 4.73669C13.314 4.75354 13.4857 4.76782 13.6406 4.86405C13.8364 4.9854 13.9275 5.18043 14 5.39116Z"
                                        fill="#FCC013"
                                      />
                                    </svg>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="14"
                                      height="14"
                                      viewBox="0 0 14 14"
                                      fill="none"
                                    >
                                      <path
                                        d="M14 5.39116V5.70526C13.9143 5.90196 13.7892 6.07722 13.6332 6.21924C12.687 7.07588 11.7485 7.94194 10.8032 8.80001C10.7159 8.87939 10.6937 8.94735 10.7189 9.06471C11.0086 10.3759 11.2933 11.6883 11.5789 13.0004C11.6132 13.139 11.6138 13.2843 11.5808 13.4233C11.4492 13.9298 10.9112 14.1514 10.4678 13.8761C9.3554 13.1846 8.2441 12.4897 7.1339 11.7917C7.03433 11.7291 6.9643 11.7311 6.86583 11.7917C5.75982 12.4865 4.65208 13.1783 3.5426 13.867C3.25238 14.0475 2.96079 14.0509 2.68807 13.8365C2.41945 13.6252 2.34806 13.3339 2.42082 12.9981C2.70776 11.6792 2.99416 10.3571 3.28493 9.03729C3.30736 8.93593 3.28493 8.88281 3.21655 8.82056C2.43751 8.1107 1.65382 7.40569 0.885446 6.6844C0.566226 6.38458 0.170415 6.15328 0 5.70526V5.36261L0.0202418 5.33405H0V5.27694C0.00481165 5.28329 0.0100202 5.2893 0.0155917 5.29493C0.0265333 5.28722 0.0410307 5.27951 0.0454074 5.26809C0.187921 4.87918 0.489361 4.76125 0.854809 4.73469C1.30861 4.70157 1.76159 4.65645 2.21457 4.61391C2.99826 4.54024 3.78168 4.46257 4.56564 4.39232C4.67314 4.3829 4.73277 4.34806 4.77681 4.23927C5.27739 3.00514 5.78371 1.77387 6.28702 0.540886C6.34173 0.408107 6.40628 0.283895 6.51242 0.189951C6.90741 -0.164411 7.49907 -0.00850327 7.71599 0.537174C8.20836 1.77473 8.72179 3.00286 9.22237 4.2367C9.26586 4.3435 9.32221 4.38433 9.4319 4.39261C9.88543 4.42688 10.3387 4.46971 10.7917 4.51225C11.5758 4.58592 12.3594 4.66074 13.1425 4.73669C13.314 4.75354 13.4857 4.76782 13.6406 4.86405C13.8364 4.9854 13.9275 5.18043 14 5.39116Z"
                                        fill="#FCC013"
                                      />
                                    </svg>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="14"
                                      height="14"
                                      viewBox="0 0 14 14"
                                      fill="none"
                                    >
                                      <path
                                        d="M14 5.39116V5.70526C13.9143 5.90196 13.7892 6.07722 13.6332 6.21924C12.687 7.07588 11.7485 7.94194 10.8032 8.80001C10.7159 8.87939 10.6937 8.94735 10.7189 9.06471C11.0086 10.3759 11.2933 11.6883 11.5789 13.0004C11.6132 13.139 11.6138 13.2843 11.5808 13.4233C11.4492 13.9298 10.9112 14.1514 10.4678 13.8761C9.3554 13.1846 8.2441 12.4897 7.1339 11.7917C7.03433 11.7291 6.9643 11.7311 6.86583 11.7917C5.75982 12.4865 4.65208 13.1783 3.5426 13.867C3.25238 14.0475 2.96079 14.0509 2.68807 13.8365C2.41945 13.6252 2.34806 13.3339 2.42082 12.9981C2.70776 11.6792 2.99416 10.3571 3.28493 9.03729C3.30736 8.93593 3.28493 8.88281 3.21655 8.82056C2.43751 8.1107 1.65382 7.40569 0.885446 6.6844C0.566226 6.38458 0.170415 6.15328 0 5.70526V5.36261L0.0202418 5.33405H0V5.27694C0.00481165 5.28329 0.0100202 5.2893 0.0155917 5.29493C0.0265333 5.28722 0.0410307 5.27951 0.0454074 5.26809C0.187921 4.87918 0.489361 4.76125 0.854809 4.73469C1.30861 4.70157 1.76159 4.65645 2.21457 4.61391C2.99826 4.54024 3.78168 4.46257 4.56564 4.39232C4.67314 4.3829 4.73277 4.34806 4.77681 4.23927C5.27739 3.00514 5.78371 1.77387 6.28702 0.540886C6.34173 0.408107 6.40628 0.283895 6.51242 0.189951C6.90741 -0.164411 7.49907 -0.00850327 7.71599 0.537174C8.20836 1.77473 8.72179 3.00286 9.22237 4.2367C9.26586 4.3435 9.32221 4.38433 9.4319 4.39261C9.88543 4.42688 10.3387 4.46971 10.7917 4.51225C11.5758 4.58592 12.3594 4.66074 13.1425 4.73669C13.314 4.75354 13.4857 4.76782 13.6406 4.86405C13.8364 4.9854 13.9275 5.18043 14 5.39116Z"
                                        fill="#FCC013"
                                      />
                                    </svg>
                                  </div>
                                  <p class="pera-sm">(5.0)</p>
                                </div>
                              </div>
                              <div class="date">
                                <p class="pera-sm">April 14, 2023</p>
                              </div>
                            </div>
                            <div class="reply">
                              <a href="javascript:void(0)" class="reply-btn"
                                >Reply</a
                              >
                            </div>
                          </div>
                          <div class="user-comment">
                            <p class="pera">
                              Simply dummy text of the printing and typesetting
                              industry. Lorem Ipsium has ashobeen the industry's
                              standards dummy repeat predefined chunks as
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="review-card">
                      <div class="wrap-user">
                        <div class="user-img">
                          <img src="/images/product/user-2.png" alt="img" />
                        </div>
                        <div class="wrap-info">
                          <div class="user-info">
                            <div class="name-ratting">
                              <div class="name-wrapper">
                                <h4 class="name">Davidthy Phillips</h4>
                                <div class="ratting">
                                  <div class="all-ratting">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="14"
                                      height="14"
                                      viewBox="0 0 14 14"
                                      fill="none"
                                    >
                                      <path
                                        d="M14 5.39116V5.70526C13.9143 5.90196 13.7892 6.07722 13.6332 6.21924C12.687 7.07588 11.7485 7.94194 10.8032 8.80001C10.7159 8.87939 10.6937 8.94735 10.7189 9.06471C11.0086 10.3759 11.2933 11.6883 11.5789 13.0004C11.6132 13.139 11.6138 13.2843 11.5808 13.4233C11.4492 13.9298 10.9112 14.1514 10.4678 13.8761C9.3554 13.1846 8.2441 12.4897 7.1339 11.7917C7.03433 11.7291 6.9643 11.7311 6.86583 11.7917C5.75982 12.4865 4.65208 13.1783 3.5426 13.867C3.25238 14.0475 2.96079 14.0509 2.68807 13.8365C2.41945 13.6252 2.34806 13.3339 2.42082 12.9981C2.70776 11.6792 2.99416 10.3571 3.28493 9.03729C3.30736 8.93593 3.28493 8.88281 3.21655 8.82056C2.43751 8.1107 1.65382 7.40569 0.885446 6.6844C0.566226 6.38458 0.170415 6.15328 0 5.70526V5.36261L0.0202418 5.33405H0V5.27694C0.00481165 5.28329 0.0100202 5.2893 0.0155917 5.29493C0.0265333 5.28722 0.0410307 5.27951 0.0454074 5.26809C0.187921 4.87918 0.489361 4.76125 0.854809 4.73469C1.30861 4.70157 1.76159 4.65645 2.21457 4.61391C2.99826 4.54024 3.78168 4.46257 4.56564 4.39232C4.67314 4.3829 4.73277 4.34806 4.77681 4.23927C5.27739 3.00514 5.78371 1.77387 6.28702 0.540886C6.34173 0.408107 6.40628 0.283895 6.51242 0.189951C6.90741 -0.164411 7.49907 -0.00850327 7.71599 0.537174C8.20836 1.77473 8.72179 3.00286 9.22237 4.2367C9.26586 4.3435 9.32221 4.38433 9.4319 4.39261C9.88543 4.42688 10.3387 4.46971 10.7917 4.51225C11.5758 4.58592 12.3594 4.66074 13.1425 4.73669C13.314 4.75354 13.4857 4.76782 13.6406 4.86405C13.8364 4.9854 13.9275 5.18043 14 5.39116Z"
                                        fill="#FCC013"
                                      />
                                    </svg>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="14"
                                      height="14"
                                      viewBox="0 0 14 14"
                                      fill="none"
                                    >
                                      <path
                                        d="M14 5.39116V5.70526C13.9143 5.90196 13.7892 6.07722 13.6332 6.21924C12.687 7.07588 11.7485 7.94194 10.8032 8.80001C10.7159 8.87939 10.6937 8.94735 10.7189 9.06471C11.0086 10.3759 11.2933 11.6883 11.5789 13.0004C11.6132 13.139 11.6138 13.2843 11.5808 13.4233C11.4492 13.9298 10.9112 14.1514 10.4678 13.8761C9.3554 13.1846 8.2441 12.4897 7.1339 11.7917C7.03433 11.7291 6.9643 11.7311 6.86583 11.7917C5.75982 12.4865 4.65208 13.1783 3.5426 13.867C3.25238 14.0475 2.96079 14.0509 2.68807 13.8365C2.41945 13.6252 2.34806 13.3339 2.42082 12.9981C2.70776 11.6792 2.99416 10.3571 3.28493 9.03729C3.30736 8.93593 3.28493 8.88281 3.21655 8.82056C2.43751 8.1107 1.65382 7.40569 0.885446 6.6844C0.566226 6.38458 0.170415 6.15328 0 5.70526V5.36261L0.0202418 5.33405H0V5.27694C0.00481165 5.28329 0.0100202 5.2893 0.0155917 5.29493C0.0265333 5.28722 0.0410307 5.27951 0.0454074 5.26809C0.187921 4.87918 0.489361 4.76125 0.854809 4.73469C1.30861 4.70157 1.76159 4.65645 2.21457 4.61391C2.99826 4.54024 3.78168 4.46257 4.56564 4.39232C4.67314 4.3829 4.73277 4.34806 4.77681 4.23927C5.27739 3.00514 5.78371 1.77387 6.28702 0.540886C6.34173 0.408107 6.40628 0.283895 6.51242 0.189951C6.90741 -0.164411 7.49907 -0.00850327 7.71599 0.537174C8.20836 1.77473 8.72179 3.00286 9.22237 4.2367C9.26586 4.3435 9.32221 4.38433 9.4319 4.39261C9.88543 4.42688 10.3387 4.46971 10.7917 4.51225C11.5758 4.58592 12.3594 4.66074 13.1425 4.73669C13.314 4.75354 13.4857 4.76782 13.6406 4.86405C13.8364 4.9854 13.9275 5.18043 14 5.39116Z"
                                        fill="#FCC013"
                                      />
                                    </svg>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="14"
                                      height="14"
                                      viewBox="0 0 14 14"
                                      fill="none"
                                    >
                                      <path
                                        d="M14 5.39116V5.70526C13.9143 5.90196 13.7892 6.07722 13.6332 6.21924C12.687 7.07588 11.7485 7.94194 10.8032 8.80001C10.7159 8.87939 10.6937 8.94735 10.7189 9.06471C11.0086 10.3759 11.2933 11.6883 11.5789 13.0004C11.6132 13.139 11.6138 13.2843 11.5808 13.4233C11.4492 13.9298 10.9112 14.1514 10.4678 13.8761C9.3554 13.1846 8.2441 12.4897 7.1339 11.7917C7.03433 11.7291 6.9643 11.7311 6.86583 11.7917C5.75982 12.4865 4.65208 13.1783 3.5426 13.867C3.25238 14.0475 2.96079 14.0509 2.68807 13.8365C2.41945 13.6252 2.34806 13.3339 2.42082 12.9981C2.70776 11.6792 2.99416 10.3571 3.28493 9.03729C3.30736 8.93593 3.28493 8.88281 3.21655 8.82056C2.43751 8.1107 1.65382 7.40569 0.885446 6.6844C0.566226 6.38458 0.170415 6.15328 0 5.70526V5.36261L0.0202418 5.33405H0V5.27694C0.00481165 5.28329 0.0100202 5.2893 0.0155917 5.29493C0.0265333 5.28722 0.0410307 5.27951 0.0454074 5.26809C0.187921 4.87918 0.489361 4.76125 0.854809 4.73469C1.30861 4.70157 1.76159 4.65645 2.21457 4.61391C2.99826 4.54024 3.78168 4.46257 4.56564 4.39232C4.67314 4.3829 4.73277 4.34806 4.77681 4.23927C5.27739 3.00514 5.78371 1.77387 6.28702 0.540886C6.34173 0.408107 6.40628 0.283895 6.51242 0.189951C6.90741 -0.164411 7.49907 -0.00850327 7.71599 0.537174C8.20836 1.77473 8.72179 3.00286 9.22237 4.2367C9.26586 4.3435 9.32221 4.38433 9.4319 4.39261C9.88543 4.42688 10.3387 4.46971 10.7917 4.51225C11.5758 4.58592 12.3594 4.66074 13.1425 4.73669C13.314 4.75354 13.4857 4.76782 13.6406 4.86405C13.8364 4.9854 13.9275 5.18043 14 5.39116Z"
                                        fill="#FCC013"
                                      />
                                    </svg>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="14"
                                      height="14"
                                      viewBox="0 0 14 14"
                                      fill="none"
                                    >
                                      <path
                                        d="M14 5.39116V5.70526C13.9143 5.90196 13.7892 6.07722 13.6332 6.21924C12.687 7.07588 11.7485 7.94194 10.8032 8.80001C10.7159 8.87939 10.6937 8.94735 10.7189 9.06471C11.0086 10.3759 11.2933 11.6883 11.5789 13.0004C11.6132 13.139 11.6138 13.2843 11.5808 13.4233C11.4492 13.9298 10.9112 14.1514 10.4678 13.8761C9.3554 13.1846 8.2441 12.4897 7.1339 11.7917C7.03433 11.7291 6.9643 11.7311 6.86583 11.7917C5.75982 12.4865 4.65208 13.1783 3.5426 13.867C3.25238 14.0475 2.96079 14.0509 2.68807 13.8365C2.41945 13.6252 2.34806 13.3339 2.42082 12.9981C2.70776 11.6792 2.99416 10.3571 3.28493 9.03729C3.30736 8.93593 3.28493 8.88281 3.21655 8.82056C2.43751 8.1107 1.65382 7.40569 0.885446 6.6844C0.566226 6.38458 0.170415 6.15328 0 5.70526V5.36261L0.0202418 5.33405H0V5.27694C0.00481165 5.28329 0.0100202 5.2893 0.0155917 5.29493C0.0265333 5.28722 0.0410307 5.27951 0.0454074 5.26809C0.187921 4.87918 0.489361 4.76125 0.854809 4.73469C1.30861 4.70157 1.76159 4.65645 2.21457 4.61391C2.99826 4.54024 3.78168 4.46257 4.56564 4.39232C4.67314 4.3829 4.73277 4.34806 4.77681 4.23927C5.27739 3.00514 5.78371 1.77387 6.28702 0.540886C6.34173 0.408107 6.40628 0.283895 6.51242 0.189951C6.90741 -0.164411 7.49907 -0.00850327 7.71599 0.537174C8.20836 1.77473 8.72179 3.00286 9.22237 4.2367C9.26586 4.3435 9.32221 4.38433 9.4319 4.39261C9.88543 4.42688 10.3387 4.46971 10.7917 4.51225C11.5758 4.58592 12.3594 4.66074 13.1425 4.73669C13.314 4.75354 13.4857 4.76782 13.6406 4.86405C13.8364 4.9854 13.9275 5.18043 14 5.39116Z"
                                        fill="#FCC013"
                                      />
                                    </svg>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="14"
                                      height="14"
                                      viewBox="0 0 14 14"
                                      fill="none"
                                    >
                                      <path
                                        d="M14 5.39116V5.70526C13.9143 5.90196 13.7892 6.07722 13.6332 6.21924C12.687 7.07588 11.7485 7.94194 10.8032 8.80001C10.7159 8.87939 10.6937 8.94735 10.7189 9.06471C11.0086 10.3759 11.2933 11.6883 11.5789 13.0004C11.6132 13.139 11.6138 13.2843 11.5808 13.4233C11.4492 13.9298 10.9112 14.1514 10.4678 13.8761C9.3554 13.1846 8.2441 12.4897 7.1339 11.7917C7.03433 11.7291 6.9643 11.7311 6.86583 11.7917C5.75982 12.4865 4.65208 13.1783 3.5426 13.867C3.25238 14.0475 2.96079 14.0509 2.68807 13.8365C2.41945 13.6252 2.34806 13.3339 2.42082 12.9981C2.70776 11.6792 2.99416 10.3571 3.28493 9.03729C3.30736 8.93593 3.28493 8.88281 3.21655 8.82056C2.43751 8.1107 1.65382 7.40569 0.885446 6.6844C0.566226 6.38458 0.170415 6.15328 0 5.70526V5.36261L0.0202418 5.33405H0V5.27694C0.00481165 5.28329 0.0100202 5.2893 0.0155917 5.29493C0.0265333 5.28722 0.0410307 5.27951 0.0454074 5.26809C0.187921 4.87918 0.489361 4.76125 0.854809 4.73469C1.30861 4.70157 1.76159 4.65645 2.21457 4.61391C2.99826 4.54024 3.78168 4.46257 4.56564 4.39232C4.67314 4.3829 4.73277 4.34806 4.77681 4.23927C5.27739 3.00514 5.78371 1.77387 6.28702 0.540886C6.34173 0.408107 6.40628 0.283895 6.51242 0.189951C6.90741 -0.164411 7.49907 -0.00850327 7.71599 0.537174C8.20836 1.77473 8.72179 3.00286 9.22237 4.2367C9.26586 4.3435 9.32221 4.38433 9.4319 4.39261C9.88543 4.42688 10.3387 4.46971 10.7917 4.51225C11.5758 4.58592 12.3594 4.66074 13.1425 4.73669C13.314 4.75354 13.4857 4.76782 13.6406 4.86405C13.8364 4.9854 13.9275 5.18043 14 5.39116Z"
                                        fill="#FCC013"
                                      />
                                    </svg>
                                  </div>
                                  <p class="pera-sm">(5.0)</p>
                                </div>
                              </div>
                              <div class="date">
                                <p class="pera-sm">April 14, 2023</p>
                              </div>
                            </div>
                            <div class="reply">
                              <a href="javascript:void(0)" class="reply-btn"
                                >Reply</a
                              >
                            </div>
                          </div>
                          <div class="user-comment">
                            <p class="pera">
                              Simply dummy text of the printing and typesetting
                              industry. Lorem Ipsium has ashobeen the industry's
                              standards dummy repeat predefined chunks as
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="review-card">
                      <div class="wrap-user">
                        <div class="user-img">
                          <img src="/images/product/user-3.png" alt="img" />
                        </div>
                        <div class="wrap-info">
                          <div class="user-info">
                            <div class="name-ratting">
                              <div class="name-wrapper">
                                <h4 class="name">Elliot Alderson</h4>
                                <div class="ratting">
                                  <div class="all-ratting">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="14"
                                      height="14"
                                      viewBox="0 0 14 14"
                                      fill="none"
                                    >
                                      <path
                                        d="M14 5.39116V5.70526C13.9143 5.90196 13.7892 6.07722 13.6332 6.21924C12.687 7.07588 11.7485 7.94194 10.8032 8.80001C10.7159 8.87939 10.6937 8.94735 10.7189 9.06471C11.0086 10.3759 11.2933 11.6883 11.5789 13.0004C11.6132 13.139 11.6138 13.2843 11.5808 13.4233C11.4492 13.9298 10.9112 14.1514 10.4678 13.8761C9.3554 13.1846 8.2441 12.4897 7.1339 11.7917C7.03433 11.7291 6.9643 11.7311 6.86583 11.7917C5.75982 12.4865 4.65208 13.1783 3.5426 13.867C3.25238 14.0475 2.96079 14.0509 2.68807 13.8365C2.41945 13.6252 2.34806 13.3339 2.42082 12.9981C2.70776 11.6792 2.99416 10.3571 3.28493 9.03729C3.30736 8.93593 3.28493 8.88281 3.21655 8.82056C2.43751 8.1107 1.65382 7.40569 0.885446 6.6844C0.566226 6.38458 0.170415 6.15328 0 5.70526V5.36261L0.0202418 5.33405H0V5.27694C0.00481165 5.28329 0.0100202 5.2893 0.0155917 5.29493C0.0265333 5.28722 0.0410307 5.27951 0.0454074 5.26809C0.187921 4.87918 0.489361 4.76125 0.854809 4.73469C1.30861 4.70157 1.76159 4.65645 2.21457 4.61391C2.99826 4.54024 3.78168 4.46257 4.56564 4.39232C4.67314 4.3829 4.73277 4.34806 4.77681 4.23927C5.27739 3.00514 5.78371 1.77387 6.28702 0.540886C6.34173 0.408107 6.40628 0.283895 6.51242 0.189951C6.90741 -0.164411 7.49907 -0.00850327 7.71599 0.537174C8.20836 1.77473 8.72179 3.00286 9.22237 4.2367C9.26586 4.3435 9.32221 4.38433 9.4319 4.39261C9.88543 4.42688 10.3387 4.46971 10.7917 4.51225C11.5758 4.58592 12.3594 4.66074 13.1425 4.73669C13.314 4.75354 13.4857 4.76782 13.6406 4.86405C13.8364 4.9854 13.9275 5.18043 14 5.39116Z"
                                        fill="#FCC013"
                                      />
                                    </svg>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="14"
                                      height="14"
                                      viewBox="0 0 14 14"
                                      fill="none"
                                    >
                                      <path
                                        d="M14 5.39116V5.70526C13.9143 5.90196 13.7892 6.07722 13.6332 6.21924C12.687 7.07588 11.7485 7.94194 10.8032 8.80001C10.7159 8.87939 10.6937 8.94735 10.7189 9.06471C11.0086 10.3759 11.2933 11.6883 11.5789 13.0004C11.6132 13.139 11.6138 13.2843 11.5808 13.4233C11.4492 13.9298 10.9112 14.1514 10.4678 13.8761C9.3554 13.1846 8.2441 12.4897 7.1339 11.7917C7.03433 11.7291 6.9643 11.7311 6.86583 11.7917C5.75982 12.4865 4.65208 13.1783 3.5426 13.867C3.25238 14.0475 2.96079 14.0509 2.68807 13.8365C2.41945 13.6252 2.34806 13.3339 2.42082 12.9981C2.70776 11.6792 2.99416 10.3571 3.28493 9.03729C3.30736 8.93593 3.28493 8.88281 3.21655 8.82056C2.43751 8.1107 1.65382 7.40569 0.885446 6.6844C0.566226 6.38458 0.170415 6.15328 0 5.70526V5.36261L0.0202418 5.33405H0V5.27694C0.00481165 5.28329 0.0100202 5.2893 0.0155917 5.29493C0.0265333 5.28722 0.0410307 5.27951 0.0454074 5.26809C0.187921 4.87918 0.489361 4.76125 0.854809 4.73469C1.30861 4.70157 1.76159 4.65645 2.21457 4.61391C2.99826 4.54024 3.78168 4.46257 4.56564 4.39232C4.67314 4.3829 4.73277 4.34806 4.77681 4.23927C5.27739 3.00514 5.78371 1.77387 6.28702 0.540886C6.34173 0.408107 6.40628 0.283895 6.51242 0.189951C6.90741 -0.164411 7.49907 -0.00850327 7.71599 0.537174C8.20836 1.77473 8.72179 3.00286 9.22237 4.2367C9.26586 4.3435 9.32221 4.38433 9.4319 4.39261C9.88543 4.42688 10.3387 4.46971 10.7917 4.51225C11.5758 4.58592 12.3594 4.66074 13.1425 4.73669C13.314 4.75354 13.4857 4.76782 13.6406 4.86405C13.8364 4.9854 13.9275 5.18043 14 5.39116Z"
                                        fill="#FCC013"
                                      />
                                    </svg>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="14"
                                      height="14"
                                      viewBox="0 0 14 14"
                                      fill="none"
                                    >
                                      <path
                                        d="M14 5.39116V5.70526C13.9143 5.90196 13.7892 6.07722 13.6332 6.21924C12.687 7.07588 11.7485 7.94194 10.8032 8.80001C10.7159 8.87939 10.6937 8.94735 10.7189 9.06471C11.0086 10.3759 11.2933 11.6883 11.5789 13.0004C11.6132 13.139 11.6138 13.2843 11.5808 13.4233C11.4492 13.9298 10.9112 14.1514 10.4678 13.8761C9.3554 13.1846 8.2441 12.4897 7.1339 11.7917C7.03433 11.7291 6.9643 11.7311 6.86583 11.7917C5.75982 12.4865 4.65208 13.1783 3.5426 13.867C3.25238 14.0475 2.96079 14.0509 2.68807 13.8365C2.41945 13.6252 2.34806 13.3339 2.42082 12.9981C2.70776 11.6792 2.99416 10.3571 3.28493 9.03729C3.30736 8.93593 3.28493 8.88281 3.21655 8.82056C2.43751 8.1107 1.65382 7.40569 0.885446 6.6844C0.566226 6.38458 0.170415 6.15328 0 5.70526V5.36261L0.0202418 5.33405H0V5.27694C0.00481165 5.28329 0.0100202 5.2893 0.0155917 5.29493C0.0265333 5.28722 0.0410307 5.27951 0.0454074 5.26809C0.187921 4.87918 0.489361 4.76125 0.854809 4.73469C1.30861 4.70157 1.76159 4.65645 2.21457 4.61391C2.99826 4.54024 3.78168 4.46257 4.56564 4.39232C4.67314 4.3829 4.73277 4.34806 4.77681 4.23927C5.27739 3.00514 5.78371 1.77387 6.28702 0.540886C6.34173 0.408107 6.40628 0.283895 6.51242 0.189951C6.90741 -0.164411 7.49907 -0.00850327 7.71599 0.537174C8.20836 1.77473 8.72179 3.00286 9.22237 4.2367C9.26586 4.3435 9.32221 4.38433 9.4319 4.39261C9.88543 4.42688 10.3387 4.46971 10.7917 4.51225C11.5758 4.58592 12.3594 4.66074 13.1425 4.73669C13.314 4.75354 13.4857 4.76782 13.6406 4.86405C13.8364 4.9854 13.9275 5.18043 14 5.39116Z"
                                        fill="#FCC013"
                                      />
                                    </svg>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="14"
                                      height="14"
                                      viewBox="0 0 14 14"
                                      fill="none"
                                    >
                                      <path
                                        d="M14 5.39116V5.70526C13.9143 5.90196 13.7892 6.07722 13.6332 6.21924C12.687 7.07588 11.7485 7.94194 10.8032 8.80001C10.7159 8.87939 10.6937 8.94735 10.7189 9.06471C11.0086 10.3759 11.2933 11.6883 11.5789 13.0004C11.6132 13.139 11.6138 13.2843 11.5808 13.4233C11.4492 13.9298 10.9112 14.1514 10.4678 13.8761C9.3554 13.1846 8.2441 12.4897 7.1339 11.7917C7.03433 11.7291 6.9643 11.7311 6.86583 11.7917C5.75982 12.4865 4.65208 13.1783 3.5426 13.867C3.25238 14.0475 2.96079 14.0509 2.68807 13.8365C2.41945 13.6252 2.34806 13.3339 2.42082 12.9981C2.70776 11.6792 2.99416 10.3571 3.28493 9.03729C3.30736 8.93593 3.28493 8.88281 3.21655 8.82056C2.43751 8.1107 1.65382 7.40569 0.885446 6.6844C0.566226 6.38458 0.170415 6.15328 0 5.70526V5.36261L0.0202418 5.33405H0V5.27694C0.00481165 5.28329 0.0100202 5.2893 0.0155917 5.29493C0.0265333 5.28722 0.0410307 5.27951 0.0454074 5.26809C0.187921 4.87918 0.489361 4.76125 0.854809 4.73469C1.30861 4.70157 1.76159 4.65645 2.21457 4.61391C2.99826 4.54024 3.78168 4.46257 4.56564 4.39232C4.67314 4.3829 4.73277 4.34806 4.77681 4.23927C5.27739 3.00514 5.78371 1.77387 6.28702 0.540886C6.34173 0.408107 6.40628 0.283895 6.51242 0.189951C6.90741 -0.164411 7.49907 -0.00850327 7.71599 0.537174C8.20836 1.77473 8.72179 3.00286 9.22237 4.2367C9.26586 4.3435 9.32221 4.38433 9.4319 4.39261C9.88543 4.42688 10.3387 4.46971 10.7917 4.51225C11.5758 4.58592 12.3594 4.66074 13.1425 4.73669C13.314 4.75354 13.4857 4.76782 13.6406 4.86405C13.8364 4.9854 13.9275 5.18043 14 5.39116Z"
                                        fill="#FCC013"
                                      />
                                    </svg>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="14"
                                      height="14"
                                      viewBox="0 0 14 14"
                                      fill="none"
                                    >
                                      <path
                                        d="M14 5.39116V5.70526C13.9143 5.90196 13.7892 6.07722 13.6332 6.21924C12.687 7.07588 11.7485 7.94194 10.8032 8.80001C10.7159 8.87939 10.6937 8.94735 10.7189 9.06471C11.0086 10.3759 11.2933 11.6883 11.5789 13.0004C11.6132 13.139 11.6138 13.2843 11.5808 13.4233C11.4492 13.9298 10.9112 14.1514 10.4678 13.8761C9.3554 13.1846 8.2441 12.4897 7.1339 11.7917C7.03433 11.7291 6.9643 11.7311 6.86583 11.7917C5.75982 12.4865 4.65208 13.1783 3.5426 13.867C3.25238 14.0475 2.96079 14.0509 2.68807 13.8365C2.41945 13.6252 2.34806 13.3339 2.42082 12.9981C2.70776 11.6792 2.99416 10.3571 3.28493 9.03729C3.30736 8.93593 3.28493 8.88281 3.21655 8.82056C2.43751 8.1107 1.65382 7.40569 0.885446 6.6844C0.566226 6.38458 0.170415 6.15328 0 5.70526V5.36261L0.0202418 5.33405H0V5.27694C0.00481165 5.28329 0.0100202 5.2893 0.0155917 5.29493C0.0265333 5.28722 0.0410307 5.27951 0.0454074 5.26809C0.187921 4.87918 0.489361 4.76125 0.854809 4.73469C1.30861 4.70157 1.76159 4.65645 2.21457 4.61391C2.99826 4.54024 3.78168 4.46257 4.56564 4.39232C4.67314 4.3829 4.73277 4.34806 4.77681 4.23927C5.27739 3.00514 5.78371 1.77387 6.28702 0.540886C6.34173 0.408107 6.40628 0.283895 6.51242 0.189951C6.90741 -0.164411 7.49907 -0.00850327 7.71599 0.537174C8.20836 1.77473 8.72179 3.00286 9.22237 4.2367C9.26586 4.3435 9.32221 4.38433 9.4319 4.39261C9.88543 4.42688 10.3387 4.46971 10.7917 4.51225C11.5758 4.58592 12.3594 4.66074 13.1425 4.73669C13.314 4.75354 13.4857 4.76782 13.6406 4.86405C13.8364 4.9854 13.9275 5.18043 14 5.39116Z"
                                        fill="#FCC013"
                                      />
                                    </svg>
                                  </div>
                                  <p class="pera-sm">(5.0)</p>
                                </div>
                              </div>
                              <div class="date">
                                <p class="pera-sm">April 14, 2023</p>
                              </div>
                            </div>
                            <div class="reply">
                              <a href="javascript:void(0)" class="reply-btn"
                                >Reply</a
                              >
                            </div>
                          </div>
                          <div class="user-comment">
                            <p class="pera">
                              Simply dummy text of the printing and typesetting
                              industry. Lorem Ipsium has ashobeen the industry's
                              standards dummy repeat predefined chunks as
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- End Tab contents -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End-of more details area-->
    <!-- Related Product S t a r t -->
    <section class="related-product feature-area section-padding2">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title">
              <h4 class="title">Related Products</h4>
            </div>
            <div class="swiper featureSwiper-active">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div class="product-card best-product-card">
                    <div class="top-card">
                      <div class="price-section">
                        <h4 class="price text-color-primary">$320</h4>
                      </div>
                      <button class="wishlist-icon">
                        <img src="/images/icon/wish-icon-2.png" alt="img" />
                      </button>
                    </div>
                    <div class="product-img-card best-product-img-card">
                      <a href="shop-details.html">
                        <img src="/images/product/product-5.png" alt="img" />
                      </a>
                      <div class="special-icon">
                        <button class="icon-btn">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="21"
                            height="19"
                            viewBox="0 0 21 19"
                            fill="none"
                          >
                            <path
                              d="M0.978546 2.56816V5.13649H1.65442H2.33029V3.71701V2.292L5.45619 5.35743L8.58209 8.42285L9.07209 7.9368L9.56773 7.45628L6.44183 4.39085L3.31593 1.32542H4.76905H6.21654V0.662629V-0.000165939H3.59754H0.978546V2.56816Z"
                              fill="#111111"
                            />
                            <path
                              d="M15.1167 0.662629V1.32542H16.5642H18.0173L14.8914 4.39085L11.7655 7.45628L12.2611 7.9368L12.7511 8.42285L15.877 5.35743L19.0029 2.292V3.71701V5.13649H19.6788H20.3547V2.56816V-0.000165939H17.7357H15.1167V0.662629Z"
                              fill="#111111"
                            />
                            <path
                              d="M5.43926 13.6535L2.33026 16.7078V15.2828V13.8633H1.65439H0.978516V16.4317V19H3.59751H6.21651V18.3372V17.6744H4.76902H3.3159L6.4418 14.609L9.5677 11.5436L9.08896 11.0741C8.82988 10.8145 8.59895 10.6046 8.58206 10.6046C8.56516 10.6046 7.15146 11.9799 5.43926 13.6535Z"
                              fill="#111111"
                            />
                            <path
                              d="M12.2442 11.0741L11.7655 11.5436L14.8914 14.609L18.0173 17.6744H16.5641H15.1167V18.3372V19H17.7356H20.3546V16.4317V13.8633H19.6788H19.0029V15.2828V16.7078L15.8883 13.6535C14.1817 11.9799 12.768 10.6046 12.7511 10.6046C12.7342 10.6046 12.5033 10.8145 12.2442 11.0741Z"
                              fill="#111111"
                            />
                          </svg>
                        </button>
                        <button class="icon-btn">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="25"
                            viewBox="0 0 22 25"
                            fill="none"
                          >
                            <path
                              d="M9.4304 0.827005C9.4304 1.27952 9.41567 1.65419 9.40094 1.65419C9.38622 1.65419 9.14565 1.69798 8.87563 1.75637C4.21162 2.6906 0.73079 6.34481 0.0827378 10.9868C-0.0694564 12.0475 -0.00563302 13.663 0.225113 14.7432C0.809342 17.5069 2.62094 20.1004 5.01677 21.6185L5.29661 21.7937L5.98885 21.2779C6.36688 20.9957 6.68109 20.7524 6.68109 20.733C6.68109 20.7184 6.55835 20.6405 6.41107 20.5627C5.65992 20.1734 4.68293 19.3949 4.02015 18.6601C2.76332 17.2636 1.95816 15.5606 1.69796 13.77C1.60468 13.1083 1.60468 11.7945 1.69796 11.1668C1.89925 9.83845 2.37056 8.58308 3.07753 7.48341C3.96123 6.11612 5.30643 4.91914 6.77928 4.1844C7.52552 3.8146 8.56142 3.46426 9.2733 3.33775L9.4304 3.30856V3.98977C9.4304 4.36444 9.44022 4.67098 9.45495 4.67098C9.50404 4.67098 12.5725 2.36946 12.5725 2.3354C12.5725 2.30134 9.50404 -0.000179291 9.45495 -0.000179291C9.44022 -0.000179291 9.4304 0.369621 9.4304 0.827005Z"
                              fill="#111111"
                            />
                            <path
                              d="M16.0134 3.6345C15.6354 3.91672 15.331 4.16487 15.3457 4.18434C15.3604 4.20867 15.5077 4.30112 15.6795 4.39357C17.118 5.20129 18.4583 6.56371 19.288 8.07697C19.7888 8.98687 20.211 10.3104 20.3288 11.3419C20.427 12.1545 20.3681 13.551 20.211 14.2906C19.5335 17.4728 17.2997 20.0371 14.2165 21.1757C13.8287 21.3168 12.778 21.6039 12.6406 21.6039C12.5866 21.6039 12.5718 21.4822 12.5718 20.9227C12.5718 20.548 12.562 20.2414 12.5473 20.2414C12.4982 20.2414 9.42976 22.543 9.42976 22.577C9.42976 22.6111 12.4982 24.9126 12.5473 24.9126C12.562 24.9126 12.5718 24.5428 12.5718 24.0854V23.2631L12.7584 23.2339C13.215 23.1609 14.5062 22.8154 14.9284 22.65C18.7578 21.1659 21.3795 17.8767 21.9244 13.8673C22.0668 12.8357 22.003 11.2203 21.7771 10.1693C21.1929 7.40549 19.3813 4.81202 16.9855 3.2939L16.7056 3.11873L16.0134 3.6345Z"
                              fill="#111111"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <a href="shop-details.html">
                      <h4 class="product-title line-clamp-1">
                        Rift Gogan Sofa Large
                      </h4>
                    </a>
                    <div class="product-review">
                      <div class="product-ratting">
                        <i class="ri-star-s-fill"></i>
                        <i class="ri-star-s-fill"></i>
                        <i class="ri-star-s-fill"></i>
                        <i class="ri-star-s-fill"></i>
                        <i class="ri-star-s-fill"></i>
                      </div>
                      <p class="count-ratting">(11)</p>
                    </div>
                    <div
                      class="cart-card best-product-cart-card d-none d-md-block"
                    >
                      <a href="shop-details.html">
                        <h4 class="product-title line-clamp-1">
                          Rift Gogan Sofa Large
                        </h4>
                      </a>
                      <div class="product-review">
                        <div class="product-ratting">
                          <i class="ri-star-s-fill"></i>
                          <i class="ri-star-s-fill"></i>
                          <i class="ri-star-s-fill"></i>
                          <i class="ri-star-s-fill"></i>
                          <i class="ri-star-s-fill"></i>
                        </div>
                        <p class="count-ratting">(11)</p>
                      </div>
                      <div class="button-section">
                        <a href="javascript:void(0)" class="cart-btn"
                          >Add to Cart</a
                        >
                        <div class="fill-pill-btn qty-btn">
                          <div class="qty-container best-product-qty-container">
                            <div class="qty-btn-minus qty-btn mr-1">
                              <i class="ri-subtract-fill"></i>
                            </div>
                            <input
                              type="text"
                              name="qty"
                              value="0"
                              class="input-qty input-rounded"
                            />
                            <div class="qty-btn-plus qty-btn ml-1">
                              <i class="ri-add-fill"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="button-section d-block d-md-none">
                      <a href="javascript:void(0)" class="cart-btn"
                        >Add to Cart</a
                      >
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="product-card best-product-card">
                    <div class="top-card">
                      <div class="price-section">
                        <h4 class="price discounted">$700</h4>
                        <h4 class="price text-color-primary">$600</h4>
                      </div>
                      <button class="wishlist-icon">
                        <img src="/images/icon/wish-icon-2.png" alt="img" />
                      </button>
                    </div>
                    <div class="product-img-card best-product-img-card">
                      <a href="shop-details.html">
                        <img src="/images/product/product-6.png" alt="img" />
                      </a>
                      <div class="discount-badge">
                        <span class="percentage">- 35%</span>
                      </div>
                      <div class="special-icon">
                        <button class="icon-btn">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="21"
                            height="19"
                            viewBox="0 0 21 19"
                            fill="none"
                          >
                            <path
                              d="M0.978546 2.56816V5.13649H1.65442H2.33029V3.71701V2.292L5.45619 5.35743L8.58209 8.42285L9.07209 7.9368L9.56773 7.45628L6.44183 4.39085L3.31593 1.32542H4.76905H6.21654V0.662629V-0.000165939H3.59754H0.978546V2.56816Z"
                              fill="#111111"
                            />
                            <path
                              d="M15.1167 0.662629V1.32542H16.5642H18.0173L14.8914 4.39085L11.7655 7.45628L12.2611 7.9368L12.7511 8.42285L15.877 5.35743L19.0029 2.292V3.71701V5.13649H19.6788H20.3547V2.56816V-0.000165939H17.7357H15.1167V0.662629Z"
                              fill="#111111"
                            />
                            <path
                              d="M5.43926 13.6535L2.33026 16.7078V15.2828V13.8633H1.65439H0.978516V16.4317V19H3.59751H6.21651V18.3372V17.6744H4.76902H3.3159L6.4418 14.609L9.5677 11.5436L9.08896 11.0741C8.82988 10.8145 8.59895 10.6046 8.58206 10.6046C8.56516 10.6046 7.15146 11.9799 5.43926 13.6535Z"
                              fill="#111111"
                            />
                            <path
                              d="M12.2442 11.0741L11.7655 11.5436L14.8914 14.609L18.0173 17.6744H16.5641H15.1167V18.3372V19H17.7356H20.3546V16.4317V13.8633H19.6788H19.0029V15.2828V16.7078L15.8883 13.6535C14.1817 11.9799 12.768 10.6046 12.7511 10.6046C12.7342 10.6046 12.5033 10.8145 12.2442 11.0741Z"
                              fill="#111111"
                            />
                          </svg>
                        </button>
                        <button class="icon-btn">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="25"
                            viewBox="0 0 22 25"
                            fill="none"
                          >
                            <path
                              d="M9.4304 0.827005C9.4304 1.27952 9.41567 1.65419 9.40094 1.65419C9.38622 1.65419 9.14565 1.69798 8.87563 1.75637C4.21162 2.6906 0.73079 6.34481 0.0827378 10.9868C-0.0694564 12.0475 -0.00563302 13.663 0.225113 14.7432C0.809342 17.5069 2.62094 20.1004 5.01677 21.6185L5.29661 21.7937L5.98885 21.2779C6.36688 20.9957 6.68109 20.7524 6.68109 20.733C6.68109 20.7184 6.55835 20.6405 6.41107 20.5627C5.65992 20.1734 4.68293 19.3949 4.02015 18.6601C2.76332 17.2636 1.95816 15.5606 1.69796 13.77C1.60468 13.1083 1.60468 11.7945 1.69796 11.1668C1.89925 9.83845 2.37056 8.58308 3.07753 7.48341C3.96123 6.11612 5.30643 4.91914 6.77928 4.1844C7.52552 3.8146 8.56142 3.46426 9.2733 3.33775L9.4304 3.30856V3.98977C9.4304 4.36444 9.44022 4.67098 9.45495 4.67098C9.50404 4.67098 12.5725 2.36946 12.5725 2.3354C12.5725 2.30134 9.50404 -0.000179291 9.45495 -0.000179291C9.44022 -0.000179291 9.4304 0.369621 9.4304 0.827005Z"
                              fill="#111111"
                            />
                            <path
                              d="M16.0134 3.6345C15.6354 3.91672 15.331 4.16487 15.3457 4.18434C15.3604 4.20867 15.5077 4.30112 15.6795 4.39357C17.118 5.20129 18.4583 6.56371 19.288 8.07697C19.7888 8.98687 20.211 10.3104 20.3288 11.3419C20.427 12.1545 20.3681 13.551 20.211 14.2906C19.5335 17.4728 17.2997 20.0371 14.2165 21.1757C13.8287 21.3168 12.778 21.6039 12.6406 21.6039C12.5866 21.6039 12.5718 21.4822 12.5718 20.9227C12.5718 20.548 12.562 20.2414 12.5473 20.2414C12.4982 20.2414 9.42976 22.543 9.42976 22.577C9.42976 22.6111 12.4982 24.9126 12.5473 24.9126C12.562 24.9126 12.5718 24.5428 12.5718 24.0854V23.2631L12.7584 23.2339C13.215 23.1609 14.5062 22.8154 14.9284 22.65C18.7578 21.1659 21.3795 17.8767 21.9244 13.8673C22.0668 12.8357 22.003 11.2203 21.7771 10.1693C21.1929 7.40549 19.3813 4.81202 16.9855 3.2939L16.7056 3.11873L16.0134 3.6345Z"
                              fill="#111111"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <a href="shop-details.html">
                      <h4 class="product-title line-clamp-1">
                        Candelaria Fabric Sofa
                      </h4>
                    </a>
                    <div class="product-review">
                      <div class="product-ratting">
                        <i class="ri-star-s-fill"></i>
                        <i class="ri-star-s-fill"></i>
                        <i class="ri-star-s-fill"></i>
                        <i class="ri-star-s-fill"></i>
                        <i class="ri-star-s-fill"></i>
                      </div>
                      <p class="count-ratting">(36)</p>
                    </div>
                    <div
                      class="cart-card best-product-cart-card d-none d-md-block"
                    >
                      <a href="shop-details.html">
                        <h4 class="product-title line-clamp-1">
                          Candelaria Fabric Sofa
                        </h4>
                      </a>
                      <div class="product-review">
                        <div class="product-ratting">
                          <i class="ri-star-s-fill"></i>
                          <i class="ri-star-s-fill"></i>
                          <i class="ri-star-s-fill"></i>
                          <i class="ri-star-s-fill"></i>
                          <i class="ri-star-s-fill"></i>
                        </div>
                        <p class="count-ratting">(36)</p>
                      </div>
                      <div class="button-section">
                        <a href="javascript:void(0)" class="cart-btn"
                          >Add to Cart</a
                        >
                        <div class="fill-pill-btn qty-btn">
                          <div class="qty-container best-product-qty-container">
                            <div class="qty-btn-minus qty-btn mr-1">
                              <i class="ri-subtract-fill"></i>
                            </div>
                            <input
                              type="text"
                              name="qty"
                              value="0"
                              class="input-qty input-rounded"
                            />
                            <div class="qty-btn-plus qty-btn ml-1">
                              <i class="ri-add-fill"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="button-section d-block d-md-none">
                      <a href="javascript:void(0)" class="cart-btn"
                        >Add to Cart</a
                      >
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="product-card best-product-card">
                    <div class="top-card">
                      <div class="price-section">
                        <h4 class="price text-color-primary">$110</h4>
                      </div>
                      <button class="wishlist-icon">
                        <img src="/images/icon/wish-icon-2.png" alt="img" />
                      </button>
                    </div>
                    <div class="product-img-card best-product-img-card">
                      <a href="shop-details.html">
                        <img src="/images/product/product-7.png" alt="img" />
                      </a>
                      <div class="special-icon">
                        <button class="icon-btn">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="21"
                            height="19"
                            viewBox="0 0 21 19"
                            fill="none"
                          >
                            <path
                              d="M0.978546 2.56816V5.13649H1.65442H2.33029V3.71701V2.292L5.45619 5.35743L8.58209 8.42285L9.07209 7.9368L9.56773 7.45628L6.44183 4.39085L3.31593 1.32542H4.76905H6.21654V0.662629V-0.000165939H3.59754H0.978546V2.56816Z"
                              fill="#111111"
                            />
                            <path
                              d="M15.1167 0.662629V1.32542H16.5642H18.0173L14.8914 4.39085L11.7655 7.45628L12.2611 7.9368L12.7511 8.42285L15.877 5.35743L19.0029 2.292V3.71701V5.13649H19.6788H20.3547V2.56816V-0.000165939H17.7357H15.1167V0.662629Z"
                              fill="#111111"
                            />
                            <path
                              d="M5.43926 13.6535L2.33026 16.7078V15.2828V13.8633H1.65439H0.978516V16.4317V19H3.59751H6.21651V18.3372V17.6744H4.76902H3.3159L6.4418 14.609L9.5677 11.5436L9.08896 11.0741C8.82988 10.8145 8.59895 10.6046 8.58206 10.6046C8.56516 10.6046 7.15146 11.9799 5.43926 13.6535Z"
                              fill="#111111"
                            />
                            <path
                              d="M12.2442 11.0741L11.7655 11.5436L14.8914 14.609L18.0173 17.6744H16.5641H15.1167V18.3372V19H17.7356H20.3546V16.4317V13.8633H19.6788H19.0029V15.2828V16.7078L15.8883 13.6535C14.1817 11.9799 12.768 10.6046 12.7511 10.6046C12.7342 10.6046 12.5033 10.8145 12.2442 11.0741Z"
                              fill="#111111"
                            />
                          </svg>
                        </button>
                        <button class="icon-btn">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="25"
                            viewBox="0 0 22 25"
                            fill="none"
                          >
                            <path
                              d="M9.4304 0.827005C9.4304 1.27952 9.41567 1.65419 9.40094 1.65419C9.38622 1.65419 9.14565 1.69798 8.87563 1.75637C4.21162 2.6906 0.73079 6.34481 0.0827378 10.9868C-0.0694564 12.0475 -0.00563302 13.663 0.225113 14.7432C0.809342 17.5069 2.62094 20.1004 5.01677 21.6185L5.29661 21.7937L5.98885 21.2779C6.36688 20.9957 6.68109 20.7524 6.68109 20.733C6.68109 20.7184 6.55835 20.6405 6.41107 20.5627C5.65992 20.1734 4.68293 19.3949 4.02015 18.6601C2.76332 17.2636 1.95816 15.5606 1.69796 13.77C1.60468 13.1083 1.60468 11.7945 1.69796 11.1668C1.89925 9.83845 2.37056 8.58308 3.07753 7.48341C3.96123 6.11612 5.30643 4.91914 6.77928 4.1844C7.52552 3.8146 8.56142 3.46426 9.2733 3.33775L9.4304 3.30856V3.98977C9.4304 4.36444 9.44022 4.67098 9.45495 4.67098C9.50404 4.67098 12.5725 2.36946 12.5725 2.3354C12.5725 2.30134 9.50404 -0.000179291 9.45495 -0.000179291C9.44022 -0.000179291 9.4304 0.369621 9.4304 0.827005Z"
                              fill="#111111"
                            />
                            <path
                              d="M16.0134 3.6345C15.6354 3.91672 15.331 4.16487 15.3457 4.18434C15.3604 4.20867 15.5077 4.30112 15.6795 4.39357C17.118 5.20129 18.4583 6.56371 19.288 8.07697C19.7888 8.98687 20.211 10.3104 20.3288 11.3419C20.427 12.1545 20.3681 13.551 20.211 14.2906C19.5335 17.4728 17.2997 20.0371 14.2165 21.1757C13.8287 21.3168 12.778 21.6039 12.6406 21.6039C12.5866 21.6039 12.5718 21.4822 12.5718 20.9227C12.5718 20.548 12.562 20.2414 12.5473 20.2414C12.4982 20.2414 9.42976 22.543 9.42976 22.577C9.42976 22.6111 12.4982 24.9126 12.5473 24.9126C12.562 24.9126 12.5718 24.5428 12.5718 24.0854V23.2631L12.7584 23.2339C13.215 23.1609 14.5062 22.8154 14.9284 22.65C18.7578 21.1659 21.3795 17.8767 21.9244 13.8673C22.0668 12.8357 22.003 11.2203 21.7771 10.1693C21.1929 7.40549 19.3813 4.81202 16.9855 3.2939L16.7056 3.11873L16.0134 3.6345Z"
                              fill="#111111"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <a href="shop-details.html">
                      <h4 class="product-title line-clamp-1">
                        Envole Pendant Light
                      </h4>
                    </a>
                    <div class="product-review">
                      <div class="product-ratting">
                        <i class="ri-star-s-fill"></i>
                        <i class="ri-star-s-fill"></i>
                        <i class="ri-star-s-fill"></i>
                        <i class="ri-star-s-fill"></i>
                        <i class="ri-star-s-fill"></i>
                      </div>
                      <p class="count-ratting">(20)</p>
                    </div>
                    <div
                      class="cart-card best-product-cart-card d-none d-md-block"
                    >
                      <a href="shop-details.html">
                        <h4 class="product-title line-clamp-1">
                          Envole Pendant Light
                        </h4>
                      </a>
                      <div class="product-review">
                        <div class="product-ratting">
                          <i class="ri-star-s-fill"></i>
                          <i class="ri-star-s-fill"></i>
                          <i class="ri-star-s-fill"></i>
                          <i class="ri-star-s-fill"></i>
                          <i class="ri-star-s-fill"></i>
                        </div>
                        <p class="count-ratting">(20)</p>
                      </div>
                      <div class="button-section">
                        <a href="javascript:void(0)" class="cart-btn"
                          >Add to Cart</a
                        >
                        <div class="fill-pill-btn qty-btn">
                          <div class="qty-container best-product-qty-container">
                            <div class="qty-btn-minus qty-btn mr-1">
                              <i class="ri-subtract-fill"></i>
                            </div>
                            <input
                              type="text"
                              name="qty"
                              value="0"
                              class="input-qty input-rounded"
                            />
                            <div class="qty-btn-plus qty-btn ml-1">
                              <i class="ri-add-fill"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="button-section d-block d-md-none">
                      <a href="javascript:void(0)" class="cart-btn"
                        >Add to Cart</a
                      >
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="product-card best-product-card">
                    <div class="top-card">
                      <div class="price-section">
                        <h4 class="price discounted">$500</h4>
                        <h4 class="price text-color-primary">$460</h4>
                      </div>
                      <button class="wishlist-icon">
                        <img src="/images/icon/wish-icon-2.png" alt="img" />
                      </button>
                    </div>
                    <div class="product-img-card best-product-img-card">
                      <a href="shop-details.html">
                        <img src="/images/product/product-8.png" alt="img" />
                      </a>
                      <div class="discount-badge">
                        <span class="percentage">- 45%</span>
                      </div>
                      <div class="special-icon">
                        <button class="icon-btn">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="21"
                            height="19"
                            viewBox="0 0 21 19"
                            fill="none"
                          >
                            <path
                              d="M0.978546 2.56816V5.13649H1.65442H2.33029V3.71701V2.292L5.45619 5.35743L8.58209 8.42285L9.07209 7.9368L9.56773 7.45628L6.44183 4.39085L3.31593 1.32542H4.76905H6.21654V0.662629V-0.000165939H3.59754H0.978546V2.56816Z"
                              fill="#111111"
                            />
                            <path
                              d="M15.1167 0.662629V1.32542H16.5642H18.0173L14.8914 4.39085L11.7655 7.45628L12.2611 7.9368L12.7511 8.42285L15.877 5.35743L19.0029 2.292V3.71701V5.13649H19.6788H20.3547V2.56816V-0.000165939H17.7357H15.1167V0.662629Z"
                              fill="#111111"
                            />
                            <path
                              d="M5.43926 13.6535L2.33026 16.7078V15.2828V13.8633H1.65439H0.978516V16.4317V19H3.59751H6.21651V18.3372V17.6744H4.76902H3.3159L6.4418 14.609L9.5677 11.5436L9.08896 11.0741C8.82988 10.8145 8.59895 10.6046 8.58206 10.6046C8.56516 10.6046 7.15146 11.9799 5.43926 13.6535Z"
                              fill="#111111"
                            />
                            <path
                              d="M12.2442 11.0741L11.7655 11.5436L14.8914 14.609L18.0173 17.6744H16.5641H15.1167V18.3372V19H17.7356H20.3546V16.4317V13.8633H19.6788H19.0029V15.2828V16.7078L15.8883 13.6535C14.1817 11.9799 12.768 10.6046 12.7511 10.6046C12.7342 10.6046 12.5033 10.8145 12.2442 11.0741Z"
                              fill="#111111"
                            />
                          </svg>
                        </button>
                        <button class="icon-btn">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="25"
                            viewBox="0 0 22 25"
                            fill="none"
                          >
                            <path
                              d="M9.4304 0.827005C9.4304 1.27952 9.41567 1.65419 9.40094 1.65419C9.38622 1.65419 9.14565 1.69798 8.87563 1.75637C4.21162 2.6906 0.73079 6.34481 0.0827378 10.9868C-0.0694564 12.0475 -0.00563302 13.663 0.225113 14.7432C0.809342 17.5069 2.62094 20.1004 5.01677 21.6185L5.29661 21.7937L5.98885 21.2779C6.36688 20.9957 6.68109 20.7524 6.68109 20.733C6.68109 20.7184 6.55835 20.6405 6.41107 20.5627C5.65992 20.1734 4.68293 19.3949 4.02015 18.6601C2.76332 17.2636 1.95816 15.5606 1.69796 13.77C1.60468 13.1083 1.60468 11.7945 1.69796 11.1668C1.89925 9.83845 2.37056 8.58308 3.07753 7.48341C3.96123 6.11612 5.30643 4.91914 6.77928 4.1844C7.52552 3.8146 8.56142 3.46426 9.2733 3.33775L9.4304 3.30856V3.98977C9.4304 4.36444 9.44022 4.67098 9.45495 4.67098C9.50404 4.67098 12.5725 2.36946 12.5725 2.3354C12.5725 2.30134 9.50404 -0.000179291 9.45495 -0.000179291C9.44022 -0.000179291 9.4304 0.369621 9.4304 0.827005Z"
                              fill="#111111"
                            />
                            <path
                              d="M16.0134 3.6345C15.6354 3.91672 15.331 4.16487 15.3457 4.18434C15.3604 4.20867 15.5077 4.30112 15.6795 4.39357C17.118 5.20129 18.4583 6.56371 19.288 8.07697C19.7888 8.98687 20.211 10.3104 20.3288 11.3419C20.427 12.1545 20.3681 13.551 20.211 14.2906C19.5335 17.4728 17.2997 20.0371 14.2165 21.1757C13.8287 21.3168 12.778 21.6039 12.6406 21.6039C12.5866 21.6039 12.5718 21.4822 12.5718 20.9227C12.5718 20.548 12.562 20.2414 12.5473 20.2414C12.4982 20.2414 9.42976 22.543 9.42976 22.577C9.42976 22.6111 12.4982 24.9126 12.5473 24.9126C12.562 24.9126 12.5718 24.5428 12.5718 24.0854V23.2631L12.7584 23.2339C13.215 23.1609 14.5062 22.8154 14.9284 22.65C18.7578 21.1659 21.3795 17.8767 21.9244 13.8673C22.0668 12.8357 22.003 11.2203 21.7771 10.1693C21.1929 7.40549 19.3813 4.81202 16.9855 3.2939L16.7056 3.11873L16.0134 3.6345Z"
                              fill="#111111"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <a href="shop-details.html">
                      <h4 class="product-title line-clamp-1">
                        Otello Armchair Ghini
                      </h4>
                    </a>
                    <div class="product-review">
                      <div class="product-ratting">
                        <i class="ri-star-s-fill"></i>
                        <i class="ri-star-s-fill"></i>
                        <i class="ri-star-s-fill"></i>
                        <i class="ri-star-s-fill"></i>
                        <i class="ri-star-s-fill"></i>
                      </div>
                      <p class="count-ratting">(41)</p>
                    </div>
                    <div
                      class="cart-card best-product-cart-card d-none d-md-block"
                    >
                      <a href="shop-details.html">
                        <h4 class="product-title line-clamp-1">
                          Otello Armchair Ghini
                        </h4>
                      </a>
                      <div class="product-review">
                        <div class="product-ratting">
                          <i class="ri-star-s-fill"></i>
                          <i class="ri-star-s-fill"></i>
                          <i class="ri-star-s-fill"></i>
                          <i class="ri-star-s-fill"></i>
                          <i class="ri-star-s-fill"></i>
                        </div>
                        <p class="count-ratting">(41)</p>
                      </div>
                      <div class="button-section">
                        <a href="javascript:void(0)" class="cart-btn"
                          >Add to Cart</a
                        >
                        <div class="fill-pill-btn qty-btn">
                          <div class="qty-container best-product-qty-container">
                            <div class="qty-btn-minus qty-btn mr-1">
                              <i class="ri-subtract-fill"></i>
                            </div>
                            <input
                              type="text"
                              name="qty"
                              value="0"
                              class="input-qty input-rounded"
                            />
                            <div class="qty-btn-plus qty-btn ml-1">
                              <i class="ri-add-fill"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="button-section d-block d-md-none">
                      <a href="javascript:void(0)" class="cart-btn"
                        >Add to Cart</a
                      >
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="product-card best-product-card">
                    <div class="top-card">
                      <div class="price-section">
                        <h4 class="price text-color-primary">$300</h4>
                      </div>
                      <button class="wishlist-icon">
                        <img src="/images/icon/wish-icon-2.png" alt="img" />
                      </button>
                    </div>
                    <div class="product-img-card best-product-img-card">
                      <a href="shop-details.html">
                        <img src="/images/product/product-9.png" alt="img" />
                      </a>
                      <div class="special-icon">
                        <button class="icon-btn">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="21"
                            height="19"
                            viewBox="0 0 21 19"
                            fill="none"
                          >
                            <path
                              d="M0.978546 2.56816V5.13649H1.65442H2.33029V3.71701V2.292L5.45619 5.35743L8.58209 8.42285L9.07209 7.9368L9.56773 7.45628L6.44183 4.39085L3.31593 1.32542H4.76905H6.21654V0.662629V-0.000165939H3.59754H0.978546V2.56816Z"
                              fill="#111111"
                            />
                            <path
                              d="M15.1167 0.662629V1.32542H16.5642H18.0173L14.8914 4.39085L11.7655 7.45628L12.2611 7.9368L12.7511 8.42285L15.877 5.35743L19.0029 2.292V3.71701V5.13649H19.6788H20.3547V2.56816V-0.000165939H17.7357H15.1167V0.662629Z"
                              fill="#111111"
                            />
                            <path
                              d="M5.43926 13.6535L2.33026 16.7078V15.2828V13.8633H1.65439H0.978516V16.4317V19H3.59751H6.21651V18.3372V17.6744H4.76902H3.3159L6.4418 14.609L9.5677 11.5436L9.08896 11.0741C8.82988 10.8145 8.59895 10.6046 8.58206 10.6046C8.56516 10.6046 7.15146 11.9799 5.43926 13.6535Z"
                              fill="#111111"
                            />
                            <path
                              d="M12.2442 11.0741L11.7655 11.5436L14.8914 14.609L18.0173 17.6744H16.5641H15.1167V18.3372V19H17.7356H20.3546V16.4317V13.8633H19.6788H19.0029V15.2828V16.7078L15.8883 13.6535C14.1817 11.9799 12.768 10.6046 12.7511 10.6046C12.7342 10.6046 12.5033 10.8145 12.2442 11.0741Z"
                              fill="#111111"
                            />
                          </svg>
                        </button>
                        <button class="icon-btn">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="25"
                            viewBox="0 0 22 25"
                            fill="none"
                          >
                            <path
                              d="M9.4304 0.827005C9.4304 1.27952 9.41567 1.65419 9.40094 1.65419C9.38622 1.65419 9.14565 1.69798 8.87563 1.75637C4.21162 2.6906 0.73079 6.34481 0.0827378 10.9868C-0.0694564 12.0475 -0.00563302 13.663 0.225113 14.7432C0.809342 17.5069 2.62094 20.1004 5.01677 21.6185L5.29661 21.7937L5.98885 21.2779C6.36688 20.9957 6.68109 20.7524 6.68109 20.733C6.68109 20.7184 6.55835 20.6405 6.41107 20.5627C5.65992 20.1734 4.68293 19.3949 4.02015 18.6601C2.76332 17.2636 1.95816 15.5606 1.69796 13.77C1.60468 13.1083 1.60468 11.7945 1.69796 11.1668C1.89925 9.83845 2.37056 8.58308 3.07753 7.48341C3.96123 6.11612 5.30643 4.91914 6.77928 4.1844C7.52552 3.8146 8.56142 3.46426 9.2733 3.33775L9.4304 3.30856V3.98977C9.4304 4.36444 9.44022 4.67098 9.45495 4.67098C9.50404 4.67098 12.5725 2.36946 12.5725 2.3354C12.5725 2.30134 9.50404 -0.000179291 9.45495 -0.000179291C9.44022 -0.000179291 9.4304 0.369621 9.4304 0.827005Z"
                              fill="#111111"
                            />
                            <path
                              d="M16.0134 3.6345C15.6354 3.91672 15.331 4.16487 15.3457 4.18434C15.3604 4.20867 15.5077 4.30112 15.6795 4.39357C17.118 5.20129 18.4583 6.56371 19.288 8.07697C19.7888 8.98687 20.211 10.3104 20.3288 11.3419C20.427 12.1545 20.3681 13.551 20.211 14.2906C19.5335 17.4728 17.2997 20.0371 14.2165 21.1757C13.8287 21.3168 12.778 21.6039 12.6406 21.6039C12.5866 21.6039 12.5718 21.4822 12.5718 20.9227C12.5718 20.548 12.562 20.2414 12.5473 20.2414C12.4982 20.2414 9.42976 22.543 9.42976 22.577C9.42976 22.6111 12.4982 24.9126 12.5473 24.9126C12.562 24.9126 12.5718 24.5428 12.5718 24.0854V23.2631L12.7584 23.2339C13.215 23.1609 14.5062 22.8154 14.9284 22.65C18.7578 21.1659 21.3795 17.8767 21.9244 13.8673C22.0668 12.8357 22.003 11.2203 21.7771 10.1693C21.1929 7.40549 19.3813 4.81202 16.9855 3.2939L16.7056 3.11873L16.0134 3.6345Z"
                              fill="#111111"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <a href="shop-details.html">
                      <h4 class="product-title line-clamp-1">
                        Orca is an Armchair
                      </h4>
                    </a>
                    <div class="product-review">
                      <div class="product-ratting">
                        <i class="ri-star-s-fill"></i>
                        <i class="ri-star-s-fill"></i>
                        <i class="ri-star-s-fill"></i>
                        <i class="ri-star-s-fill"></i>
                        <i class="ri-star-s-fill"></i>
                      </div>
                      <p class="count-ratting">(25)</p>
                    </div>
                    <div
                      class="cart-card best-product-cart-card d-none d-md-block"
                    >
                      <a href="shop-details.html">
                        <h4 class="product-title line-clamp-1">
                          Orca is an Armchair
                        </h4>
                      </a>
                      <div class="product-review">
                        <div class="product-ratting">
                          <i class="ri-star-s-fill"></i>
                          <i class="ri-star-s-fill"></i>
                          <i class="ri-star-s-fill"></i>
                          <i class="ri-star-s-fill"></i>
                          <i class="ri-star-s-fill"></i>
                        </div>
                        <p class="count-ratting">(25)</p>
                      </div>
                      <div class="button-section">
                        <a href="javascript:void(0)" class="cart-btn"
                          >Add to Cart</a
                        >
                        <div class="fill-pill-btn qty-btn">
                          <div class="qty-container best-product-qty-container">
                            <div class="qty-btn-minus qty-btn mr-1">
                              <i class="ri-subtract-fill"></i>
                            </div>
                            <input
                              type="text"
                              name="qty"
                              value="0"
                              class="input-qty input-rounded"
                            />
                            <div class="qty-btn-plus qty-btn ml-1">
                              <i class="ri-add-fill"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="button-section d-block d-md-none">
                      <a href="javascript:void(0)" class="cart-btn"
                        >Add to Cart</a
                      >
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="product-card best-product-card">
                    <div class="top-card">
                      <div class="price-section">
                        <h4 class="price text-color-primary">$500</h4>
                      </div>
                      <button class="wishlist-icon">
                        <img src="/images/icon/wish-icon-2.png" alt="img" />
                      </button>
                    </div>
                    <div class="product-img-card best-product-img-card">
                      <a href="shop-details.html">
                        <img src="/images/product/product-10.png" alt="img" />
                      </a>
                      <div class="special-icon">
                        <button class="icon-btn">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="21"
                            height="19"
                            viewBox="0 0 21 19"
                            fill="none"
                          >
                            <path
                              d="M0.978546 2.56816V5.13649H1.65442H2.33029V3.71701V2.292L5.45619 5.35743L8.58209 8.42285L9.07209 7.9368L9.56773 7.45628L6.44183 4.39085L3.31593 1.32542H4.76905H6.21654V0.662629V-0.000165939H3.59754H0.978546V2.56816Z"
                              fill="#111111"
                            />
                            <path
                              d="M15.1167 0.662629V1.32542H16.5642H18.0173L14.8914 4.39085L11.7655 7.45628L12.2611 7.9368L12.7511 8.42285L15.877 5.35743L19.0029 2.292V3.71701V5.13649H19.6788H20.3547V2.56816V-0.000165939H17.7357H15.1167V0.662629Z"
                              fill="#111111"
                            />
                            <path
                              d="M5.43926 13.6535L2.33026 16.7078V15.2828V13.8633H1.65439H0.978516V16.4317V19H3.59751H6.21651V18.3372V17.6744H4.76902H3.3159L6.4418 14.609L9.5677 11.5436L9.08896 11.0741C8.82988 10.8145 8.59895 10.6046 8.58206 10.6046C8.56516 10.6046 7.15146 11.9799 5.43926 13.6535Z"
                              fill="#111111"
                            />
                            <path
                              d="M12.2442 11.0741L11.7655 11.5436L14.8914 14.609L18.0173 17.6744H16.5641H15.1167V18.3372V19H17.7356H20.3546V16.4317V13.8633H19.6788H19.0029V15.2828V16.7078L15.8883 13.6535C14.1817 11.9799 12.768 10.6046 12.7511 10.6046C12.7342 10.6046 12.5033 10.8145 12.2442 11.0741Z"
                              fill="#111111"
                            />
                          </svg>
                        </button>
                        <button class="icon-btn">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="25"
                            viewBox="0 0 22 25"
                            fill="none"
                          >
                            <path
                              d="M9.4304 0.827005C9.4304 1.27952 9.41567 1.65419 9.40094 1.65419C9.38622 1.65419 9.14565 1.69798 8.87563 1.75637C4.21162 2.6906 0.73079 6.34481 0.0827378 10.9868C-0.0694564 12.0475 -0.00563302 13.663 0.225113 14.7432C0.809342 17.5069 2.62094 20.1004 5.01677 21.6185L5.29661 21.7937L5.98885 21.2779C6.36688 20.9957 6.68109 20.7524 6.68109 20.733C6.68109 20.7184 6.55835 20.6405 6.41107 20.5627C5.65992 20.1734 4.68293 19.3949 4.02015 18.6601C2.76332 17.2636 1.95816 15.5606 1.69796 13.77C1.60468 13.1083 1.60468 11.7945 1.69796 11.1668C1.89925 9.83845 2.37056 8.58308 3.07753 7.48341C3.96123 6.11612 5.30643 4.91914 6.77928 4.1844C7.52552 3.8146 8.56142 3.46426 9.2733 3.33775L9.4304 3.30856V3.98977C9.4304 4.36444 9.44022 4.67098 9.45495 4.67098C9.50404 4.67098 12.5725 2.36946 12.5725 2.3354C12.5725 2.30134 9.50404 -0.000179291 9.45495 -0.000179291C9.44022 -0.000179291 9.4304 0.369621 9.4304 0.827005Z"
                              fill="#111111"
                            />
                            <path
                              d="M16.0134 3.6345C15.6354 3.91672 15.331 4.16487 15.3457 4.18434C15.3604 4.20867 15.5077 4.30112 15.6795 4.39357C17.118 5.20129 18.4583 6.56371 19.288 8.07697C19.7888 8.98687 20.211 10.3104 20.3288 11.3419C20.427 12.1545 20.3681 13.551 20.211 14.2906C19.5335 17.4728 17.2997 20.0371 14.2165 21.1757C13.8287 21.3168 12.778 21.6039 12.6406 21.6039C12.5866 21.6039 12.5718 21.4822 12.5718 20.9227C12.5718 20.548 12.562 20.2414 12.5473 20.2414C12.4982 20.2414 9.42976 22.543 9.42976 22.577C9.42976 22.6111 12.4982 24.9126 12.5473 24.9126C12.562 24.9126 12.5718 24.5428 12.5718 24.0854V23.2631L12.7584 23.2339C13.215 23.1609 14.5062 22.8154 14.9284 22.65C18.7578 21.1659 21.3795 17.8767 21.9244 13.8673C22.0668 12.8357 22.003 11.2203 21.7771 10.1693C21.1929 7.40549 19.3813 4.81202 16.9855 3.2939L16.7056 3.11873L16.0134 3.6345Z"
                              fill="#111111"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <a href="shop-details.html">
                      <h4 class="product-title line-clamp-1">
                        Kelly Bracelet Amchair
                      </h4>
                    </a>
                    <div class="product-review">
                      <div class="product-ratting">
                        <i class="ri-star-s-fill"></i>
                        <i class="ri-star-s-fill"></i>
                        <i class="ri-star-s-fill"></i>
                        <i class="ri-star-s-fill"></i>
                        <i class="ri-star-s-fill"></i>
                      </div>
                      <p class="count-ratting">(22)</p>
                    </div>
                    <div
                      class="cart-card best-product-cart-card d-none d-md-block"
                    >
                      <a href="shop-details.html">
                        <h4 class="product-title line-clamp-1">
                          Kelly Bracelet Amchair
                        </h4>
                      </a>
                      <div class="product-review">
                        <div class="product-ratting">
                          <i class="ri-star-s-fill"></i>
                          <i class="ri-star-s-fill"></i>
                          <i class="ri-star-s-fill"></i>
                          <i class="ri-star-s-fill"></i>
                          <i class="ri-star-s-fill"></i>
                        </div>
                        <p class="count-ratting">(22)</p>
                      </div>
                      <div class="button-section">
                        <a href="javascript:void(0)" class="cart-btn"
                          >Add to Cart</a
                        >
                        <div class="fill-pill-btn qty-btn">
                          <div class="qty-container best-product-qty-container">
                            <div class="qty-btn-minus qty-btn mr-1">
                              <i class="ri-subtract-fill"></i>
                            </div>
                            <input
                              type="text"
                              name="qty"
                              value="0"
                              class="input-qty input-rounded"
                            />
                            <div class="qty-btn-plus qty-btn ml-1">
                              <i class="ri-add-fill"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="button-section d-block d-md-none">
                      <a href="javascript:void(0)" class="cart-btn"
                        >Add to Cart</a
                      >
                    </div>
                  </div>
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
    <!-- End-of Related Product -->
  </div>
</template>

<script>
import { useFrontStore } from "~/stores/frontStore";
export default {
  setup() {
    const frontStore = useFrontStore();
    const route = useRoute();
    const productId = route.params.id;
    const singleItem = computed(() => {
      return frontStore.getIdProduct(productId);
    });
    return {
      singleItem,
    };
  },
};
</script>