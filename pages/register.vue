<template>
  <!-- Breadcrumbs S t a r t -->
  <section class="breadcrumb-section breadcrumb-bg">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="breadcrumb-text">
            <h1 class="title wow fadeInUp" data-wow-delay="0.1s">Register</h1>
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
                  <a href="javascript:void(0)" class="single active"
                    >Register</a
                  >
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
            <form action="#" method="POST" @submit.prevent="submitForm">
              <div class="contact-form mb-3">
                <label class="contact-label">Name </label>
                <input
                  class="form-control contact-input"
                  type="text"
                  id="name"
                  placeholder="Enter Your Name"
                  v-model="name"
                />
              </div>
              <div class="contact-form mb-3">
                <label class="contact-label">Username </label>
                <input
                  class="form-control contact-input"
                  type="text"
                  placeholder=""
                  id="username"
                  v-model="username"
                  @blur="checkUname"
                />
                <span v-if="unameError" class="text-red-500"
                  >username must be more than 6 char</span
                >
              </div>
              <div class="contact-form mb-3">
                <label class="contact-label">Email </label>
                <input
                  class="form-control contact-input"
                  type="email"
                  placeholder="Email"
                  v-model="email"
                />
              </div>

              <!-- Password -->
              <div class="position-relative contact-form mb-3">
                <label class="contact-label">Enter Password</label>
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
              <!-- Password -->
              <div class="position-relative contact-form mb-3">
                <label class="contact-label">Confirm Password</label>
                <input
                  :type="isPasswordVisible ? 'text' : 'password'"
                  class="form-control contact-input password-input"
                  placeholder="Confirm Password"
                  v-model="confirmPassword"
                />
                <i
                  class="toggle-password ri-eye-line"
                  @click="togglePasswordVisibility"
                ></i>
                <span class="text-red-500" v-if="passwordError"
                  >password not matched</span
                >
              </div>

              <button class="btn-primary-fill justify-content-center w-100">
                <span class="d-flex justify-content-center gap-6">
                  <span>Register</span>
                </span>
              </button>
            </form>

            <div class="login-footer">
              <div class="create-account">
                <p>
                  Already have an account?
                  <a href="/login">
                    <span class="text-primary">Login</span>
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
  {{ authStore.userAccounts }}
</template>

<script setup>
import { useAuthStore } from "~/stores/authStore";
const router = useRouter()
const authStore = useAuthStore();
const name = ref("");
const email = ref("");
const username = ref("");
const password = ref("");
const confirmPassword = ref("");

const unameError = ref(false);
// const nameError = ref(false);
// const emailError = ref(false);
const passwordError = ref(false);

const checkUname = () => {
  if (username.value.length < 6) {
    unameError.value = true;
    return;
  } else {
    unameError.value = false;
  }
};
const checkPasswordMatch = () => {
  if (password.value != confirmPassword.value) {
    passwordError.value = true;
    return;
  } else {
    passwordError.value = false;
  }
};

const submitForm = () => {
  checkUname();
  checkPasswordMatch();
  if (
    name.value &&
    email.value &&
    password.value &&
    confirmPassword.value &&
    username.value.length >= 6
  ) {
    authStore.addUserAccount({
      firstName: name.value,
      email: email.value,
      username: username.value,
      password: password,
    });
    router.push('/profile')
  }
};

const isPasswordVisible = ref(false);
const togglePasswordVisibility = () => {
  isPasswordVisible.value = !isPasswordVisible.value;
};
</script>

<style lang="scss" scoped></style>
