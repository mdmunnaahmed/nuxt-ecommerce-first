<template>
  <!-- Breadcrumbs S t a r t -->
  <section class="breadcrumb-section breadcrumb-bg">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="breadcrumb-text">
            <h1 class="title wow fadeInUp" data-wow-delay="0.1s">Login</h1>
            <nav
              aria-label="breadcrumb"
              class="breadcrumb-nav wow fadeInUp"
              data-wow-delay="0.0s"
            >
              <ul class="breadcrumb listing">
                <li class="breadcrumb-item single-list">
                  <a href="index.html" class="single">Home</a>
                </li>
                <li class="breadcrumb-item single-list" aria-current="page">
                  <a href="javascript:void(0)" class="single active">Login</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End-of Breadcrumbs-->

  <!-- Login area S t a r t  -->
  <div class="login-area section-padding">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-5 col-lg-6 col-md-8 col-sm-10">
          <div class="login-card">
            <!-- Form -->
            <form action="" method="POST" @submit.prevent="submitForm">
              <div class="position-relative contact-form mb-24">
                <label class="contact-label">Email </label>
                <input
                  class="form-control contact-input"
                  type="text"
                  placeholder="Enter your email"
                  v-model="email"
                />
              </div>

              <div class="contact-form mb-24">
                <div class="position-relative">
                  <div
                    class="d-flex justify-content-between aligin-items-center"
                  >
                    <label class="contact-label">Password</label>
                    <a href="/forgot-pass"
                      ><span class="text-primary text-15">
                        Forgot password?
                      </span></a
                    >
                  </div>
                  <input
                    :type="isPasswordVisible ? 'text' : 'password'"
                    class="form-control contact-input password-input"
                    placeholder="Enter Password"
                    v-model="password"
                  />
                  <i
                    class="toggle-password ri-eye-line"
                    @click="togglePasswordVisibility"
                  ></i>
                </div>
              </div>

              <button
                class="btn-primary-fill justify-content-center w-100"
                type="submit"
              >
                <span class="d-flex justify-content-center gap-6"> Login </span>
              </button>
              <span
                class="block mt-2 font-bold text-center text-green-600"
                v-if="success"
                >You are logged in!</span
              >
              <span
                class="block mt-2 font-bold text-center text-red-600"
                v-if="error"
                >Your email or pass is wrong</span
              >
            </form>

            <div class="login-footer">
              <div class="create-account">
                <p>
                  Don’t have an account?
                  <a href="/register">
                    <span class="text-primary">Register</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--/ End-of Login -->
</template>

<script setup>
import { useAuthStore } from "~/stores/authStore";
function formatCurrentDateTime() {
  const now = new Date();

  // Get hours and minutes
  let hours = now.getHours();
  let minutes = now.getMinutes();
  const ampm = hours >= 12 ? "pm" : "am";

  // Format hours to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes; // Pad single digit minutes

  // Get day, month, and year
  const day = now.getDate();
  const month = now.toLocaleString("default", { month: "short" });
  const year = now.getFullYear().toString().slice(-2); // Get last 2 digits of the year

  // Format date and time
  const formattedTime = `${hours}:${minutes}${ampm}`;
  const formattedDate = `${day} ${month} ${year}`;

  return `${formattedTime}, ${formattedDate}`;
}
const authStore = useAuthStore();
const router = useRouter();
const email = ref("msdmunna77@gmail.com");
const password = ref("munns");
const success = computed(() => {
  return authStore.success;
});
const error = computed(() => {
  return authStore.error;
});
const submitForm = () => {
  if (email.value && password.value) {
    authStore.loginAccount({
      email: email.value,
      password: password.value,
      lastLogin_at: formatCurrentDateTime(),
    });
    email.value = "";
    password.value = "";
    router.push("/profile");
  }
};
const isPasswordVisible = ref(false);
const togglePasswordVisibility = () => {
  isPasswordVisible.value = !isPasswordVisible.value;
};
</script>