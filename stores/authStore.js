export const useAuthStore = defineStore("authStore", {
  state: () => ({
    authUser: [],
    isLoggedIn: false,
    loading: false,
    success: false,
    error: false,
    userAccounts: [
      {
        id: 1,
        username: "munns",
        firstName: "Munna",
        lastName: "Ahmed",
        email: "msdmunna77@gmail.com",
        phone: "+8801400091582",
        password: "munns",
        addr: {
          addr1: "Khoksa-7020",
          addr2: "Kushtia, Khulna",
          zip: "7020",
        },
      },
    ],
  }),
  actions: {
    loginAccount(info) {
      const user = this.userAccounts.find((u) => (u.email === info.email || u.username === info.email) && u.password === info.password);
      console.log(info);
      if (user) {
        this.authUser = user;
        this.isLoggedIn = true;
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("isLoggedIn", true);
        this.error = false;
        this.success = true;
      } else {
        this.success = false;
        this.error = true;
      }
      new Promise((resolve) => setTimeout(resolve, 300));
    },
  },
  getters: {},
});
